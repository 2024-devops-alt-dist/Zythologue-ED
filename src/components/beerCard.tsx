import React from "react";
import { Beer } from "../response/beer";
import { Link } from "react-router-dom";

interface BeerCardProps {
  beer: Beer;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
  const formattedDate = new Date(beer.created_at).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col max-w-xs sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            {beer.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-sm sm:text-base">
            {beer.description}
          </p>
        </div>

        <div className="mt-4">
          <p className="mb-1 text-sm text-gray-500">
            Taux d'alcool : <span className="font-medium">{beer.abv}%</span>
          </p>
          <p className="mb-3 text-sm text-gray-500">
            Créée le : <span className="font-medium">{formattedDate}</span>
          </p>
        </div>

        <Link
          to={`/beers/${beer.id_beer}`}
          className="mt-auto text-center text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Voir les détails
        </Link>
      </div>
    </div>
  );
};

export default BeerCard;
