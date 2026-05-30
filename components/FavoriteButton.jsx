"use client";

import { useEffect, useState } from "react";

export default function FavoriteButton({ code }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);
  }, []);

  const toggleFavorite = () => {
    let updated;

    if (favorites.includes(code)) {
      updated = favorites.filter((item) => item !== code);
    } else {
      updated = [...favorites, code];
    }

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };

  return (
    <button
      onClick={toggleFavorite}
      className="absolute top-3 right-3 text-2xl z-10"
    >
      {favorites.includes(code) ? "❤️" : "🤍"}
    </button>
  );
}