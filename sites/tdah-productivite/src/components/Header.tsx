import Link from "next/link";
import { SITE_NAME } from "@/lib/seo";

export function Header() {
  return (
    <header className="border-b border-brand-100">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5">
        <Link href="/" className="text-lg font-bold text-brand-900">
          {SITE_NAME}
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-brand-700">
          <Link href="/blog">Blog</Link>
          <Link href="/blog?cluster=tools-and-planners">Planners</Link>
        </nav>
      </div>
    </header>
  );
}
