import { ChevronDown, Dot } from "lucide-react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardCard from "./DashboardCard";
import DashboardAccordion from "./DashboardAccordion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { clothes } from "../clothes-data";

const Dashboard = () => {
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="DashBoard" subtitle="Welcome to Zenerobe" />
            <div className="p-8">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="grid grid-cols-4 gap-5">
                    <DashboardCard
                      title="Tees & Tanks"
                      filterby="Tees & Tanks"
                    />
                    <DashboardCard title="Pants" filterby="Pants" />
                    <DashboardCard title="Sweaters" filterby="Sweaters" />
                  </div>
                  <div className="chart mt-10">
                    <h3>Clothes Charts</h3>
                    <BarChart
                      width={1200}
                      height={400}
                      data={clothes}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="clothes_title" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="clothes_price"
                        fill="#8884d8"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                      />
                    </BarChart>
                  </div>
                </div>

                <div className="sidebar overflow-auto custom-scroll h-[calc(100vh-200px)]">
                  <DashboardAccordion
                    title="Tees & Tanks"
                    filterby="Tees & Tanks"
                  />
                  <DashboardAccordion title="Pants" filterby="Pants" />
                  <DashboardAccordion title="Sweaters" filterby="Sweaters" />
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
