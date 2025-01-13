import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beers from "./pages/beer/beers";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import BeerDetailPage from "./pages/beer/beerDetail";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="relative flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-1 p-4 bg-gray-100 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:id" element={<BeerDetailPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
