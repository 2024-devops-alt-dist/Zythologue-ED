import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleViewBeers = () => {
    navigate("/beers");
  };

  const handleViewBreweries = () => {
    navigate("/breweries");
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-tr from-gray-800 via-blue-900 to-black">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 shadow-lg animate-fade-in-down">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center animate-bounce">
            Bienvenue sur le Catalogue des Bières
          </h1>
          <p className="text-xl text-center mt-4 animate-fade-in-up">
            Découvrez notre sélection de bières artisanales et de brasseries du
            monde entier.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-4xl font-semibold text-gray-300 mb-8 animate-slide-in">
          Explorez nos catégories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pop-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Catalogue des Bières
            </h3>
            <p className="text-gray-600 mb-6">
              Plongez dans notre collection de bières artisanales et découvrez
              des saveurs uniques.
            </p>
            <button
              onClick={handleViewBeers}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-110"
            >
              Voir le Catalogue des Bières
            </button>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pop-in delay-200">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">
              Liste des Brasseries
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez les brasseries locales et internationales qui produisent
              des bières exceptionnelles.
            </p>
            <button
              onClick={handleViewBreweries}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:from-yellow-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 transform hover:scale-110"
            >
              Voir les Brasseries
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
