import "./App.css";
import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import FoodRibbon from "./components/FoodRibbon";

// import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  // const handleCategorySelect = (category) => {
  //   // Console log the selected category.
  //   console.log("Selected category:", category);
  //   // Navigate to the selected category's page.
  //   navigate(`/foods/${category}`);
  // };

  return (
    <>
      {/* <Navbar /> */}
      {/* <FoodRibbon onCategorySelect={handleCategorySelect} /> */}
      <main className="mx-auto">
        <Outlet />
      </main>
      {/* <Footer /> */}
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