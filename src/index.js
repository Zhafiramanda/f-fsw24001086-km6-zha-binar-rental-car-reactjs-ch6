import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import CariMobil from "./pages/CariMobil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/cars" element={<CariMobil />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

reportWebVitals();
