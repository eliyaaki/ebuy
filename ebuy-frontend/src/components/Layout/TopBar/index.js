import React, { useState, useRef } from "react";
import Toggle from "../../../UiKit/Toggle";
import { useSettings } from "../../../context/SettingsContext";
import { useAuth } from "../../../context/AuthContext";
import { NavLink } from "react-router-dom";
import img from "../../../assets/images/Navigation/Rectangle 5.png";
import img2 from "../../../assets/images/Navigation/Polygon 1.png";

import "./index.scss";

const TopBar = () => {
  const { onThemeSwitch, theme } = useSettings();

  const { logout, setUser, loggedIn, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {}
  };

  return (
    <>
      {loggedIn && (
        <header className="header">
          <img src={img} height="50px" alt="topbar" className="bar" />
          <nav className="nav">
            {!user ? (
              <ul>
                <>
                  <li>
                    <NavLink
                      className={(navData) => {
                        if (navData.isActive) {
                          return "active";
                        }
                        return "";
                      }}
                      to={`/Home`}
                    >
                      <>
                        <img src={img2} className="arrow"></img>
                        <p>Home</p>
                      </>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "active" : ""
                      }
                      to="/login-club"
                    >
                      <img src={img2} className="arrow"></img>
                      <p>Login</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "active" : ""
                      }
                      to="/register-club"
                    >
                      <img src={img2} className="arrow"></img>
                      <p>Register</p>
                    </NavLink>
                  </li>
                </>
              </ul>
            ) : (
              <ul>
                <>
                  <li>
                    <NavLink
                      className={(navData) => {
                        if (navData.isActive) {
                          return "active";
                        }
                        return "";
                      }}
                      to={`/Products`}
                    >
                      <>
                        <img src={img2} className="arrow"></img>
                        <p>Products</p>
                      </>
                    </NavLink>
                  </li>
                </>
              </ul>
            )}
          </nav>
        </header>
      )}
    </>
  );
};

export default TopBar;
