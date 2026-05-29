import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative h-[80vh] flex items-center justify-center text-center">

     
      <div className="absolute inset-0">
        <img
          src="/world.jpg"
          className="w-full h-full object-cover"
          alt="World Map"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

    
      <div className="relative z-10 text-white">

        <h1 className="text-5xl font-bold mb-6">
          World Explorer
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
          Explore countries around the world and learn about flags, capitals,
          populations, and more.
        </p>

      
        <Link
          href="/countries"
          className="bg-[#A16207] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Explore Countries
        </Link>

      </div>
    </main>
  );
}