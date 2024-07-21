import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodData } from "./slices/foodDataApiSlice";
import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;