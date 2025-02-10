import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useUser();
  const navigate = useNavigate();

  const from = "/dashboard";

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      setCurrentUser({ email, role: "admin" });
      navigate(from, { replace: true });
    } else if (email === "user" && password === "user") {
      setCurrentUser({ email, role: "user" });
      navigate(from, { replace: true });
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  // Fonction pour revenir à l'accueil
  const handleGoHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Connexion</h1>
      <div className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Se connecter
        </button>
        <button
          onClick={handleGoHome}
          className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition mt-4"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
