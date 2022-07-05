import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStickyState from "../hooks/use-sticky-state";
import { SettingsContextProvider } from "./SettingsContext";

const AuthContext = React.createContext({
  loggedIn: false,
  setLoggedIn: () => {},
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  login: () => {},
  signIn: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useStickyState(null, "loggedIn");
  const [user, setUser] = useStickyState(null, "user");
  const [token, setToken] = useStickyState(null, "token");
  const navigate = useNavigate();

  const logout = () => {};

  const login = () => {
    setLoggedIn(true);
    navigate(`/Home`, { replace: true });
  };

  const signIn = () => {
    setUser("user");
    navigate(`/Products`, { replace: true });
  };

  useEffect(() => {}, []);

  return (
    <SettingsContextProvider>
      <AuthContext.Provider
        value={{
          loggedIn,
          setLoggedIn: setLoggedIn,
          user,
          setUser: setUser,
          token,
          setToken: setToken,
          login: login,
          signIn: signIn,
          logout: logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </SettingsContextProvider>
  );
};

export default AuthContext;
