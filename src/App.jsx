import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/home/Home";
import Advertisement from "./components/pages/backend/advertisement/Advertisement";
import { StoreProvider } from "./components/store/storeContext";
import Categories from "./components/pages/backend/categories/Categories";
import Clothes from "./components/pages/backend/clothes/Clothes";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/advertisement" element={<Advertisement />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/clothes" element={<Clothes />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
