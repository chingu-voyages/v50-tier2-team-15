import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodData } from "./slices/foodDataApiSlice";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FoodCard from "./components/FoodCard";
import FoodRibbon from "./components/FoodRibbon";
import FoodMenu from "./components/FoodMenu";

function App() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  return (
    <>
      <div className='flex'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <FoodRibbon onCategorySelect={setSelectedCategory} />
      {selectedCategory && <FoodMenu selectedCategory={selectedCategory} />}
      <FoodCard />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;