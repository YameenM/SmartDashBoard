// ✅ ChartWidget.jsx (Updated)
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const ChartWidget = ({ chartType = "line", chartData = [] }) => {
  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow-md dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-4 text-orange-500 dark:text-orange-400">
        Analytics Chart ({chartType.toUpperCase()})
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === "line" && (
          <LineChart data={chartData}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Profit" stroke="#8884d8" />
            <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
          </LineChart>
        )}

        {chartType === "bar" && (
          <BarChart data={chartData}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Profit" fill="#8884d8" />
            <Bar dataKey="Revenue" fill="#82ca9d" />
          </BarChart>
        )}

        {chartType === "pie" && (
          <PieChart>
            <Pie
              data={chartData}
              dataKey="Profit"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        )}

        {chartType === "doughnut" && (
          <PieChart>
            <Pie
              data={chartData}
              dataKey="Profit"
              nameKey="label"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        )}

        {chartType === "radar" && (
          <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="80%">
            <PolarGrid />
            <PolarAngleAxis dataKey="label" />
            <PolarRadiusAxis />
            <Radar
              name="Profit"
              dataKey="Profit"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        )}

        {chartType === "heatmap" && (
          <div className="text-center text-gray-500 dark:text-gray-300">
            Heatmap visualization coming soon / under construction.
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartWidget;