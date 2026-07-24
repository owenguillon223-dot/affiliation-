import { SITE_NAME } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-brand-100 py-10 text-sm text-brand-700">
      <div className="mx-auto max-w-4xl px-4">
        <p>© {new Date().getFullYear()} {SITE_NAME}. Planning advice, not vendor contracts — always confirm details directly with anyone you book.</p>
      </div>
    </footer>
  );
}
