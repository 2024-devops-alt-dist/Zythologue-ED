import React from "react";
import { useNavigate } from "react-router-dom";
import { Beer } from "../../response/beerResponse";
import { useBrewery } from "../../pages/beer/hooks/useBrewery";
import { useBeerIngredients } from "../../pages/beer/hooks/useBeerIngredients";
import { useCategories } from "../../pages/beer/hooks/useCategories";
import beersImage from "../../assets/beerDetail.jpg";

interface BeerDetailProps {
  beer: Beer;
}

const BeerDetail: React.FC<BeerDetailProps> = ({ beer }) => {
  const navigate = useNavigate();
  const {
    brewery,
    loading: breweryLoading,
    error: breweryError,
  } = useBrewery(beer.brewery_id);
  const {
    ingredients,
    loading: ingredientsLoading,
    error: ingredientsError,
  } = useBeerIngredients(beer.id_beer);
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  const categoryName = categories.find(
    (category) => category.id_category === beer.category_id
  )?.name;

  const handleNavigateToBrewery = () => {
    if (brewery) {
      navigate(`/breweries/${brewery.id_brewery}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen py-10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Section Image */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group hover:scale-105">
              <img
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-90"
                src={beersImage}
                alt={beer.name}
              />
            </div>
            <div className="flex -mx-2 mt-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={() => navigate("/beers")}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-full font-bold hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:scale-105"
                >
                  Retour au catalogue
                </button>
              </div>
              <div className="w-1/2 px-2">
                {brewery && (
                  <button
                    onClick={handleNavigateToBrewery}
                    className="w-full bg-gradient-to-r from-gray-400 to-gray-600 text-white py-2 px-4 rounded-full font-bold hover:from-gray-500 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Voir la brasserie
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Section Informations */}
          <div className="md:flex-1 px-4 text-white">
            <h2 className="text-4xl font-bold mb-4">{beer.name}</h2>
            <p className="text-lg mb-6 leading-relaxed">
              {beer.description || "Aucune description disponible."}
            </p>

            <div className="mb-6">
              <span className="block font-bold">Taux d'alcool :</span>
              <span className="text-xl font-medium">{beer.abv}%</span>
            </div>

            <div className="mb-6">
              <span className="block font-bold">Catégorie :</span>
              {categoriesLoading ? (
                <span> Chargement...</span>
              ) : categoriesError ? (
                <span className="text-red-500"> {categoriesError}</span>
              ) : (
                <span className="text-xl font-medium">
                  {categoryName || "Non spécifiée"}
                </span>
              )}
            </div>

            <div className="mb-6">
              <span className="block font-bold">Brasserie :</span>
              {breweryLoading ? (
                <span> Chargement...</span>
              ) : breweryError ? (
                <span className="text-red-500"> {breweryError}</span>
              ) : (
                <span className="text-xl font-medium">
                  {brewery?.name || "Non associée"}
                </span>
              )}
            </div>

            <div>
              <span className="block font-bold">Ingrédients :</span>
              {ingredientsLoading ? (
                <p>Chargement...</p>
              ) : ingredientsError ? (
                <p className="text-red-500">{ingredientsError}</p>
              ) : ingredients.length === 0 ? (
                <p>Aucun ingrédient trouvé.</p>
              ) : (
                <ul className="mt-2 space-y-2">
                  {ingredients.map((ingredient) => (
                    <li
                      key={ingredient.id_beer_ingredient}
                      className="bg-gray-800 py-2 px-4 rounded-lg shadow-md transform transition-all hover:scale-105"
                    >
                      <span className="font-semibold">{ingredient.name}</span> -{" "}
                      <span className="italic">Type : {ingredient.type}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDetail;
