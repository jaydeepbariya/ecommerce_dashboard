import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../component/AdminSidebar";
import TableHoC from "../component/TableHoC";
import { actions, Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: string;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400";

const arr: DataType[] = [
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 3,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: "690",
    stock: 5,
    action: <Link to="/admin/products/sajasf">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHoC<DataType>(columns, data, "dashboard-product-box", "Products", true),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main>
        <Table />
        <Link to={"/admin/products/new"} className="create-product-btn">
          <FaPlus />
        </Link>
      </main>
    </div>
  );
};

export default Products;
