import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">
        404
      </h1>

      <p className="mb-6">
        Page not found
      </p>

      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </main>
  );
}