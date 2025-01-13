import React, { useEffect, useState } from "react";
import { fetchBeers } from "../services/beerService";
import { Beer } from "../response/beer";
import BeerCard from "../components/beerCard";

const Beers: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBeers = async () => {
      try {
        const data = await fetchBeers();
        setBeers(data);
        setFilteredBeers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Erreur lors du chargement des bières : ${err.message}`);
        } else {
          setError("Une erreur inconnue s'est produite.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadBeers();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const results = beers.filter(
      (beer) =>
        beer.name.toLowerCase().includes(query) ||
        beer.description.toLowerCase().includes(query)
    );
    setFilteredBeers(results);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Catalogue des Bières
      </h1>

      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Rechercher une bière"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {isLoading && <p className="text-gray-500">Chargement des bières</p>}

      {!isLoading && !error && filteredBeers.length === 0 && (
        <p className="text-gray-500">Aucune bière trouver</p>
      )}

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id_beer} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default Beers;
