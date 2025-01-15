import React from "react";
import { useNavigate } from "react-router-dom";
import { Beer } from "../../response/beerResponse";
import { useBrewery } from "../../pages/beer/hooks/useBrewery";
import { useBeerIngredients } from "../../pages/beer/hooks/useBeerIngredients";

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

  const handleNavigateToBrewery = () => {
    if (brewery) {
      navigate(`/breweries/${brewery.id_brewery}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E1] flex flex-col items-center py-10 px-4">
      <div className="bg-[#FFC107] text-[#4E342E] w-full py-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold">{beer.name}</h1>
        <p className="text-lg mt-2 font-medium">
          Une bière exceptionnelle à savourer
        </p>
      </div>

      <div className="bg-[#FFE0B2] mt-8 p-6 rounded-lg shadow-lg max-w-4xl w-full text-[#4E342E]">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          <p className="text-[#6D4C41] text-lg">{beer.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Taux d'alcool</h2>
          <p className="text-[#6D4C41] text-lg">
            <span className="font-medium">{beer.abv}%</span>
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Brasserie</h2>
          {breweryLoading ? (
            <p className="text-[#6D4C41] text-lg">
              Chargement des informations...
            </p>
          ) : breweryError ? (
            <p className="text-red-600 text-lg">{breweryError}</p>
          ) : brewery ? (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-lg text-[#6D4C41] font-medium">
                {brewery.name}
              </span>
              <button
                onClick={handleNavigateToBrewery}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Voir la brasserie
              </button>
            </div>
          ) : (
            <p className="text-[#6D4C41] text-lg">Aucune brasserie associée.</p>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Ingrédients</h2>
          {ingredientsLoading ? (
            <p className="text-[#6D4C41] text-lg">
              Chargement des ingrédients...
            </p>
          ) : ingredientsError ? (
            <p className="text-red-600 text-lg">{ingredientsError}</p>
          ) : ingredients.length === 0 ? (
            <p className="text-[#6D4C41] text-lg">
              Aucun ingrédient trouvé pour cette bière.
            </p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ingredients.map((ingredient) => (
                <li
                  key={ingredient.id_beer_ingredient}
                  className="bg-white p-4 rounded-lg shadow border border-gray-200"
                >
                  <p className="text-lg font-semibold text-[#6D4C41]">
                    {ingredient.name}
                  </p>
                  <p className="text-sm italic text-[#8D6E63]">
                    Type : {ingredient.type}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={() => navigate("/beers")}
          className="px-6 py-3 bg-[#FFC107] text-[#4E342E] text-lg font-semibold rounded-lg shadow hover:bg-[#FFB300] transition duration-300 transform hover:scale-105"
        >
          Retour au catalogue
        </button>
      </div>
    </div>
  );
};

export default BeerDetail;
