import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginPage from "./pages/public/login";
import HomePage from "./pages/public/home";
import DashboardPage from "./pages/admin/dashboard";
import SkillsPage from "./pages/admin/skills";
import PortfoliosPage from "./pages/admin/portfolios";

import AdminLayout from "./components/layout/admin";

import { authName } from "./redux/slices/auth";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state[authName]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />

        <Route
          path="/"
          element={
            isAuthenticated && user?.role === "admin" ? (
              <AdminLayout />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="experiences" element={<DashboardPage />} />
          <Route path="education" element={<DashboardPage />} />
          <Route path="portfolios" element={<PortfoliosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
