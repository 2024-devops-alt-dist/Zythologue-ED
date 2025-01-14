import React from "react";
import { useBreweries } from "./hooks/useBreweries";
import BreweryCard from "../../components/brewery/BreweryCard";

const BreweriesPage: React.FC = () => {
  const { breweries, loading, error } = useBreweries();

  if (loading) {
    return (
      <div className="text-center text-lg">Chargement des brasseries...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Erreur : {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Toute nos Brasseries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breweries.map((brewery) => (
          <BreweryCard key={brewery.id_brewery} brewery={brewery} />
        ))}
      </div>
    </div>
  );
};

export default BreweriesPage;
