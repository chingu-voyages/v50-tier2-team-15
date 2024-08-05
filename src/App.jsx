import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import FoodCardModal from "./components/FoodCardModal";
import useToggle from "./utils/useToggle";

function App() {

  const { on, toggler } = useToggle(); // Destructure the on and toggler properties from the useToggle hook function.


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