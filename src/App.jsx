import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import FoodCardModal from "./components/FoodCardModal";
import useToggle from "./utils/useToggle";
import { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function App() {
  const { on, toggler } = useToggle(); // Destructure the on and toggler properties from the useToggle hook function.

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust this value based on when you want the button to appear
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar toggler={toggler} />
      <main className="mx-auto">
        <Outlet />
        {showBackToTop && (
          <button
            className="fixed bottom-4 right-4 text-yellow-400 bg-transparent rounded-full text-5xl drop-shadow-none hover:drop-shadow-none focus:bg-transparent"
            onClick={scrollToTop}
          >
            <FaRegArrowAltCircleUp />
          </button>
        )}
      </main>
      <Footer />
      {on && <LoginModal toggler={toggler} />}
      {on && <FoodCardModal toggler={toggler} />}
    </>
  );
}

export default App;