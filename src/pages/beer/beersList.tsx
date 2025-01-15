import React from "react";
import { useBeers } from "./hooks/useBeer";
import BeerCard from "../../components/beer/beerListCard";

const Beers: React.FC = () => {
  const {
    filteredBeers,
    beers,
    search,
    error,
    isLoading,
    handleSearch,
    handleAbvRangeChange,
  } = useBeers();

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Catalogue des Bières
      </h1>

      {/* Filtres */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Recherche par nom avec suggestions */}
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Rechercher une bière"
            list="beerSuggestions"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <datalist id="beerSuggestions">
            {beers.map((beer) => (
              <option key={beer.id_beer} value={beer.name} />
            ))}
          </datalist>
        </div>

        {/* Filtre par pourcentage */}
        <select
          onChange={handleAbvRangeChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Toutes les plages (%)</option>
          <option value="0-5">0% - 5%</option>
          <option value="5-10">5% - 10%</option>
          <option value="10-15">10% - 15%</option>
          <option value="15+">15% et plus</option>
        </select>
      </div>

      {/* Affichage des bières */}
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
