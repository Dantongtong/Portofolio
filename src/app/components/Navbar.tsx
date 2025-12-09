import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between">
        <Link href="/" className="font-semibold text-lg">
          Dantong Zhu
        </Link>

        <div className="flex gap-6 text-slate-600">
          <Link href="/projects" className="hover:text-indigo-600">
            Projects
          </Link>
          <Link href="/about" className="hover:text-indigo-600">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
