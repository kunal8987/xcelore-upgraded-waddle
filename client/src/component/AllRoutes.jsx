import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import CreateProfile from "../pages/CreateProfile";
import EditProfile from "../profile/EditProfile";
import ShowProfile from "../profile/ShowProfile";
import PrivateRoute from "../context/PrivateRoute";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/create-profile"
        element={
          <PrivateRoute>
            <CreateProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ShowProfile />
          </PrivateRoute>
        }
      />
      <Route path="/edit-profile/:id" element={<EditProfile />} />
    </Routes>
  );
};

export default Allroutes;
