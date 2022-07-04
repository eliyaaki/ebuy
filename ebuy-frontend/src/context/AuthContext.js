import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStickyState from "../hooks/use-sticky-state";
import { SettingsContextProvider } from "./SettingsContext";

const AuthContext = React.createContext({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useStickyState(null, "user");
  const [token, setToken] = useStickyState(null, "token");
  const navigate = useNavigate();

  const logout = () => {};

  const login = () => {
    setUser("user");
    navigate(`/Home`, { replace: true });
  };

  useEffect(() => {}, []);

  return (
    <SettingsContextProvider>
      <AuthContext.Provider
        value={{
          user,
          setUser: setUser,
          setUser: setUser,
          token,
          setToken: setToken,
          login: login,
          logout: logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </SettingsContextProvider>
  );
};

export default AuthContext;
