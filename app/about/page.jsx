export default function AboutPage() {
  return (
    <main className="bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-4xl font-bold mb-6">
        About World Explorer
      </h1>

      <p className="mb-4 text-lg">
        World Explorer is a Next.js project that uses real API
        data to display countries around the world.
      </p>

      <p className="mb-4 text-lg">
        This project practices:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>App Router</li>
        <li>File-based routing</li>
        <li>Shared layouts</li>
        <li>Dynamic routes</li>
        <li>Server components</li>
        <li>Client components</li>
        <li>Data fetching</li>
        <li>Caching</li>
      </ul>

      <p className="mt-6 text-lg">
        API Used: REST Countries API
      </p>
    </main>
  );
}