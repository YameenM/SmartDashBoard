import React, { useEffect, useState } from "react";
import SummaryCard from "../components/widgets/SummaryCard";
import ChartWidget from "../components/widgets/ChartWidget";

// ✅ Mock Chart Data
const chartData = [
  { label: "Jan", Profit: 2000, Revenue: 3000 },
  { label: "Feb", Profit: 1800, Revenue: 2900 },
  { label: "Mar", Profit: 2500, Revenue: 3200 },
  { label: "Apr", Profit: 2200, Revenue: 3100 },
  { label: "May", Profit: 2700, Revenue: 3400 },
  { label: "Jun", Profit: 2400, Revenue: 3300 },
  { label: "Jul", Profit: 2600, Revenue: 3600 },
  { label: "Aug", Profit: 2800, Revenue: 3700 },
  { label: "Sep", Profit: 3000, Revenue: 3900 },
  { label: "Oct", Profit: 2900, Revenue: 4000 },
  { label: "Nov", Profit: 3100, Revenue: 4200 },
  { label: "Dec", Profit: 3300, Revenue: 4500 },
];

const Dashboard = () => {
  const [summaryData, setSummaryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [chartType, setChartType] = useState("line");

  const fetchSummaryData = async () => {
    try {
      const response = await fetch("/mockData.json");
      const data = await response.json();
      setSummaryData(data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error loading summary data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummaryData();
    const interval = setInterval(fetchSummaryData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="py-16 px-4 bg-gray-200 dark:bg-gray-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-orange-500 dark:text-orange">
          $martDashboard Preview
        </h2>

        {lastUpdated && (
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6">
            🔄 Auto-refreshed | Last Updated: {lastUpdated.toLocaleTimeString()}
          </p>
        )}

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {summaryData.map((card, index) => {
            const isCurrency = !["Total Users", "User Count", "Active Users"].includes(card.title);
            return (
              <SummaryCard
                key={index}
                title={card.title}
                amount={card.amount}
                percentage={card.percentage}
                breakdown={card.breakdown}
                sparklineData={card.sparklineData}
                lastUpdated={lastUpdated}
                target={card.target}
                isCurrency={isCurrency}
              />
            );
          })}
        </div>

        {/* Chart Type Dropdown */}
        <div className="flex justify-end mb-4">
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
            className="border px-1 py-1 rounded-md text-white bg-orange-500"
          >
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="pie">Pie</option>
            <option value="doughnut">Doughnut</option>
            <option value="radar">Radar</option>
            <option value="heatmap">Heatmap</option>
          </select>
        </div>

        {/* Chart Widget */}
        <ChartWidget chartType={chartType} chartData={chartData} />
      </div>
    </section>
  );
};

export default Dashboard;
