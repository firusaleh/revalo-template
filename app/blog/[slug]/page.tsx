import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog";
import { LandingNav } from "../../landing-nav";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Revalo Blog`,
    description: post.description,
    keywords: post.keywords.join(", "),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const otherPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Revalo" },
    mainEntityOfPage: `https://getrevalo.de/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <LandingNav logoUrl={null} businessName="Revalo" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="relative pb-20 pt-32 sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-sky-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-3xl px-6">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-400">{post.title}</span>
          </nav>

          {/* Header */}
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

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose-invert prose prose-slate mt-12 max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-6 prose-h3:text-lg prose-p:leading-relaxed prose-p:text-slate-300 prose-a:text-sky-400 prose-strong:text-white prose-blockquote:border-sky-500/30 prose-blockquote:text-slate-400 prose-code:rounded prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sky-300 prose-li:text-slate-300">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("### "))
                return (
                  <h3 key={i}>{line.slice(4)}</h3>
                );
              if (line.startsWith("## "))
                return (
                  <h2 key={i}>{line.slice(3)}</h2>
                );
              if (line.startsWith("> "))
                return (
                  <blockquote key={i}>
                    <p>{line.slice(2)}</p>
                  </blockquote>
                );
              if (line.startsWith("- "))
                return (
                  <li key={i}>{line.slice(2)}</li>
                );
              if (line.startsWith("**") && line.endsWith("**"))
                return (
                  <p key={i}>
                    <strong>{line.slice(2, -2)}</strong>
                  </p>
                );
              if (line.trim() === "") return <br key={i} />;
              // Handle inline bold
              const parts = line.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j}>{part.slice(2, -2)}</strong>
                    ) : (
                      part
                    ),
                  )}
                </p>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-16 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-8 text-center">
            <h3 className="text-xl font-bold text-white">
              Jetzt mit Revalo durchstarten
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Automatisieren Sie Ihr Bewertungsmanagement und sammeln Sie mehr
              Google-Bewertungen — ohne Aufwand.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400"
            >
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Weitere Artikel */}
          {otherPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold text-white">Weitere Artikel</h2>
              <div className="mt-6 space-y-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-sky-500/20 hover:bg-white/[0.05]"
                  >
                    <h3 className="font-semibold text-white transition-colors group-hover:text-sky-400">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

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
