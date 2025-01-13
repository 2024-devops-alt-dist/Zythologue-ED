import React from "react";
import { Beer } from "../response/beer";
import { useNavigate } from "react-router-dom";

interface BeerDetailProps {
  beer: Beer;
}

const BeerDetail: React.FC<BeerDetailProps> = ({ beer }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF8E1] flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="bg-[#FFC107] text-[#4E342E] w-full py-8 rounded-lg shadow-md text-center animate-fadeIn">
        <h1 className="text-4xl font-bold">{beer.name}</h1>
        <p className="text-lg mt-2 font-medium">
          Une bière exceptionnelle à savourer
        </p>
      </div>

      {/* Détails */}
      <div className="bg-[#FFE0B2] mt-8 p-6 rounded-lg shadow-lg max-w-4xl w-full text-[#4E342E] animate-slideUp">
        {/* Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          <p className="text-[#6D4C41] text-lg leading-relaxed">
            {beer.description}
          </p>
        </div>

        {/* Taux d'alcool */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Taux d'alcool</h2>
          <p className="text-[#6D4C41] text-lg">
            <span className="font-medium">{beer.abv}%</span>
          </p>
        </div>

        {/* Informations supplémentaires */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Brasserie</h3>
            <p className="text-[#6D4C41] text-lg">
              {beer.brewery_id ? `Brasserie ID: ${beer.brewery_id}` : "N/A"}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Catégorie</h3>
            <p className="text-[#6D4C41] text-lg">
              {beer.category_id ? `Catégorie ID: ${beer.category_id}` : "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Bouton Retour au catalogue */}
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
