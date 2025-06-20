// DoughnutChart.jsx
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "On Hold", value: 50, color: "#6366F1" },
  { name: "In Progress", value: 15, color: "#F472B6" },
  { name: "Completed", value: 35, color: "#8B5CF6" },
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DoughnutChart = () => {
  return (
    <div className="w-full h-[250px] flex items-center">
      <ResponsiveContainer width="60%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            labelLine={false}
            label={renderCustomizedLabel}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="ml-6">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center mb-2">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-700">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
