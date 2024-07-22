import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FoodRibbon from "./components/FoodRibbon";

function App() {
  const handleCategorySelect = (category) => {
    // Implement what should happen when a category is selected
    console.log("Selected category:", category);
  };

  return (
    <>
      <Navbar />
      <FoodRibbon onCategorySelect={handleCategorySelect} />
      <main className="mx-auto py-5">
        <Outlet />
      </main>
      <Footer />
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