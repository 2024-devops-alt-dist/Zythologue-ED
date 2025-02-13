import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  const thunderSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialisation de l'effet sonore
    thunderSound.current = new Audio("/thunder.mp3");
    thunderSound.current.volume = 0.8;

    setIsAudioLoaded(true);
  }, []);

  const playThunder = () => {
    if (isAudioLoaded && thunderSound.current) {
      thunderSound.current.currentTime = 0;
      thunderSound.current.play().catch(() => {});
    }
  };

  const handleViewBeers = () => {
    playThunder();
    navigate("/beers");
  };

  const handleViewBreweries = () => {
    playThunder();
    navigate("/breweries");
  };

  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?galaxy,stars,cyberpunk')] bg-cover bg-center opacity-30 animate-pulse"></div>

      <motion.header
        initial={{ opacity: 0, y: -50, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-12 shadow-2xl"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-extrabold text-center animate-glow glitch">
            🍻 LE TEMPLE DE LA BIÈRE 🍻
          </h1>
          <p className="text-2xl text-center mt-4 opacity-80">
            Plongez dans un univers où les bières sont des légendes.
          </p>
        </div>
      </motion.header>

      <main className="relative container mx-auto px-4 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl font-semibold text-yellow-300 mb-12 animate-flicker"
        >
          ⚡️ Découvrez l'ultime collection ⚡️
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            className="p-8 bg-gradient-to-br from-black to-gray-900 border border-yellow-500 rounded-xl shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              🍺 Le Grimoire des Bières
            </h3>
            <p className="text-gray-300 mb-6">
              Découvrez les plus rares breuvages artisanaux sélectionnés pour
              les aventuriers du goût.
            </p>
            <motion.button
              whileHover={{ scale: 1.1, textShadow: "0px 0px 10px yellow" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleViewBeers}
              className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300"
            >
              Voir le Catalogue
            </motion.button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08, rotate: -5 }}
            className="p-8 bg-gradient-to-br from-black to-gray-900 border border-blue-500 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-4">
              🏰 Les Temples de la Bière
            </h3>
            <p className="text-gray-300 mb-6">
              Voyagez à travers les meilleures brasseries, berceaux des potions
              houblonnées les plus exquises.
            </p>
            <motion.button
              whileHover={{ scale: 1.1, textShadow: "0px 0px 10px cyan" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleViewBreweries}
              className="px-6 py-3 bg-blue-500 text-black font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
            >
              Explorer les Brasseries
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;
