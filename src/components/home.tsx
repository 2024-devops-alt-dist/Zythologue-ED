import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleViewBeers = () => {
    navigate("/beers");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-600 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Bienvenue sur le Catalogue des Bières
          </h1>
          <p className="text-lg text-center mt-4">
            Découvrez notre sélection de bières artisanales du monde entier.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Explorez notre collection unique
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Cliquez sur le bouton ci-dessous pour consulter notre catalogue de
          bières.
        </p>
        <button
          onClick={handleViewBeers}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
        >
          Voir le Catalogue des Bières
        </button>
      </main>
    </div>
  );
};

export default Home;
