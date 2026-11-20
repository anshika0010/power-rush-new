import Image from "next/image";
import Link from "next/link";
import { type Blog, blogExcerpt, blogHref } from "@/lib/blog-utils";

const wide = "font-wide uppercase";

export default function BlogCard({ blog, sizes }: { blog: Blog; sizes?: string }) {
  return (
    <Link
      href={blogHref(blog.slug)}
      className="group flex h-full flex-col border-2 border-transparent p-2 outline-none transition-colors hover:border-[#1a7dff] focus-visible:border-[#1a7dff]"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes={
              sizes ??
              "(min-width: 1152px) 370px, (min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      {blog.categoryId?.name && (
        <p className={`${wide} mt-5 text-xs font-bold tracking-wide text-rush-sky`}>
          {blog.categoryId.name}
        </p>
      )}
      <h3 className={`${wide} mt-2 text-lg font-semibold leading-tight sm:text-xl text-gray-800`}>
        {blog.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-gray-800">
        {blogExcerpt(blog)}
      </p>
      <span
        className={`${wide} mt-auto pt-5 text-[15px] font-medium text-rush-sky underline-offset-4 group-hover:underline`}
      >
        Read more…
      </span>
    </Link>
  );
}
