import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Beers from "./pages/beer/beersList";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import BeerDetailPage from "./pages/beer/beerDetailPage";
import { useState } from "react";
import BreweriesPage from "./pages/breweries/BreweriesListPage";
import BreweryDetails from "./pages/breweries/BreweryDetailsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import Unauthorized from "./pages/admin/Unauthorized";
import { UserProvider } from "./context/UserContext";
import LoginPage from "./pages/LoginPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const location = useLocation();

  const hideSidebarOn = ["/dashboard", "/login", "/unauthorized"];
  const shouldHideSidebar = hideSidebarOn.includes(location.pathname);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotate: -15,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      rotate: 10,
      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <UserProvider>
      <div className="relative flex bg-gradient-to-br from-blue-900 via-gray-900 to-black min-h-screen">
        {!shouldHideSidebar && (
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        <div
          className={`flex-1 transition-all duration-300 overflow-auto ${
            shouldHideSidebar ? "w-full" : ""
          }`}
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/beers"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <Beers />
                  </motion.div>
                }
              />
              <Route
                path="/beers/:id"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <BeerDetailPage />
                  </motion.div>
                }
              />
              <Route
                path="/breweries"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <BreweriesPage />
                  </motion.div>
                }
              />
              <Route
                path="/breweries/:id_brewery"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <BreweryDetails />
                  </motion.div>
                }
              />
              <Route
                path="/login"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <LoginPage />
                  </motion.div>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                    >
                      <Dashboard />
                    </motion.div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/unauthorized"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <Unauthorized />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
