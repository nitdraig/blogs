import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Locale } from "./locale";

function getPostsDirectory(locale: Locale): string {
  return path.join(process.cwd(), "blogposts", locale);
}

export function getSortedPostsData(locale: Locale) {
  const postsDirectory = getPostsDirectory(locale);
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const blogPost: BlogPost = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        image: matterResult.data.image,
        category: matterResult.data.category,
      };
      return blogPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string, locale: Locale) {
  const fullPath = path.join(getPostsDirectory(locale), `${id}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    image: matterResult.data.image,
    category: matterResult.data.category,
    contentHtml,
  };
  return blogPostWithHTML;
}

/** Plain text excerpt and read time for API / embeds */
function stripMarkdown(text: string): string {
  return text
    .replace(/#{1,6}\s/g, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\n+/g, " ")
    .trim();
}

const WORDS_PER_MINUTE = 200;

export function getPostExcerptAndReadTime(id: string, locale: Locale): {
  excerpt: string;
  readTime: string;
} {
  const fullPath = path.join(getPostsDirectory(locale), `${id}.md`);
  if (!fs.existsSync(fullPath)) return { excerpt: "", readTime: "—" };

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(fileContents);
  const plain = stripMarkdown(content);
  const excerpt = plain.slice(0, 160).trim();
  const words = plain.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return {
    excerpt: excerpt + (plain.length > 160 ? "…" : ""),
    readTime: `${minutes} min read`,
  };
}
