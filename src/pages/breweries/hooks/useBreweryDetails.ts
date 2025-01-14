import { useState, useEffect } from "react";
import { Brewery } from "../../../response/brewery";
import { getBreweryById } from "../../../services/brewerieService";

export const useBreweryDetails = (id: number) => {
  const [brewery, setBrewery] = useState<Brewery | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrewery = async () => {
      try {
        setLoading(true);
        const data = await getBreweryById(id);
        setBrewery(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrewery();
  }, [id]);

  return { brewery, loading, error };
};
