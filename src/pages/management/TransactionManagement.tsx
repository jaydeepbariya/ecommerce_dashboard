import { useState } from "react";
import AdminSidebar from "../../component/AdminSidebar";
import { OrderItemType, OrderType } from "../../styles/types";
import { Link } from "react-router-dom";

const img =
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/379437/12/sv01/fnd/IND/fmt/png/Skyrocket-Lite-Unisex-Running-Shoes";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "addgdgfgn",
    quantity: 4,
    price: 2000,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Jaydeep Bariya",
    address: "72 Gaytrinagar Jarod",
    city: "Jarod",
    state: "Gujarat",
    country: "India",
    pinCode: 123123,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 3000,
    orderItems,
    _id: "dfehmgfjnhgk",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
        <section
          style={{
            padding: "2rem"
          }}
          >
          <h2>Order Items</h2>
          {order.orderItems.map((orderItem) => (
            <ProductCard
              name={orderItem.name}
              photo={orderItem.photo}
              price={orderItem.price}
              quantity={orderItem.quantity}
              _id={orderItem._id}
            />
          ))}
        </section>

        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>Status: </p>
          <span
            className={
              status === "Delivered"
                ? "purple"
                : status === "Shipped"
                ? "green"
                : "red"
            }
          >
            {status}
          </span>

          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/products/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}{" "}
    </span>
  </div>
);

export default TransactionManagement;
