import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../component/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../component/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../component/DashboardTable";

const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search" />
          <FaRegBell />
          <img src={userImg} alt="profile pic" loading="lazy" />
        </div>
        <section className="widget-container">
          <WidgetItem
            percent={30}
            amount={true}
            value={32000}
            heading="Revenue"
            color="rgb(0,198,42)"
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={35000}
            heading="Products"
            color="rgb(0,196,231)"
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={34000}
            heading="Customers"
            color="rgb(0,100,231)"
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={34000}
            heading="Transactions"
            color="rgb(100,76,201)"
          />
        </section>

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_1={[300, 144, 133, 655, 237, 755, 190]}
              data_2={[200, 244, 133, 566, 127, 555, 170]}
              title_1="Revenue"
              title_2="Transactions"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>

          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((categoryData, index) => (
                <CategoryItem
                  heading={categoryData.heading}
                  value={categoryData.value}
                  color={`hsl(${categoryData.value * 4},${
                    categoryData.value
                  }%,50%)`}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340, 82%, 56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          {/* Table */}
          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemsProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: number;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemsProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>

    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
      ${color} ${(Math.abs(percent) / 100) * 360}deg,
      rgb(255,255,255) 0
    )`,
      }}
    >
      <span color={color}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
