import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import useToggle from "./utils/useToggle";

function App() {

  const { on, toggler } = useToggle(); // Custom hook to toggle modal


  return (
    <>
      <Navbar toggler={toggler} />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
      {on && <LoginModal toggler={toggler} />}
      {on && <FoodCardModal toggler={toggler} />}
    </>
  );
}

export default App;

// import "./App.css";
// import { Outlet } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <FoodRibbon />
//       <main className="mx-auto py-5">
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;