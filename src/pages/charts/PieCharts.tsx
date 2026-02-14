import AdminSidebar from "../../component/AdminSidebar";
import { DoughnutChart, PieChart } from "../../component/Charts";

const PieCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(110,80%,80%)`,
                `hsl(110,50%,80%)`,
                `hsl(110,40%,50%)`,
              ]}
            />
          </div>
          <h2>Product Categories Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={["In Stock", "Out of Stock"]}
              data={[40, 20]}
              backgroundColor={["hsl(269,80%,40%)", "rgb(53,162,255)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[40, 20, 5, 20, 11]}
              backgroundColor={[
                "hsl(269,80%,40%)",
                "rgb(19,162,255)",
                "rgb(69,162,255)",
                "rgb(300,162,255)",
                "rgb(53,162,255)",
              ]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>

        <section>
          <div>
            <PieChart
              labels={["Teen", "Adult", "Older"]}
              data={[20, 60, 30]}
              backgroundColor={[
                `hsl(34,80%,80%)`,
                `hsl(64,50%,80%)`,
                `hsl(98,40%,50%)`,
              ]}
            />
          </div>
          <h2>Customer Age Group</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={["hsl(335,100%,38%)", "rgb(44, 98%, 50%)"]}
              legends={false}
              offset={[0, 80]}
            />
          </div>
        </section>
      
      </main>
    </div>
  );
};

export default PieCharts;
