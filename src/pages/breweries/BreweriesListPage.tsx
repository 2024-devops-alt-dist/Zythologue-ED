import React from "react";
import { useBreweries } from "./hooks/useBreweries";
import BreweryCard from "../../components/brewery/BreweryListCard";

const BreweriesPage: React.FC = () => {
  const {
    breweries,
    loading,
    error,
    searchName,
    searchCountry,
    handleNameChange,
    handleCountryChange,
    filteredBreweries,
  } = useBreweries();

  if (loading) {
    return (
      <div className="text-center text-lg text-white">
        Chargement des brasseries...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Erreur : {error}</div>;
  }

  return (
    <div className="container mx-auto p-6 min-h-screen flex flex-col items-center  text-white">
      <h1 className="text-4xl font-bold text-center mb-8 drop-shadow-lg">
        Toutes nos Brasseries
      </h1>

      <div className="w-full flex flex-wrap justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Rechercher par nom"
          value={searchName}
          onChange={handleNameChange}
          className="px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full max-w-xs transition-transform transform hover:scale-105"
        />
        <select
          value={searchCountry}
          onChange={handleCountryChange}
          className="px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full max-w-xs transition-transform transform hover:scale-105"
        >
          <option value="">Tous les pays</option>
          {Array.from(new Set(breweries.map((brewery) => brewery.country)))
            .sort()
            .map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
        </select>
      </div>

      {filteredBreweries.length === 0 ? (
        <div className="text-center text-gray-400">
          Aucune brasserie trouvée.
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
          {filteredBreweries.map((brewery) => (
            <BreweryCard key={brewery.id_brewery} brewery={brewery} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BreweriesPage;
