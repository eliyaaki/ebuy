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

const App = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={loggedIn ? <Login /> : <Navigate to="home" />}
          />
          <Route path="/a" element={<>a</>} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/register-club" element={<RegisterClub />} />
            <Route path="/login-club" element={<LoginClub />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
