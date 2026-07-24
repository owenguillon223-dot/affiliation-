import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-lg border border-brand-100 p-5 transition hover:border-brand-300"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
        {post.cluster}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-brand-900">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-brand-700">{post.description}</p>
      <p className="mt-3 text-xs text-brand-500">{post.readingTime}</p>
    </Link>
  );
}
