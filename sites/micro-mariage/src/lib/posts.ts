import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

/** Front-matter shape every article in src/content/posts must declare. */
export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  cluster: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

function readPostFile(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return matter(raw);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const { data, content } = readPostFile(slug);
  return {
    slug,
    title: data.title,
    description: data.description,
    cluster: data.cluster,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const { data, content } = readPostFile(slug);
      return {
        slug,
        title: data.title,
        description: data.description,
        cluster: data.cluster,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
