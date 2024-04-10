import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { AiFillMoneyCollect } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h5>Logo.</h5>
      <div>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/admin/dashboard">
              <RiDashboardFill />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/product">
              <RiShoppingBag3Fill />
              Products
            </Link>
          </li>
          <li>
            <Link to="/admin/customer">
              <IoIosPeople />
              Customers
            </Link>
          </li>
          <li>
            <Link to="/admin/transactions">
              <AiFillMoneyCollect />
              Transactions
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
