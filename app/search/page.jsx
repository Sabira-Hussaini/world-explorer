import CountrySearch from "@/components/CountrySearch";

export default async function SearchPage() {
const res = await fetch(
  "https://restcountries.com/v3.1/all?fields=name,cca3,flags",
  { cache: "no-store" }
);

  const data = await res.json();



  const countries = Array.isArray(data) ? data : [];

  return (
    <main>
      <h1 className="text-4xl font-bold mb-8">
        Search Countries
      </h1>

      <CountrySearch countries={countries} />
    </main>
  );
}