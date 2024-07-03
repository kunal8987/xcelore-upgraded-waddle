import React, { useContext } from "react";
import { AuthContext } from "./authContextProvider";
import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const state = useContext(AuthContext);
  const navigate = useNavigate();
  if (!state.authState.isAuth) {
    return navigate("/login");
  } else {
    return children;
  }
};

export default PrivateRoute;
