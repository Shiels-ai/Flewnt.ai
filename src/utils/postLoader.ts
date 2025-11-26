import matter from 'gray-matter';
import { Buffer } from 'buffer';

if (typeof globalThis.Buffer === 'undefined') {
  globalThis.Buffer = Buffer;
}

export interface PostFrontmatter {
  title: string;
  date: string;
  thumbnail?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

const markdownModules = import.meta.glob('../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const posts: Post[] = Object.entries(markdownModules)
  .map(([path, rawContent]) => {
    const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? '';
    const { data, content } = matter(rawContent);
    const frontmatter: PostFrontmatter = {
      title: typeof data.title === 'string' ? data.title : slug,
      date:
        typeof data.date === 'string'
          ? data.date
          : new Date().toISOString(),
      thumbnail: typeof data.thumbnail === 'string' ? data.thumbnail : undefined,
    };

    return {
      slug,
      frontmatter,
      content,
    };
  })
  .sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

export const getPosts = () => posts;

export const getPostBySlug = (slug: string) =>
  posts.find(post => post.slug === slug);
