import {
  RiCoinFill,
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { AiFillMoneyCollect } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {
  IoBarChartSharp,
  IoPieChartSharp,
  IoStopwatchSharp,
} from "react-icons/io5";
import { MdStackedLineChart } from "react-icons/md";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/dashboard")
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/dashboard">
              <RiDashboardFill />
              Dashboard
            </Link>
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/products")
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/products">
              <RiShoppingBag3Fill />
              Products
            </Link>
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/customers")
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/customers">
              <IoIosPeople />
              Customers
            </Link>
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/transactions")
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/transactions">
              <AiFillMoneyCollect />
              Transactions
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/charts/bar")
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/charts/bar">
              <IoBarChartSharp />
              Bar
            </Link>
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/charts/pie")
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/charts/pie">
              <IoPieChartSharp />
              Pie
            </Link>
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/charts/line")
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/charts/line">
              <MdStackedLineChart />
              Line
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>Apps</h5>
        <ul>
          <li
            style={{
              backgroundColor: location.pathname.includes(
                "/admin/apps/stopwatch"
              )
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/apps/stopwatch">
              <IoStopwatchSharp />
              StopWatch
            </Link>
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/apps/coupon")
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/apps/stopwatch">
              <RiCoupon3Fill />
              Coupon
            </Link>
          </li>
          <li
            style={{
              backgroundColor: location.pathname.includes("/admin/apps/toss")
                ? "rgb(0,255,0,0.2)"
                : "white",
            }}
          >
            <Link to="/admin/apps/toss">
              <RiCoinFill />
              Toss
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
