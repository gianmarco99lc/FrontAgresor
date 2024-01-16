import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/Home";

//import { Salir } from "../pages/Salir";

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}/>
      <Route path="/home" element={<Home/>} />

      {/* <Route path="/salir" element={<Salir />} /> */}
    </Routes>
  );
}
