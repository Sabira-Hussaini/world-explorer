"use client";

import { useState } from "react";
import Link from "next/link";

export default function CountrySearch({ countries }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const safeCountries = Array.isArray(countries)
    ? countries
    : [];

  const filteredCountries = safeCountries.filter(
    (country) => {
      const matchesSearch =
        country?.name?.common
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesRegion =
        region === "All" ||
        country.region === region;

      return matchesSearch && matchesRegion;
    }
  );

  const regions = [
    "All",
    "Asia",
    "Europe",
    "Africa",
    "Americas",
    "Oceania",
  ];

  return (
    <div className="space-y-6">

      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full p-3 border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A16207]"
      />

      <div className="flex flex-wrap gap-3">
        {regions.map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`px-4 py-2 rounded-lg border transition ${
              region === r
                ? "bg-[#A16207] text-white border-[#A16207]"
                : "bg-white text-slate-700 border-slate-200 hover:bg-[#A16207]/10"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {filteredCountries.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500">
            No countries found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredCountries.map((country) => (
            <div
              key={country.cca3}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
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

                <p className="text-sm text-slate-600 mb-3">
                  {country.region}
                </p>

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
      )}
    </div>
  );
}