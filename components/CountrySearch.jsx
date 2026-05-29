"use client";

import { useState } from "react";
import Link from "next/link";

export default function CountrySearch({ countries }) {
  const [search, setSearch] = useState("");


  const safeCountries = Array.isArray(countries) ? countries : [];

  const filteredCountries = safeCountries.filter((country) =>
    country?.name?.common
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border border-slate-200 rounded-lg bg-white mb-6 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country) => (
          <div
            key={country.cca3}
            className="bg-[#FFFFFF] rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={country.flags?.png}
              alt={country.name?.common}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-[#3F3F46]">
                {country.name?.common}
              </h2>

              <Link
                href={`/countries/${country.cca3}`}
                className="text-[#A16207] hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}