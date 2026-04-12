import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { LandingNav } from "../landing-nav";

export const metadata: Metadata = {
  title: "Blog | Revalo – Google Bewertungen Tipps & Guides",
  description:
    "Tipps und Guides rund um Google Bewertungen, Bewertungsmanagement und Online-Reputation für lokale Unternehmen.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <LandingNav logoUrl={null} businessName="Revalo" />

      <section className="relative pb-20 pt-32 sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-sky-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-4xl px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Tipps und Guides rund um Google Bewertungen und Online-Reputation.
          </p>

          <div className="mt-12 space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-sky-500/20 hover:bg-white/[0.06]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("de-DE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readingTime} Lesezeit</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-sky-400">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-slate-950 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2026 Revalo. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
