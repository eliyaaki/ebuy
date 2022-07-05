import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

import Login from "./pages/Login";

import ProtectedRoute from "./UiKit/ProtectedRoute";
import Home from "./pages/Home";
import LoginClub from "./pages/SignIn";
import RegisterClub from "./pages/SignUp";

import "./App.scss";
import Products from "./pages/Products";

const App = () => {
  const { loggedIn, user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              !loggedIn ? (
                <Login />
              ) : user ? (
                <Navigate to="products" />
              ) : (
                <Navigate to="home" />
              )
            }
          />
          <Route path="/" element={<ProtectedRoute />}>
            <Route
              path="/home"
              element={user ? <Navigate to="/404" /> : <Home />}
            />
            <Route
              path="/register-club"
              element={user ? <Navigate to="/404" /> : <RegisterClub />}
            />
            <Route
              path="/login-club"
              element={user ? <Navigate to="/404" /> : <LoginClub />}
            />
            <Route path="/" element={<ProtectedRoute club={true} />}>
              <Route path="/products" element={<Products />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
