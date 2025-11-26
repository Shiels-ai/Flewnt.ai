import React from "react";
import { marked } from "marked";

type RawMarkdownModules = Record<string, string>;

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  html: string;
}

const markdownModules: RawMarkdownModules = import.meta.glob(
  "../../content/*.md",
  {
    eager: true,
    query: "?raw",
    import: "default",
  }
) as RawMarkdownModules;

const parseFrontMatter = (markdown: string) => {
  const frontMatterMatch = markdown.match(/^---\s*[\r\n]+([\s\S]*?)\r?\n---\s*/);
  if (!frontMatterMatch) {
    return { data: {}, body: markdown.trim() };
  }

  const frontMatter = frontMatterMatch[1]
    .split(/\r?\n/)
    .filter(Boolean)
    .reduce<Record<string, string>>((acc, line) => {
      const [key, ...valueParts] = line.split(":");
      if (!key) return acc;
      acc[key.trim().toLowerCase()] = valueParts.join(":").trim();
      return acc;
    }, {});

  const body = markdown.slice(frontMatterMatch[0].length).trim();
  return { data: frontMatter, body };
};

const formatDate = (
  dateString: string,
  options: Intl.DateTimeFormatOptions
) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "Undated";
  return date.toLocaleDateString("en-GB", options);
};

const buildPosts = (): BlogPost[] => {
  return Object.entries(markdownModules)
    .map(([path, fileContent]) => {
      const slug = path.split("/").pop()?.replace(/\.md$/, "") ?? "post";
      const { data, body } = parseFrontMatter(fileContent);
      const html = marked.parse(body);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt:
          data.excerpt ??
          body
            .replace(/[#*_>`-]/g, "")
            .split("\n")
            .find((line) => line.trim().length > 0)
            ?.trim()
            ?.slice(0, 120) ??
          "",
        tags: data.tags
          ? data.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
          : [],
        content: body,
        html,
      };
    })
    .sort((a, b) => {
      const aTime = Date.parse(a.date);
      const bTime = Date.parse(b.date);
      if (Number.isNaN(aTime) || Number.isNaN(bTime)) return 0;
      return bTime - aTime;
    });
};

const posts = buildPosts();

const Blog: React.FC = () => {
  const [activeSlug, setActiveSlug] = React.useState(posts.at(0)?.slug ?? "");
  const activePost =
    posts.find((post) => post.slug === activeSlug) ?? posts.at(0);

  if (!posts.length) {
    return (
      <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">
          Blog posts will appear here soon.
        </p>
      </div>
    );
  }

  return (
    <main className="bg-slate-900 text-white min-h-screen">
      <section className="container mx-auto px-4 pt-16 pb-10 max-w-6xl">
        <p className="uppercase tracking-[0.4em] text-xs text-rose-400 mb-3 font-semibold">
          Field Notes
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
          The Blog
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl">
          Quick dispatches on how we build multilingual AI products, the rituals
          that keep delivery accountable, and what we are experimenting with
          next.
        </p>
      </section>
      <section className="container mx-auto px-4 pb-20 max-w-6xl grid gap-10 lg:grid-cols-[360px_1fr]">
        <aside className="space-y-4">
          {posts.map((post) => (
            <button
              key={post.slug}
              type="button"
              onClick={() => setActiveSlug(post.slug)}
              className={`w-full text-left rounded-3xl border p-5 transition hover:border-rose-400 hover:bg-white/5 ${
                post.slug === activeSlug
                  ? "border-rose-500 bg-white/5"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
                {formatDate(post.date, {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h2 className="text-xl font-semibold text-white mt-2">
                {post.title}
              </h2>
              <p className="text-sm text-slate-300 mt-2">{post.excerpt}</p>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 text-xs tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </button>
          ))}
        </aside>
        {activePost && (
          <article className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
            <div className="flex flex-col gap-3 mb-8">
              <p className="text-xs uppercase tracking-[0.4em] text-rose-400">
                {formatDate(activePost.date, {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h2 className="text-3xl font-semibold text-white">
                {activePost.title}
              </h2>
              <p className="text-base text-slate-300">{activePost.excerpt}</p>
            </div>
            <div
              className="prose prose-invert prose-p:text-slate-200 prose-li:text-slate-200 max-w-none"
              dangerouslySetInnerHTML={{ __html: activePost.html }}
            />
          </article>
        )}
      </section>
    </main>
  );
};

export default Blog;
