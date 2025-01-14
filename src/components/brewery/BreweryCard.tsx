import React from "react";
import { Link } from "react-router-dom";
import { Brewery } from "../../response/brewery";

interface BreweryCardProps {
  brewery: Brewery;
}

const BreweryCard: React.FC<BreweryCardProps> = ({ brewery }) => {
  const formattedDate = new Date(brewery.created_at).toLocaleDateString(
    "fr-FR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="flex flex-col max-w-xs sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            {brewery.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-sm sm:text-base">
            Pays : {brewery.country}
          </p>
        </div>

        <div className="mt-4">
          <p className="mb-1 text-sm text-gray-500">
            Créée le : <span className="font-medium">{formattedDate}</span>
          </p>
        </div>

        <Link
          to={`/breweries/${brewery.id_brewery}`}
          className="mt-auto text-center text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Voir les détails
        </Link>
      </div>
    </div>
  );
};

export default BreweryCard;
