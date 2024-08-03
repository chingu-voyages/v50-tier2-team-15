import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import FoodCardModal from "./components/FoodCardModal";
import useToggle from "./utils/useToggle";

function App() {

  const { modal, toggler } = useToggle(); // use the custom hook to manage the modal state and toggler function.


  return (
    <>
      <Navbar toggler={toggler} />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
      {modal === "login" && <LoginModal toggler={() => toggler("login")} />}
      {modal === "foodCard" && <FoodCardModal toggler={() => toggler("foodCard")} />}
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