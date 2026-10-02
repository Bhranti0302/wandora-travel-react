import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Destinations from "../pages/Destinations/Destinations";
import Packages from "../pages/Packages/Packages";
import TripPlanner from "../pages/TripPlanner/TripPlanner";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
              <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
