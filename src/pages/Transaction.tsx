import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../component/AdminSidebar";
import { Column } from "react-table";
import TableHoC from "../component/TableHoC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  action: ReactElement;
  status: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "John Doe",
    amount: 300,
    discount: 50,
    quantity: 2,
    action: <Link to={"/admin/transactions/sdgdh"}>Manage</Link>,
    status: <span className="green">Shipped</span>,
  },
  {
    user: "John Doe",
    amount: 300,
    discount: 50,
    quantity: 2,
    action: <Link to={"/admin/transactions/sdgdh"}>Manage</Link>,
    status: <span className="yellow">In Progress</span>,
  },
  {
    user: "John Doe",
    amount: 300,
    discount: 50,
    quantity: 2,
    action: <Link to={"/admin/transactions/sdgdh"}>Manage</Link>,
    status: <span className="red">Processing</span>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHoC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
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

export default Transaction;
