import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Admin Dashboard</h1>
      <p className="text-lg text-gray-700">
        Bienvenue dans la section administrateur.
      </p>
      <div className="mt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Gérer les utilisateurs
        </button>
        <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          Voir les statistiques
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
