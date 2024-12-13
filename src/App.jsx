import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/home/Home";
import { StoreProvider } from "./components/store/storeContext";
import Clothes from "./components/pages/backend/clothes/Clothes";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";
import ProductInfo from "./components/pages/frontend/product-info/ProductInfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Category from "./components/pages/backend/category/Category";
import Banner from "./components/pages/backend/banner/Banner";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/product/:slug" element={<ProductInfo />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/banner" element={<Banner />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/clothes" element={<Clothes />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
