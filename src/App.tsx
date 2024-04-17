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
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));

const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Stopwatch"));
const Toss = lazy(() => import("./pages/apps/Toss"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/transactions" element={<Transaction />} />

        {/* Charts */}
        <Route path="/admin/charts/bar" element={<BarCharts />} />
        <Route path="/admin/charts/pie" element={<PieCharts />} />
        <Route path="/admin/charts/line" element={<LineCharts />} />

        {/* Tools */}

        {/* Management */}
        <Route path="/admin/products/new" element={<NewProduct />} />
        <Route path="/admin/products/:id" element={<ProductManagement />} />
        <Route
          path="/admin/transactions/:id"
          element={<TransactionManagement />}
        />

        {/* Charts */}
        <Route path="/admin/apps/stopwatch" element={<Stopwatch />} />
        <Route path="/admin/apps/coupon" element={<Coupon />} />
        <Route path="/admin/apps/toss" element={<Toss />} />
      </Routes>
    </Router>
  );
};

export default App;
