/** Blog types and pure helpers, safe to import from client components. */

export type BlogSeo = {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export type Blog = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string;
  author?: string;
  status: boolean;
  categoryId?: { _id: string; name: string } | null;
  seo?: BlogSeo;
  createdAt: string;
  updatedAt: string;
};

/** Path to a blog's detail page. */
export function blogHref(slug: string) {
  return `/blog/${encodeURIComponent(slug)}`;
}

/** First paragraph of the description, for cards. */
export function blogExcerpt(blog: Pick<Blog, "description">) {
  return blog.description?.split(/\r?\n\s*\r?\n/)[0]?.trim() ?? "";
}

export function formatBlogDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
