import React from "react";
import { useNavigate } from "react-router-dom";
import { Brewery } from "../../response/brewery";

interface BreweryDetailProps {
  brewery: Brewery;
}

const BreweryDetail: React.FC<BreweryDetailProps> = ({ brewery }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#E3F2FD] flex flex-col items-center py-10 px-4">
      <div className="bg-[#2196F3] text-white w-full py-8 rounded-lg shadow-md text-center animate-fadeIn">
        <h1 className="text-4xl font-bold">{brewery.name}</h1>
        <p className="text-lg mt-2 font-medium">
          Découvrez l'histoire de cette brasserie
        </p>
      </div>

      <div className="bg-[#BBDEFB] mt-8 p-6 rounded-lg shadow-lg max-w-4xl w-full text-[#0D47A1] animate-slideUp">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Pays</h2>
          <p className="text-[#1565C0] text-lg leading-relaxed">
            {brewery.country}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Date de création</h2>
          <p className="text-[#1565C0] text-lg">
            {new Date(brewery.created_at).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Dernière mise à jour</h2>
          <p className="text-[#1565C0] text-lg">
            {new Date(brewery.updated_at).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
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
