import { cacheLife, cacheTag } from "next/cache";
import type { Blog } from "@/lib/blog-utils";

export * from "@/lib/blog-utils";

export const BLOGS_API_URL =
  process.env.BLOGS_API_URL ?? "http://66.116.242.51:3031/barcraft/api/blogs";

type ListResponse = {
  success: boolean;
  blogs?: Blog[];
  pagination?: { page: number; limit: number; total: number; totalPages: number };
};

type DetailResponse = { success: boolean; blog?: Partial<Blog> };

const PAGE_LIMIT = 50;
const MAX_PAGES = 20;

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch (err) {
    console.error(`[blogs] request failed: ${url}`, err);
    return null;
  }
}

async function fetchAllBlogs(): Promise<Blog[]> {
  const all: Blog[] = [];
  for (let page = 1; page <= MAX_PAGES; page++) {
    const data = await getJson<ListResponse>(
      `${BLOGS_API_URL}/?page=${page}&limit=${PAGE_LIMIT}`,
    );
    if (!data?.success || !data.blogs) break;
    all.push(...data.blogs);
    if (!data.pagination || page >= data.pagination.totalPages) break;
  }

  return all
    .filter((b) => b.status !== false && b.slug)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}

/** All published blogs, newest first. Returns [] if the API is unreachable. */
export async function getBlogs(): Promise<Blog[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("blogs");

  return fetchAllBlogs();
}

/** Blogs without article HTML/SEO, for cards and lists. */
export async function getBlogSummaries(): Promise<Blog[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("blogs");

  return (await fetchAllBlogs()).map((b) => ({ ...b, content: "", seo: undefined }));
}

function safeDecode(s: string) {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

/** One blog by slug. Accepts the raw or URL-encoded slug (slugs may contain "?"). */
export async function getBlog(slug: string): Promise<Blog | null> {
  "use cache";
  cacheLife("minutes");
  cacheTag("blogs", `blog:${slug}`);

  const decoded = safeDecode(slug);

  // The single-blog endpoint currently returns only a few fields, so use it only
  // when it comes back complete; otherwise find the blog in the list.
  const detail = await getJson<DetailResponse>(
    `${BLOGS_API_URL}/${encodeURIComponent(decoded)}`,
  );
  const b = detail?.blog;
  if (detail?.success && b?.title && b.content && b.slug) return b as Blog;

  const blogs = await getBlogs();
  return blogs.find((x) => x.slug === decoded || x.slug === slug) ?? null;
}
