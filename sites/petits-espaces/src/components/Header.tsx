import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";

export function Header() {
  return (
    <header className="border-b border-brand-100">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5">
        <Link href="/">
          <Wordmark />
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-brand-700">
          <Link href="/blog">Blog</Link>
          <Link href="/blog?cluster=renter-friendly-storage">
            Renter Storage
          </Link>
        </nav>
      </div>
    </header>
  );
}
