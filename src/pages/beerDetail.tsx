import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBeerById } from "../services/beerService";
import { Beer } from "../response/beer";
import BeerDetail from "../components/BeerDetail";

const BeerDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [beer, setBeer] = useState<Beer | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const loadBeer = async () => {
            if (!id) {
                setError("ID invalide.");
                setLoading(false);
                return;
            }
            
            try {
                const data = await fetchBeerById(parseInt(id, 10));
                setBeer(data);
            } catch (err) {
                setError("Erreur lors du chargement de la bière.");
            } finally {
                setLoading(false);
            }
        };
        
        loadBeer();
    }, [id]);
    
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-700 text-xl">Chargement...</p>
            </div>
        );
    }
    
    if (error || !beer) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
            <p className="text-gray-700 text-xl mb-4">
            {error || "Bière introuvable."}
            </p>
            <button
            onClick={() => navigate("/beers")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
            Retour au catalogue
            </button>
            </div>
        );
    }
    
    return (
        <div>
        <BeerDetail beer={beer} />
        <div className="text-center mt-6">
        <button
        onClick={() => navigate("/beers")}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
        Retour au catalogue
        </button>
        </div>
        </div>
    );
};

export default BeerDetailPage;
