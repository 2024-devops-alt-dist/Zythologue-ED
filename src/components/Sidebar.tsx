import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import {
  HiHome,
  HiCollection,
  HiMenu,
  HiX,
  HiOfficeBuilding,
  HiUserCircle,
} from "react-icons/hi";
import { FaBeer } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { currentUser } = useUser();

  const handleLinkClick = () => {
    toggleSidebar();
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 z-30 bg-gray-800 p-2 rounded-md text-white transition-transform duration-300 ${
          isOpen ? "left-4" : "left-4"
        } lg:hidden`}
      >
        {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
      </button>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
        ></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transform transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative`}
      >
        <div className="p-4 text-xl font-bold border-b border-gray-700 flex items-center space-x-2">
          <FaBeer className="text-3xl text-yellow-500" />
          <span>Zythologue Erwan</span>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <HiHome className="text-2xl" />
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-lg font-medium"
              >
                Accueil
              </Link>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <HiCollection className="text-2xl" />
              <Link
                to="/beers"
                onClick={handleLinkClick}
                className="text-lg font-medium"
              >
                Catalogue des Bières
              </Link>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <HiOfficeBuilding className="text-2xl" />
              <Link
                to="/breweries"
                onClick={handleLinkClick}
                className="text-lg font-medium"
              >
                Liste des Brasseries
              </Link>
            </li>

            {/* verification si utilisateur est admin pour acceder a la route  */}
            {currentUser?.role === "admin" && (
              <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
                <HiUserCircle className="text-2xl" />
                <Link
                  to="/dashboard"
                  onClick={handleLinkClick}
                  className="text-lg font-medium"
                >
                  Dashboard Admin
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
