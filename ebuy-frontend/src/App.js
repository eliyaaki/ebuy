import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";

import Layout from "./components/Layout";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

import "./App.scss";
import ProtectedRoute from "./UiKit/ProtectedRoute";
import Home from "./components/Home";
import LoginClub from "./components/LoginClub";
import RegisterClub from "./components/RegisterClub";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={user === null ? <Login /> : <Navigate to="home" />}
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
