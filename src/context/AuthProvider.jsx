import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    // console.log("Setting localStorage and userData...");
    const { employees } = getLocalStorage();
    // console.log("Loaded employees:", employees);
    setUserData({ employees });
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext }; // ✅ named exports
