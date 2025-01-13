import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beers from "./pages/beers";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import BeerDetailPage from "./pages/beerDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 ml-64 p-6 bg-gray-100">
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
