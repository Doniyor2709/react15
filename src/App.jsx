import { BrowserRouter,  Route, Routes } from "react-router-dom";

import HomePage from "./pages/public/home";
import DashboardPage from "./pages/admin/dashboard";
import SkillsPage from "./pages/admin/skills";
import PortfoliosPage from "./pages/admin/portfolios";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        

        <Route
          
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
