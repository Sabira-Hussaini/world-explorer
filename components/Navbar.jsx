import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-[#A16207] tracking-tight">
          World Explorer
        </h1>

        <div className="flex items-center gap-8 text-sm font-medium">

          <Link
            href="/"
            className="text-[#3F3F46] hover:text-[#A16207] transition"
          >
            Home
          </Link>

          <Link
            href="/countries"
            className="text-[#3F3F46] hover:text-[#A16207] transition"
          >
            Countries
          </Link>

          <Link
            href="/search"
            className="text-[#3F3F46] hover:text-[#A16207] transition"
          >
            Search
          </Link>

          <Link
            href="/about"
            className="text-[#3F3F46] hover:text-[#A16207] transition"
          >
            About
          </Link>

          <ThemeToggle />

        </div>
      </div>
    </nav>
  );
}