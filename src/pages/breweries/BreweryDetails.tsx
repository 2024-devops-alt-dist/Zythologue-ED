import React from "react";
import { useParams } from "react-router-dom";
import { useBreweryDetails } from "./hooks/useBreweryDetails";
import BreweryDetailsCard from "../../components/brewery/BreweryDetailsCard";

const BreweryDetails: React.FC = () => {
  const { id_brewery } = useParams<{ id_brewery: string }>();
  const { brewery, loading, error } = useBreweryDetails(Number(id_brewery));

  if (loading) {
    return <div className="text-center text-lg">Chargement des détails...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Erreur : {error}</div>;
  }

  if (!brewery) {
    return <div className="text-center text-lg">Aucune brasserie trouvée.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <BreweryDetailsCard brewery={brewery} />
    </div>
  );
};

export default BreweryDetails;
