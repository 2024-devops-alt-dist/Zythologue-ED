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
    <div className="p-4 min-h-screen  text-white transition-all duration-300">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-md animate-fade-in">
        Catalogue des Bières
      </h1>

      {/* Filtre */}
      <div className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-6 animate-slide-in">
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Rechercher une bière"
            list="beerSuggestions"
            className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
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
          className="w-full sm:w-auto px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
        >
          <option value="">Toutes les plages (%)</option>
          <option value="0-5">0% - 5%</option>
          <option value="5-10">5% - 10%</option>
          <option value="10-15">10% - 15%</option>
          <option value="15+">15% et plus</option>
        </select>
      </div>

      {/* Affichage des bières */}
      {error && (
        <p className="text-red-500 text-center text-xl animate-fade-in">
          {error}
        </p>
      )}
      {isLoading && (
        <p className="text-gray-200 text-center text-xl animate-pulse">
          Chargement des bières...
        </p>
      )}

      {!isLoading && !error && filteredBeers.length === 0 && (
        <div className="flex flex-col items-center justify-center h-96 text-center animate-fade-in">
          <img
            src={noResultImage}
            alt="Aucune bière trouvée"
            className="w-60 h-60 mt-10 opacity-80 transition-opacity hover:opacity-100"
          />
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-80 mt-4">
            <h2 className="text-white text-2xl font-bold">
              Aucun résultat trouvé
            </h2>
            <p className="text-gray-300 mt-4">
              Essayez d'ajuster vos filtres ou recherchez un autre nom.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      )}

      {!isLoading && filteredBeers.length > 0 && (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredBeers.map((beer) => (
            <BeerCard key={beer.id_beer} beer={beer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Beers;
