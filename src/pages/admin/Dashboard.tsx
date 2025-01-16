import React from "react";
import { useDashboard } from "./hooks/useDashboard";

const Dashboard: React.FC = () => {
  const {
    newBeer,
    message,
    breweries,
    categories,
    handleInputChange,
    handleCreateBeer,
  } = useDashboard();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Admin Dashboard</h1>
      <p className="text-lg text-gray-700">
        Bienvenue dans la section administrateur.
      </p>

      <div className="mt-8 w-full max-w-lg bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Créer une nouvelle bière
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={newBeer.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Nom de la bière"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={newBeer.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Description de la bière"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="abv">
            Taux d'Alcool (%)
          </label>
          <input
            type="number"
            name="abv"
            id="abv"
            value={newBeer.abv}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Taux d'alcool"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="brewery_id"
          >
            Brasserie
          </label>
          <select
            name="brewery_id"
            id="brewery_id"
            value={newBeer.brewery_id}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Sélectionnez une brasserie</option>
            {breweries.map((brewery) => (
              <option key={brewery.id_brewery} value={brewery.id_brewery}>
                {brewery.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="category_id"
          >
            Catégorie
          </label>
          <select
            name="category_id"
            id="category_id"
            value={newBeer.category_id}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Sélectionnez une catégorie</option>
            {categories.map((category) => (
              <option key={category.id_category} value={category.id_category}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleCreateBeer}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Créer la bière
        </button>

        {message && (
          <p className="mt-4 text-center text-green-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
