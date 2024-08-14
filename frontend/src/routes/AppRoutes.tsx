import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../pages/LandingPage";
import AuthenticationPage from "../pages/AuthenticationPage";
import SignUpAuthPage from "../pages/SignUpAuthPage";
import AIApplicationPage from "../pages/AIApplicationPage";
import BinariesForm from "../pages/BinariesPage";
import AIPluginPage from "../pages/AIPluginPage";
import RestApiPage from "../pages/AIRestApiForm";
import Dashboard from "../pages/DashboardPage";
import ComputePage from "../pages/ComputePage";
import ProvidersListingPage from "../pages/ProvidersListingsPage";
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
          <Route path="/provider/dashboard" element={<Dashboard />} />
          <Route path="/ai/application" element={<AIApplicationPage />} />
          <Route path="/binaries" element={<BinariesForm />} />
          <Route path="/plugins" element={<AIPluginPage />} />
          <Route path="/apis" element={<RestApiPage />} />
          <Route path="/list/compute" element={<ComputePage />} />
          <Route path="/listings" element={<ProvidersListingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
