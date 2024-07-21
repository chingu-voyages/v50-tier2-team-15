import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="container mx-auto py-100"></div>
      <Footer />
    </>
  );
}

export default App;