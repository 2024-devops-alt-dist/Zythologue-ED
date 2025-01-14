import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Beer } from "../../response/beer";
import { Brewery } from "../../response/brewery";
import { getBreweryById } from "../../services/brewerieService";

interface BeerDetailProps {
  beer: Beer;
}

const BeerDetail: React.FC<BeerDetailProps> = ({ beer }) => {
  const navigate = useNavigate();
  const [brewery, setBrewery] = useState<Brewery | null>(null);

  useEffect(() => {
    const fetchBrewery = async () => {
      if (beer.brewery_id) {
        try {
          const fetchedBrewery = await getBreweryById(beer.brewery_id);
          setBrewery(fetchedBrewery);
        } catch (error) {
          console.error("Erreur lors de la récupération de la brasserie :", error);
        }
      }
    };

    fetchBrewery();
  }, [beer.brewery_id]);

  return (
    <div className="min-h-screen bg-[#FFF8E1] flex flex-col items-center py-10 px-4">
      <div className="bg-[#FFC107] text-[#4E342E] w-full py-8 rounded-lg shadow-md text-center animate-fadeIn">
        <h1 className="text-4xl font-bold">{beer.name}</h1>
        <p className="text-lg mt-2 font-medium">
          Une bière exceptionnelle à savourer
        </p>
      </div>

      <div className="bg-[#FFE0B2] mt-8 p-6 rounded-lg shadow-lg max-w-4xl w-full text-[#4E342E] animate-slideUp">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          <p className="text-[#6D4C41] text-lg leading-relaxed">
            {beer.description}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Taux d'alcool</h2>
          <p className="text-[#6D4C41] text-lg">
            <span className="font-medium">{beer.abv}%</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Brasserie</h3>
            {brewery ? (
              <p className="text-[#6D4C41] text-lg">
                <span className="font-medium">{brewery.name}</span> (
                <button
                  onClick={() => navigate(`/breweries/${brewery.id_brewery}`)}
                  className="text-blue-600 hover:underline"
                >
                  Voir la brasserie
                </button>
                )
              </p>
            ) : (
              <p className="text-[#6D4C41] text-lg">Chargement...</p>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold">Catégorie</h3>
            <p className="text-[#6D4C41] text-lg">
              {beer.category_id ? `Catégorie ID: ${beer.category_id}` : "N/A"}
            </p>
          </div>
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
