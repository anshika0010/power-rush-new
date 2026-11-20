import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import { blogExcerpt, blogHref, formatBlogDate, getBlog, getBlogSummaries } from "@/lib/blogs";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog((await params).slug);
  if (!blog) return { title: "Article not found — Power Rush" };

  const seo = blog.seo ?? {};
  const title = seo.metaTitle || `${blog.title} | The Rush Performance`;
  const description = seo.metaDescription || blogExcerpt(blog);
  const ogImage = seo.ogImage || blog.image;
  const base = pageMetadata({
    path: blogHref(blog.slug),
    title,
    description,
    image: ogImage || undefined,
    type: "article",
  });

  return {
    ...base,
    keywords: seo.keywords?.length ? seo.keywords : base.keywords,
    alternates: { canonical: seo.canonicalUrl || blogHref(blog.slug) },
    openGraph: {
      ...base.openGraph,
      type: "article",
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
    },
    twitter: {
      ...base.twitter,
      title: seo.twitterTitle || title,
      description: seo.twitterDescription || description,
      ...(seo.twitterImage ? { images: [seo.twitterImage] } : {}),
    },
  };
}

/** Styles for the CMS HTML (no typography plugin in this project). */
const articleBody = [
  "text-[17px] leading-[1.8] text-gray-800",
  "[&_h2]:mt-12 [&_h2]:font-wide [&_h2]:text-[clamp(1.35rem,2.6vw,1.75rem)] [&_h2]:font-bold [&_h2]:uppercase [&_h2]:leading-tight [&_h2]:text-gray-900",
  "[&_h3]:mt-8 [&_h3]:font-wide [&_h3]:text-xl [&_h3]:font-bold [&_h3]:uppercase [&_h3]:text-gray-900",
  "[&_p]:mt-5 [&_strong]:font-semibold [&_strong]:text-gray-900",
  "[&_a]:text-rush-blue [&_a]:underline [&_a]:underline-offset-4",
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2",
  "[&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-rush-sky [&_blockquote]:pl-5 [&_blockquote]:italic",
  "[&_img]:mt-6 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl",
  "[&_table]:mt-6 [&_table]:w-full [&_td]:border [&_td]:border-gray-200 [&_td]:p-2 [&_th]:border [&_th]:border-gray-200 [&_th]:p-2",
  "[&>*:first-child]:mt-0",
].join(" ");

async function Article({ params }: Props) {
  const blog = await getBlog((await params).slug);
  if (!blog) notFound();

  const date = formatBlogDate(blog.createdAt);
  const intro = blog.description
    ?.split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article>
      <header className="relative isolate overflow-hidden bg-black px-4 pt-32 pb-16 text-white sm:px-8 sm:pt-40 sm:pb-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_70%_at_10%_0%,rgba(16,110,220,0.55),transparent_70%)]"
        />
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/blog" className="hover:text-rush-sky">
              Blog
            </Link>
            {blog.categoryId?.name && (
              <>
                <span aria-hidden className="mx-2">
                  /
                </span>
                <span className="text-rush-sky">{blog.categoryId.name}</span>
              </>
            )}
          </nav>
          <h1 className="mt-5 font-wide text-[clamp(2rem,4.6vw,3.75rem)] font-bold uppercase leading-[1.02]">
            {blog.title}
          </h1>
          <p className="mt-6 text-sm text-white/70">
            {blog.author && <span>{blog.author.replace(/^by\s+/i, "By ")}</span>}
            {blog.author && date && <span aria-hidden> · </span>}
            {date && <time dateTime={blog.createdAt}>{date}</time>}
          </p>
        </div>
      </header>

      <div className="bg-white px-4 pb-20 sm:px-8 sm:pb-24">
        {blog.image && (
          <div className="relative mx-auto -mt-8 aspect-[16/9] max-w-7xl overflow-hidden rounded-2xl bg-neutral-900 shadow-xl sm:-mt-10">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-contain"
            />
          </div>
        )}

        <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
          {intro && intro.length > 0 && (
            <div className="border-l-4 border-rush-sky pl-5 text-lg leading-relaxed text-gray-700">
              {intro.map((p, i) => (
                <p key={i} className={i ? "mt-4" : ""}>
                  {p}
                </p>
              ))}
            </div>
          )}

          <div
            className={`${articleBody} mt-10`}
            dangerouslySetInnerHTML={{ __html: blog.content ?? "" }}
          />

          <Link
            href="/blog"
            className="mt-14 inline-block rounded-full border border-rush-sky px-7 py-3 text-[15px] font-medium text-rush-sky transition hover:bg-rush-sky hover:text-white"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}

async function MoreArticles({ params }: Props) {
  const blog = await getBlog((await params).slug);
  const others = (await getBlogSummaries()).filter((b) => b._id !== blog?._id).slice(0, 3);
  if (others.length === 0) return null;

  return (
    <section
      aria-labelledby="more-articles-heading"
      className="bg-gray-200 px-4 py-20 font-body sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="more-articles-heading"
          className="font-wide text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-[1.02] text-rush-sky"
        >
          More energy tips
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((b) => (
            <li key={b._id}>
              <BlogCard blog={b} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArticleSkeleton() {
  return (
    <div aria-hidden>
      <div className="bg-black px-4 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="h-4 w-32 rounded bg-white/15" />
          <div className="mt-6 h-12 w-3/4 rounded bg-white/15" />
          <div className="mt-6 h-4 w-48 rounded bg-white/15" />
        </div>
      </div>
      <div className="bg-white px-4 pb-20 sm:px-8">
        <div className="mx-auto -mt-8 aspect-[16/9] max-w-5xl animate-pulse rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}

export default function BlogDetailPage({ params }: Props) {
  return (
    <>
      <main className="relative flex-1 bg-white font-body text-gray-900">
        <Navbar />
        <Suspense fallback={<ArticleSkeleton />}>
          <Article params={params} />
        </Suspense>
        <Suspense fallback={null}>
          <MoreArticles params={params} />
        </Suspense>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
