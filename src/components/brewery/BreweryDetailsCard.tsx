import React from "react";
import { useNavigate } from "react-router-dom";
import { Brewery } from "../../response/breweryResponse";
import { useBeersByBrewery } from "../../pages/breweries/hooks/useBeersByBrewery";
import breweryImage from "../../assets/brewery.jpg";

interface BreweryDetailProps {
  brewery: Brewery;
}

const BreweryDetail: React.FC<BreweryDetailProps> = ({ brewery }) => {
  const navigate = useNavigate();
  const { beers, loading, error } = useBeersByBrewery(brewery.id_brewery);

  const handleNavigateToBeer = (beerId: number) => {
    navigate(`/beers/${beerId}`);
  };

  return (
    <div className=" min-h-screen py-10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Section Image */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group hover:scale-105">
              <img
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-90"
                src={breweryImage}
                alt={brewery.name}
              />
            </div>
            <div className="flex -mx-2 mt-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={() => navigate("/breweries")}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-full font-bold hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:scale-105"
                >
                  Retour aux brasseries
                </button>
              </div>
            </div>
          </div>

          {/* Section Informations */}
          <div className="md:flex-1 px-4 text-white">
            <h2 className="text-4xl font-bold mb-4">{brewery.name}</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Découvrez l'histoire et les bières de cette brasserie.
            </p>

            <div className="mb-6">
              <span className="block font-bold">Pays :</span>
              <span className="text-xl font-medium">{brewery.country}</span>
            </div>

            <div className="mb-6">
              <span className="block font-bold">Date de création :</span>
              <span className="text-xl font-medium">
                {new Date(brewery.created_at).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Bières associées :</h3>
              {loading ? (
                <p>Chargement des bières...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : beers.length === 0 ? (
                <p>Aucune bière associée trouvée.</p>
              ) : (
                <ul className="mt-2 space-y-2">
                  {beers.map((beer) => (
                    <li
                      key={beer.id_beer}
                      className="bg-gray-800 py-2 px-4 rounded-lg shadow-md transform transition-all hover:scale-105"
                    >
                      <span className="font-semibold">{beer.name}</span>
                      <button
                        onClick={() => handleNavigateToBeer(beer.id_beer)}
                        className="ml-4 px-3 py-1 bg-gradient-to-r from-teal-500 to-green-600 text-white text-sm font-semibold rounded-lg shadow hover:from-teal-600 hover:to-green-700 transition duration-300 transform hover:scale-105"
                      >
                        Voir la bière
                      </button>
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

export default BreweryDetail;
