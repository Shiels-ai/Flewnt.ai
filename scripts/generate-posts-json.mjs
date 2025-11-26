import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'src/content/posts');
const outputDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));

const posts = files.map(file => {
  const filePath = path.join(postsDir, file);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const slug = file.replace(/\.md$/, '');

  return {
    slug,
    frontmatter: data,
    content,
  };
});

fs.writeFileSync(
  path.join(outputDir, 'posts.json'),
  JSON.stringify(posts, null, 2)
);

console.log('Successfully generated posts.json');
