import { useState, useEffect } from "react";
import { Beer } from "../../../response/beer";
import { fetchBeers } from "../../../services/beerService";


export const useBeers = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);
  const [search, setSearch] = useState<string>("");
  const [minAbv, setMinAbv] = useState<number | undefined>(undefined);
  const [maxAbv, setMaxAbv] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBeers = async () => {
      try {
        const data = await fetchBeers();
        const parsedData = data.map((beer: any) => ({
          ...beer,
          abv: parseFloat(beer.abv),
        }));
        setBeers(parsedData);
        setFilteredBeers(parsedData);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Erreur lors du chargement des bières : ${err.message}`);
        } else {
          setError("Une erreur inconnue s'est produite.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadBeers();
  }, []);

  const filterBeers = (searchQuery: string, min: number | undefined, max: number | undefined) => {
    const query = searchQuery.toLowerCase();
    const results = beers.filter((beer) => {
      const matchesSearch =
        beer.name.toLowerCase().includes(query) ||
        beer.description.toLowerCase().includes(query);
      const matchesMinAbv = min === undefined || beer.abv >= min;
      const matchesMaxAbv = max === undefined || beer.abv <= max;

      return matchesSearch && matchesMinAbv && matchesMaxAbv;
    });
    setFilteredBeers(results);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    filterBeers(query, minAbv, maxAbv);
  };

  const handleMinAbvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : undefined;
    setMinAbv(value);
    filterBeers(search, value, maxAbv);
  };

  const handleMaxAbvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : undefined;
    setMaxAbv(value);
    filterBeers(search, minAbv, value);
  };

  return {
    beers,
    filteredBeers,
    search,
    minAbv,
    maxAbv,
    error,
    isLoading,
    handleSearch,
    handleMinAbvChange,
    handleMaxAbvChange,
  };
};
