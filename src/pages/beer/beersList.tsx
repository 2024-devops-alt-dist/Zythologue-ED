import React from "react";
import { useBeers } from "./hooks/useBeer";
import BeerCard from "../../components/beer/beerListCard";
import noResultImage from "../../assets/no-result.jpg";

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
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
        Catalogue des Bières
      </h1>

      {/* Filtres */}
      <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* Recherche par nom avec suggestions */}
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Rechercher une bière"
            list="beerSuggestions"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <img
            src={noResultImage}
            alt="Aucune bière trouvée"
            className="w-60 h-60 mt-10"
          />
          <div className="bg-white p-6 rounded-xl shadow-lg w-80">
            <h2 className="text-gray-700 text-2xl font-bold">
              Aucun résultat trouvé
            </h2>
            <p className="text-gray-500 mt-4">
              Essayez d'ajuster vos filtres ou recherchez un autre nom.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Réinitialiser les filtres
            </button>
          </div>
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
