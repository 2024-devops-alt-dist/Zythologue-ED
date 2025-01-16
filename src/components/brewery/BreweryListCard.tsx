import React from "react";
import { Link } from "react-router-dom";
import { Brewery } from "../../response/breweryResponse";
import breweryImage from "../../assets/brasserie.jpg";

interface BreweryCardProps {
  brewery: Brewery;
}

const BreweryCard: React.FC<BreweryCardProps> = ({ brewery }) => {
  const formattedDate = new Date(brewery.created_at).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative flex flex-col max-w-xs overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-green-100 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 transform duration-300">
      {/* Image Section */}
      <div className="relative overflow-hidden group">
        <img
          src={breweryImage}
          alt={brewery.name}
          className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <p className="absolute bottom-4 left-4 text-white text-sm font-medium bg-green-600 bg-opacity-75 px-2 py-1 rounded-md group-hover:bg-green-700 transition-all duration-300">
          {brewery.country}
        </p>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1">
        <h4 className="block font-sans text-xl font-semibold leading-snug text-gray-900">
          {brewery.name}
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-gray-700 min-h-[60px]">
          {brewery.name || "Aucune description disponible."}
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between px-6 py-4 bg-white rounded-b-2xl">
        <div>
          <p className="text-sm text-gray-500">
            Pays : <span className="font-medium text-gray-900">{brewery.country}</span>
          </p>
          <p className="text-sm text-gray-500">
            Créée le : <span className="font-medium text-gray-900">{formattedDate}</span>
          </p>
        </div>
        <Link
          to={`/breweries/${brewery.id_brewery}`}
          className="text-sm text-white bg-gradient-to-r from-green-600 to-teal-600 px-6 py-2 rounded-lg hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition duration-300 whitespace-nowrap"
        >
          Voir les détails
        </Link>
      </div>
    </div>
  );
};

export default BreweryCard;