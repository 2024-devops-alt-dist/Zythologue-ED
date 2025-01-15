import { useState, useEffect } from "react";
import { Beer } from "../../../response/beer";
import { getBeersByBreweryId } from "../../../services/beer/beerService";


export const useBeersByBrewery = (breweryId: number) => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const data = await getBeersByBreweryId(breweryId);
        setBeers(data);
      } catch (err) {
        setError("Impossible de récupérer les bières associées.");
      } finally {
        setLoading(false);
      }
    };

    fetchBeers();
  }, [breweryId]);

  return { beers, loading, error };
};
