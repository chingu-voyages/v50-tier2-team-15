import React from "react";
import ReactDOM from "react-dom/client";
import PrivateRoute from "./components/PrivateRoute";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App.jsx";
import "./index.css";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import UserDashboard from "./screens/UserDashboard";
import ShowFoodMenu from "./screens/ShowFoodMenu.jsx";
import FoodCard from "./components/FoodCard";
import OurFoodsList from "./screens/OurFoodsList.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/foods" element={<OurFoodsList />} />
      <Route path="/foods/:category" element={<ShowFoodMenu />} />
      <Route path="/food/:id" element={<FoodCard />} />

      <Route path="" element={<PrivateRoute />}>
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/checkout" element={<UserDashboard />} />
      </Route>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
