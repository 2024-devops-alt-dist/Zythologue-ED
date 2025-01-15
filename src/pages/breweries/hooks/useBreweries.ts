import { useState, useEffect } from "react";
import { getBreweries } from "../../../services/brewery/brewerieService";
import { Brewery } from "../../../response/breweryResponse";


export const useBreweries = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        setLoading(true);
        const data = await getBreweries();
        setBreweries(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreweries();
  }, []);

  return { breweries, loading, error };
};
