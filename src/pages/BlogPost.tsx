import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    thumbnail?: string;
  };
  content: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        const currentPost = data.find((p: Post) => p.slug === slug);
        setPost(currentPost);
      });
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose lg:prose-xl">
        <h1>{post.frontmatter.title}</h1>
        <p className="text-gray-500">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
        {post.frontmatter.thumbnail && (
          <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
        )}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
