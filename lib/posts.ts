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
