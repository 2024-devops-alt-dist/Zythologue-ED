import React from "react";

import { useBeerDetail } from "./hooks/useBeerDetail";
import BeerDetail from "../../components/beer/beerDetail";

const BeerDetailPage: React.FC = () => {
  const { beer, error, loading } = useBeerDetail();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-xl">Chargement...</p>
      </div>
    );
  }

  if (error || !beer) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-700 text-xl mb-4">
          {error || "Bière introuvable."}
        </p>
      </div>
    );
  }

  return <BeerDetail beer={beer} />;
};

export default BeerDetailPage;
