import React from "react";
import BeerCard from "../../components/beerCard";
import { useBeers } from "./hooks/useBeer";

const Beers: React.FC = () => {
  const {
    filteredBeers,
    search,
    minAbv,
    maxAbv,
    error,
    isLoading,
    handleSearch,
    handleMinAbvChange,
    handleMaxAbvChange,
  } = useBeers();

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Catalogue des Bières
      </h1>

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Rechercher une bière"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="number"
          value={minAbv || ""}
          onChange={handleMinAbvChange}
          placeholder="Taux d'alcool minimum (%)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="number"
          value={maxAbv || ""}
          onChange={handleMaxAbvChange}
          placeholder="Taux d'alcool maximum (%)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {isLoading && <p className="text-gray-500">Chargement des bières...</p>}

      {!isLoading && !error && filteredBeers.length === 0 && (
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-500 text-lg">Aucune bière trouvée</p>
        </div>
      )}

      {!isLoading && filteredBeers.length > 0 && (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBeers.map((beer) => (
            <BeerCard key={beer.id_beer} beer={beer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Beers;
