import React, { Fragment, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const ProtectedRoute = (props) => {
  const { loggedIn, user } = useContext(AuthContext);
  console.log(props.club);
  return props.club ? (
    user ? (
      <Outlet />
    ) : (
      <Navigate to="404" />
    )
  ) : loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="404" />
  );
};

export default ProtectedRoute;
