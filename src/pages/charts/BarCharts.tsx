import AdminSidebar from "../../component/AdminSidebar";
import { BarChart } from "../../component/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[200, 100, 120, 90, 205, 455, 300]}
            data_2={[100, 50, 60, 45, 100, 230, 150]}
            title_1={"Products"}
            title_2={"Users"}
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}
          />
          <h2>Top Selling Products and Top Customers</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[200, 100, 120, 90, 205, 455, 300, 100, 200, 300, 400, 500]}
            data_2={[]}
            title_1={"Products"}
            title_2=""
            bgColor_1={`hsl(180,40%,50%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Orders Throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
