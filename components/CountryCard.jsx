import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function CountryCard({ country }) {
  return (
    <div className="relative bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">

      <FavoriteButton code={country.cca3} />

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold mb-2 text-[#3F3F46]">
          {country.name.common}
        </h2>

        <p className="text-[#3F3F46]/70">
          <strong className="text-[#3F3F46]">Capital:</strong>{" "}
          {country.capital?.[0] || "No capital"}
        </p>

        <p className="text-[#3F3F46]/70">
          <strong className="text-[#3F3F46]">Region:</strong>{" "}
          {country.region}
        </p>

        <p className="text-[#3F3F46]/70">
          <strong className="text-[#3F3F46]">Population:</strong>{" "}
          {country.population.toLocaleString()}
        </p>

        <Link
          href={`/countries/${country.cca3}`}
          className="inline-block mt-4 bg-[#A16207] hover:opacity-90 text-white px-4 py-2 rounded-lg transition"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}