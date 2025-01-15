import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Beer } from "../../../response/beer";
import { fetchBeerById } from "../../../services/beer/beerService";


export const useBeerDetail = () => {
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

  return {
    beer,
    error,
    loading,
    navigate,
  };
};
