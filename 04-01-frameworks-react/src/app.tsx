import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, ListPage, DetailPage, MyContextProvider } from "@/scenes";

export const App = () => {
  return (
    // Aquí definimos el enrutado de nuestra aplicación
    <MyContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </MyContextProvider>
  );
};
