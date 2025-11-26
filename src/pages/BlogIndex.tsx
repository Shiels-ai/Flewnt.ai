import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    thumbnail?: string;
  };
}

const BlogIndex = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
        .then(data => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {posts.map(post => (
          <div key={post.slug} className="border p-4 rounded-lg">
            <Link to={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold">{post.frontmatter.title}</h2>
              <p className="text-gray-500">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
              {post.frontmatter.thumbnail && (
                <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} className="my-4" />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
