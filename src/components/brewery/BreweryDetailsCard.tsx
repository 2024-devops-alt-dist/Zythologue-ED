import React from "react";
import { useNavigate } from "react-router-dom";
import { Brewery } from "../../response/brewery";
import { useBeersByBrewery } from "../../pages/breweries/hooks/useBeersByBrewery";

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
    <div className="min-h-screen bg-[#E3F2FD] flex flex-col items-center py-10 px-4">
      <div
        className="bg-[#2196F3] text-white w-full py-8 rounded-lg shadow-md text-center animate-fadeIn"
        aria-label={`Informations sur la brasserie ${brewery.name}`}
      >
        <h1 className="text-4xl font-bold">{brewery.name}</h1>
        <p className="text-lg mt-2 font-medium">
          Découvrez l'histoire et les bières de cette brasserie
        </p>
      </div>

      <div className="bg-[#BBDEFB] mt-8 p-6 rounded-lg shadow-lg max-w-4xl w-full text-[#0D47A1]">
        <h2 className="text-3xl font-semibold mb-6">Détails de la brasserie</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Pays</h3>
          <p className="text-[#1565C0] text-lg leading-relaxed">{brewery.country}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Date de création</h3>
          <p className="text-[#1565C0] text-lg">
            {new Date(brewery.created_at).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="bg-white mt-8 p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-[#0D47A1]">Bières associées</h2>

        {loading ? (
          <p className="text-lg text-[#0D47A1]">Chargement des bières...</p>
        ) : error ? (
          <p className="text-lg text-red-500">{error}</p>
        ) : beers.length === 0 ? (
          <p className="text-lg text-[#0D47A1]">Aucune bière associée trouvée.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {beers.map((beer) => (
              <li
                key={beer.id_beer}
                className="bg-[#BBDEFB] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-[#0D47A1]">{beer.name}</h3>
                <p className="text-[#1565C0] text-sm mt-2">
                  {beer.description || "Pas de description disponible."}
                </p>
                <button
                  onClick={() => handleNavigateToBeer(beer.id_beer)}
                  className="mt-4 flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m0 0l3-3m-3 3l3 3m6 9H6a2 2 0 01-2-2V6a2 2 0 012-2h9.586a2 2 0 011.414.586l4.414 4.414a2 2 0 01.586 1.414V20a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Voir les détails
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8">
        <button
          onClick={() => navigate("/breweries")}
          className="px-6 py-3 bg-[#2196F3] text-white text-lg font-semibold rounded-lg shadow hover:bg-[#1976D2] transition duration-300 transform hover:scale-105"
        >
          Retour aux brasseries
        </button>
      </div>
    </div>
  );
};

export default BreweryDetail;
