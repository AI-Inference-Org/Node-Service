import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../pages/LandingPage";
import AuthenticationPage from "../pages/AuthenticationPage";
import SignUpAuthPage from "../pages/SignUpAuthPage";
import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/providerDashborad";
const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/customer/login"
            element={
              <AuthenticationPage entity={"customer"} entityType={"customer"} />
            }
          />
          <Route
            path="/provider/login"
            element={
              <AuthenticationPage entity={"proivder"} entityType={"provider"} />
            }
          />
          <Route
            path="/customer/signup"
            element={
              <SignUpAuthPage entity={"customer"} entityType={"customer"} />
            }
          />
          <Route
            path="/provider/signup"
            element={
              <SignUpAuthPage entity={"proivder"} entityType={"provider"} />
            }
          />
          <Route
            path="/provider/dashboard"
            element={<SideBar section={section} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
