import React from "react";
import { Link } from "react-router-dom";
import { HiHome, HiCollection, HiMenu, HiX, HiOfficeBuilding } from "react-icons/hi";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
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
        className={`fixed inset-0 bg-gray-800 text-white max-w-full transform transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-64`}
      >
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          Zythologue Erwan
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <HiHome className="text-xl" />
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-sm font-medium"
              >
                Accueil
              </Link>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <HiCollection className="text-xl" />
              <Link
                to="/beers"
                onClick={handleLinkClick} 
                className="text-sm font-medium"
              >
                Catalogue des Bières
              </Link>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <HiOfficeBuilding className="text-xl" />
              <Link
                to="/breweries"
                onClick={handleLinkClick}
                className="text-sm font-medium"
              >
                Liste des Brasseries
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
