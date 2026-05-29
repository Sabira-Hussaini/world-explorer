import Link from "next/link";

export default async function CountryDetailsPage({ params }) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${code}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  const country = Array.isArray(data)
    ? data[0]
    : data;

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No languages";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "No currencies";

  return (
    <main className="bg-[#FFFFFF] p-8 rounded-xl shadow-md text-[#3F3F46]">

      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="max-w-md w-full mx-auto mb-8 rounded"
      />

      <h1 className="text-4xl font-bold mb-6 text-center text-[#3F3F46]">
        {country.name?.common}
      </h1>

      <div className="space-y-3 text-lg">

        <p>
          <strong>Official Name:</strong>{" "}
          {country.name?.official}
        </p>

        <p>
          <strong>Capital:</strong>{" "}
          {country.capital?.[0] || "No capital"}
        </p>

        <p>
          <strong>Region:</strong> {country.region}
        </p>

        <p>
          <strong>Subregion:</strong>{" "}
          {country.subregion || "No subregion"}
        </p>

        <p>
          <strong>Population:</strong>{" "}
          {country.population?.toLocaleString()}
        </p>

        <p>
          <strong>Languages:</strong> {languages}
        </p>

        <p>
          <strong>Currencies:</strong> {currencies}
        </p>

        <p>
          <strong>Time Zones:</strong>{" "}
          {country.timezones?.join(", ")}
        </p>
      </div>

      <div className="mt-8 flex gap-4">

        <a
          href={country.maps?.googleMaps}
          target="_blank"
          className="bg-[#A16207] text-white px-5 py-3 rounded-lg hover:opacity-90 transition"
        >
          View on Google Maps
        </a>

        <Link
          href="/countries"
          className="bg-[#A16207] text-white px-5 py-3 rounded-lg hover:opacity-90 transition"
        >
          Back to Countries
        </Link>

      </div>
    </main>
  );
}