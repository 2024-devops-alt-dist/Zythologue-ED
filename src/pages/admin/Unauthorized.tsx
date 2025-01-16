import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="p-6 bg-red-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-700 mb-4">Accès Refusé</h1>
      <p className="text-lg text-gray-700">
        Vous n'avez pas l'autorisation d'accéder à cette page.
      </p>
      <button
        onClick={handleGoBack}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default Unauthorized;
