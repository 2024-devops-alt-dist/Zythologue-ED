import { useState, useEffect } from "react";
import { Beer } from "../../../response/beerResponse";
import { fetchBeers } from "../../../services/beer/beerService";

export const useBeers = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);
  const [search, setSearch] = useState<string>("");
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

  const filterBeers = (
    searchQuery: string,
    abvRange: string
  ) => {
    const query = searchQuery.toLowerCase();
    const [minAbv, maxAbv] = abvRange
      ? abvRange.split("-").map((v) => parseFloat(v))
      : [undefined, undefined];

    const results = beers.filter((beer) => {
      const matchesSearch =
        beer.name.toLowerCase().includes(query) ||
        beer.description.toLowerCase().includes(query);

      const matchesAbv =
        (!minAbv || beer.abv >= minAbv) &&
        (!maxAbv || beer.abv <= maxAbv);

      return matchesSearch && matchesAbv;
    });
    setFilteredBeers(results);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    filterBeers(query, "");
  };

  const handleAbvRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const range = e.target.value;
    filterBeers(search, range);
  };

  return {
    beers,
    filteredBeers,
    search,
    error,
    isLoading,
    handleSearch,
    handleAbvRangeChange,
  };
};
