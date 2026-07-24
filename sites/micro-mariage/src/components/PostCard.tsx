import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { ClusterIcon } from "@/components/ClusterIcon";
import { CLUSTER_ICON_LAYOUT } from "@/lib/clusterIcons";

export function PostCard({ post }: { post: PostMeta }) {
  const layout = CLUSTER_ICON_LAYOUT[post.cluster];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex gap-4 rounded-lg border border-brand-100 p-5 transition hover:border-brand-300"
    >
      {layout && <ClusterIcon layout={layout} />}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
          {post.cluster}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold italic text-brand-900">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-brand-700">{post.description}</p>
        <p className="mt-3 text-xs text-brand-500">{post.readingTime}</p>
      </div>
    </Link>
  );
}
