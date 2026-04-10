import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchGoogleReviews } from "../places";

const ORIGINAL_KEY = process.env.GOOGLE_PLACES_API_KEY;

describe("fetchGoogleReviews", () => {
  beforeEach(() => {
    process.env.GOOGLE_PLACES_API_KEY = "test-key";
  });

  afterEach(() => {
    process.env.GOOGLE_PLACES_API_KEY = ORIGINAL_KEY;
    vi.restoreAllMocks();
  });

  it("returns mapped reviews on success", async () => {
    const mockBody = {
      result: {
        rating: 4.5,
        reviews: [
          {
            author_name: "Anna M.",
            rating: 5,
            text: "Super!",
            time: 1700000000,
            profile_photo_url: "https://example.com/a.jpg",
            relative_time_description: "vor 1 Woche",
          },
          {
            author_name: "Bernd S.",
            rating: 4,
            text: "Gut.",
            time: 1700100000,
          },
        ],
      },
      status: "OK",
    };

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      statusText: "OK",
      json: async () => mockBody,
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await fetchGoogleReviews("place-123");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toContain("place_id=place-123");
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      authorName: "Anna M.",
      rating: 5,
      text: "Super!",
      time: 1700000000,
      profilePhotoUrl: "https://example.com/a.jpg",
      relativeTime: "vor 1 Woche",
    });
    expect(result[1].authorName).toBe("Bernd S.");
    expect(result[1].profilePhotoUrl).toBeUndefined();
  });

  it("returns an empty array when GOOGLE_PLACES_API_KEY is missing", async () => {
    delete process.env.GOOGLE_PLACES_API_KEY;
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const result = await fetchGoogleReviews("place-123");

    expect(result).toEqual([]);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalled();
  });

  it("throws on non-200 responses", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      json: async () => ({}),
    });
    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchGoogleReviews("place-123")).rejects.toThrow(
      /Google Places API request failed: 500/,
    );
  });
});
