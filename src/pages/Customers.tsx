import React from "react";
import AdminSidebar from "../component/AdminSidebar";

const Customers = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <main>Main Content of Dashboard</main>
    </div>
  );
};

export default Customers;
