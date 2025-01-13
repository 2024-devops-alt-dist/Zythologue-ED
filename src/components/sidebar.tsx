import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiHome, HiCollection, HiMenu, HiX } from "react-icons/hi";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-20 text-white bg-gray-800 p-2 rounded-md lg:hidden"
      >
        {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
      </button>

      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white flex flex-col transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-64 transition-transform duration-300`}
      >
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          MyApp
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <HiHome className="text-xl" />
              <Link to="/" className="text-sm font-medium">
                Accueil
              </Link>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <HiCollection className="text-xl" />
              <Link to="/beers" className="text-sm font-medium">
                Catalogue des Bières
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700 text-sm">© 2025 MyApp</div>
      </div>
    </>
  );
};

export default Sidebar;
