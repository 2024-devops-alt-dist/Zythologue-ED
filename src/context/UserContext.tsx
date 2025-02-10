import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../utils/type/User";


const EXPIRATION_TIME = 60 * 1000;

interface UserContextProps {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUserState] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    const storedTimestamp = localStorage.getItem("expirationTime");

    if (storedUser && storedTimestamp) {
      const expirationTime = parseInt(storedTimestamp, 10);
      const currentTime = Date.now();

      if (currentTime < expirationTime) {
        setCurrentUserState(JSON.parse(storedUser));
      } else {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("expirationTime");
        setCurrentUserState(null);
      }
    }

    // Vérification du vidage du local storage
    const interval = setInterval(() => {
      const storedTimestamp = localStorage.getItem("expirationTime");
      if (storedTimestamp && Date.now() > parseInt(storedTimestamp, 10)) {
        logout();
      }
    }, 10 * 1000);

    return () => clearInterval(interval);
  }, []);

  const setCurrentUser = (user: User | null) => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem(
        "expirationTime",
        (Date.now() + EXPIRATION_TIME).toString()
      );
    } else {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("expirationTime");
    }
    setCurrentUserState(user);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("expirationTime");
    setCurrentUserState(null);
    window.location.href = "/login";
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
