import React, { useState, useEffect } from "react";
import { getBreweries } from "../../../services/brewery/brewerieService";
import { Brewery } from "../../../response/breweryResponse";

export const useBreweries = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchName, setSearchName] = useState<string>("");
  const [searchCountry, setSearchCountry] = useState<string>("");

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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCountry(e.target.value);
  };

  const filteredBreweries = breweries.filter((brewery) => {
    const matchesName =
      !searchName || brewery.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesCountry =
      !searchCountry || brewery.country.toLowerCase() === searchCountry.toLowerCase();
    return matchesName && matchesCountry;
  });

  return {
    breweries,
    loading,
    error,
    searchName,
    searchCountry,
    handleNameChange,
    handleCountryChange,
    filteredBreweries,
  };
};
