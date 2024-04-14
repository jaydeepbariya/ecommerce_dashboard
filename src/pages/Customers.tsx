import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../component/AdminSidebar";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import TableHoC from "../component/TableHoC";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avtar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const img =
  "https://images.pexels.com/avatars/2529148/pexels-avatar-2529148.jpeg?auto=compress&cs=tinysrgb&w=400";

const arr: DataType[] = [
  {
    avatar: (
      <img
        src={img}
        alt="avatar"
        style={{ borderRadius: "50%" }}
        width={50}
        height={50}
      />
    ),
    name: "John Done",
    email: "john@email.com",
    gender: "Male",
    role: "Customer",
    action: <Link to={"/admin/customers/sfgdh"}>Manage</Link>,
  },
  {
    avatar: (<img src={img} alt="avatar" />),
    name: "John Done",
    email: "john@email.com",
    gender: "Male",
    role: "Customer",
    action: <Link to={"/admin/customers/sfgdh"}>Manage</Link>,
  },
  {
    avatar: <img src={img} alt="avatar" />,
    name: "John Done",
    email: "john@email.com",
    gender: "Male",
    role: "Customer",
    action: <Link to={"/admin/customers/sfgdh"}>Manage</Link>,
  },
  {
    avatar: <img src={img} alt="avatar" />,
    name: "John Done",
    email: "john@email.com",
    gender: "Male",
    role: "Customer",
    action: <Link to={"/admin/customers/sfgdh"}>Manage</Link>,
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHoC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
      true
    ),
    []
  );

  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <main>
        <Table />
      </main>
    </div>
  );
};

export default Customers;
