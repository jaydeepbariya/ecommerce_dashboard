import AdminSidebar from "../../component/AdminSidebar";
import { LineChart } from "../../component/Charts";
import { months } from "../../assets/data.json";

const LineCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[10, 12, 14, 9, 11, 45, 23, 11, 18, 13, 14, 43]}
            backgroundColor={`hsl(223,60%,40%)`}
            borderColor={`hsl(134, 50%, 60%)`}
            label="Users"
            labels={months}
          />
          <h2>Active Users</h2>
        </section>
        <section>
          <LineChart
            data={[10, 12, 14, 9, 11, 45, 23, 11, 18, 13, 14, 43]}
            backgroundColor={`hsl(223,60%,40%)`}
            borderColor={`hsl(134, 50%, 60%)`}
            label="Products"
            labels={months}
          />
          <h2>Total Products</h2>
        </section>
        <section>
          <LineChart
            data={[10, 12, 14, 9, 11, 45, 23, 11, 18, 13, 14, 43]}
            backgroundColor={`hsl(123,50%,30%)`}
            borderColor={`hsl(234, 40%, 50%)`}
            label="Revenue"
            labels={months}
          />
          <h2>Total Revenue</h2>
        </section>
        <section>
          <LineChart
            data={[10, 12, 14, 9, 11, 45, 23, 11, 18, 13, 14, 43]}
            backgroundColor={`hsl(123,50%,30%)`}
            borderColor={`hsl(234, 40%, 50%)`}
            label="Users"
            labels={months}
          />
          <h2>Total Revenue</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
