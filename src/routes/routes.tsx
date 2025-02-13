import { Route } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Beers from "../pages/beer/beersList";
import BeerDetailPage from "../pages/beer/beerDetailPage";
import BreweriesPage from "../pages/breweries/BreweriesListPage";
import BreweryDetails from "../pages/breweries/BreweryDetailsPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/admin/Dashboard";
import Unauthorized from "../pages/admin/Unauthorized";
import Home from "../components/Home";


const routes = (
<>
    <Route path="/" element={<PageTransition><Home/></PageTransition>} />
    <Route path="/beers" element={<PageTransition><Beers /></PageTransition>} />
    <Route path="/beers/:id" element={<PageTransition><BeerDetailPage /></PageTransition>} />
    <Route path="/breweries" element={<PageTransition><BreweriesPage /></PageTransition>} />
    <Route path="/breweries/:id_brewery" element={<PageTransition><BreweryDetails /></PageTransition>} />
    <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
    <Route path="/dashboard" element={<ProtectedRoute><PageTransition><Dashboard /></PageTransition></ProtectedRoute>} />
    <Route path="/unauthorized" element={<PageTransition><Unauthorized /></PageTransition>} />
</>
);

export default routes;
