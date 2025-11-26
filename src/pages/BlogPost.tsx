import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { getPostBySlug, type Post } from '../utils/postLoader';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post: Post | undefined = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <div>Post not found.</div>;
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
