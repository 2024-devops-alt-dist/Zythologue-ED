import "./App.css";
import { Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { UserProvider } from "./context/UserContext";
import routes from "./routes/routes"; 

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const location = useLocation();

  const hideSidebarOn = ["/dashboard", "/login", "/unauthorized"];
  const shouldHideSidebar = hideSidebarOn.some((path) => location.pathname.startsWith(path));

  return (
    <UserProvider>
      <div className="relative flex bg-gradient-to-br from-blue-900 via-gray-900 to-black min-h-screen">
        {!shouldHideSidebar && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        <div className={`flex-1 transition-all duration-300 overflow-auto ${shouldHideSidebar ? "w-full" : ""}`}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {routes}
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
