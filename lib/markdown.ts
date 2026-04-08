import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const pagesDirectory = path.join(process.cwd(), 'content/pages');

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

export function getSortedPostsData(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      excerpt: matterResult.data.excerpt,
      content: matterResult.content,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    category: matterResult.data.category,
    excerpt: matterResult.data.excerpt,
    content: matterResult.content,
  };
}

export function getPageContent(slug: string) {
  const fullPath = path.join(pagesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    title: matterResult.data.title,
    content: matterResult.content,
  };
}
