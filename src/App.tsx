import "./App.css";
import { Route, Routes } from "react-router-dom";
import Beers from "./pages/beer/beersList";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import BeerDetailPage from "./pages/beer/beerDetailPage";
import { useState } from "react";
import BreweriesPage from "./pages/breweries/BreweriesListPage";
import BreweryDetails from "./pages/breweries/BreweryDetailsPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="relative flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 p-4 bg-gray-100 transition-all duration-300 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:id" element={<BeerDetailPage />} />
          <Route path="/breweries" element={<BreweriesPage />} />
          <Route path="/breweries/:id_brewery" element={<BreweryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
