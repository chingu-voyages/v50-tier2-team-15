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
import UserDashboard from "./screens/UserDashboard";
import ShowFoodMenu from "./screens/ShowFoodMenu.jsx";
import OurFoodsList from "./screens/OurFoodsList.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import AddTips from "./screens/AddTips.jsx"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/foods" element={<OurFoodsList />} />
      <Route path="/foods/:category" element={<ShowFoodMenu />} />

      <Route path="" element={<PrivateRoute />}>
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/checkout" element={<OrderScreen />} />
      <Route path="/addTips" element={<AddTips />}/>
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
