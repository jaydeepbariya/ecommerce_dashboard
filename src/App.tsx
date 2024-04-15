import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Customers = lazy(() => import("./pages/Customers"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Products = lazy(() => import("./pages/Products"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/transactions" element={<Transaction />} />

        {/* Charts */}
        <Route path="/admin/chart/bar" element={<BarCharts />} />

        {/* Tools */}

        {/* Management */}
        <Route path="/admin/products/new" element={<NewProduct />} />
        <Route path="/admin/products/:id" element={<ProductManagement />} />
        <Route
          path="/admin/transactions/:id"
          element={<TransactionManagement />}
        />
      </Routes>
    </Router>
  );
};

export default App;
