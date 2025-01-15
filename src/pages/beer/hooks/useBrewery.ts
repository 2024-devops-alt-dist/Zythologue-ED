import { useState, useEffect } from "react";
import { Brewery } from "../../../response/brewery";
import { getBreweryById } from "../../../services/brewery/brewerieService";


export const useBrewery = (breweryId: number | null) => {
  const [brewery, setBrewery] = useState<Brewery | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrewery = async () => {
      if (breweryId) {
        try {
          const fetchedBrewery = await getBreweryById(breweryId);
          setBrewery(fetchedBrewery);
        } catch (err) {
          setError("Erreur lors de la récupération de la brasserie.");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchBrewery();
  }, [breweryId]);

  return { brewery, loading, error };
};
