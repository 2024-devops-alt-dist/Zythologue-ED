import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Mail, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useUser();
  const navigate = useNavigate();
  const [shake, setShake] = useState(false);

  const from = "/dashboard";

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      setCurrentUser({ email, role: "admin" });
      navigate(from, { replace: true });
    } else if (email === "user" && password === "user") {
      setCurrentUser({ email, role: "user" });
      navigate(from, { replace: true });
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,150,0.3),_rgba(0,0,0,1))] animate-neon"></div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-gray-900 bg-opacity-80 backdrop-blur-lg p-10 rounded-2xl shadow-xl max-w-sm w-full text-center border border-gray-700"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-4"
        >
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="User Icon"
              className="w-10 h-10"
            />
          </div>
        </motion.div>

        <h2 className="text-white text-3xl font-bold mb-6">Connexion</h2>

        <motion.div
          className="relative mb-4"
          whileHover={{ scale: 1.02 }}
          whileFocus={{ scale: 1.05 }}
        >
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-12 pr-4 py-3 border-none rounded-md bg-gray-800 text-white shadow-md focus:ring-4 focus:ring-pink-500 focus:outline-none transition duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>

        <motion.div
          className="relative mb-6"
          whileHover={{ scale: 1.02 }}
          whileFocus={{ scale: 1.05 }}
        >
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full pl-12 pr-4 py-3 border-none rounded-md bg-gray-800 text-white shadow-md focus:ring-4 focus:ring-blue-500 focus:outline-none transition duration-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>

        <AnimatePresence>
          {shake && (
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: [0, -10, 10, -10, 10, 0], opacity: [1, 0.8, 1] }}
              transition={{ duration: 0.5 }}
              className="text-red-400 font-semibold"
            >
              ❌ Mauvais mot de passe !
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLogin}
          className="w-full px-6 py-3 bg-pink-600 text-white font-bold rounded-md shadow-md hover:bg-pink-700 transition duration-300"
        >
          🔥 Se connecter
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="w-full mt-4 px-6 py-3 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600 transition duration-300"
        >
          🏠 Retour à l'accueil
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LoginPage;
