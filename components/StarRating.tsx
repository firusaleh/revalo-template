"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { siteConfig } from "@/site.config";

type StarRatingProps = {
  onSelect: (rating: number) => void;
  disabled?: boolean;
};

export function StarRating({ onSelect, disabled }: StarRatingProps) {
  const [hover, setHover] = useState(0);
  const [selected, setSelected] = useState(0);

  return (
    <div
      className="flex items-center justify-center gap-2"
      role="radiogroup"
      aria-label="Bewertung"
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const active = n <= (hover || selected);
        return (
          <button
            key={n}
            type="button"
            disabled={disabled}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onFocus={() => setHover(n)}
            onBlur={() => setHover(0)}
            onClick={() => {
              setSelected(n);
              onSelect(n);
            }}
            role="radio"
            aria-checked={selected === n}
            aria-label={`${n} ${n === 1 ? "Stern" : "Sterne"}`}
            className="p-3 rounded-xl transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:hover:scale-100"
            style={{ minWidth: 72, minHeight: 72 }}
          >
            <Star
              size={48}
              strokeWidth={2}
              fill={active ? siteConfig.primaryColor : "transparent"}
              stroke={active ? siteConfig.primaryColor : "#94a3b8"}
            />
          </button>
        );
      })}
    </div>
  );
}
