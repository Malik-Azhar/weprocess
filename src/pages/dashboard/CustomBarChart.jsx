import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";

const data = [
  { name: "January", value: 455, fill: "#0F0F0F" },
  { name: "February", value: 409, fill: "#F81E7B", label: "-10%" },
  { name: "March", value: 222, fill: "url(#patternStripes)", bold: true },
];

const CustomLabel = ({ x, y, width, value }) => (
  <text x={x + width / 2} y={y - 10} textAnchor="middle" fill="#000" fontWeight="bold">
    {value}
  </text>
);

const PercentageLabel = ({ x, y, width, height, value }) => {
  if (!value) return null;
  return (
    <foreignObject x={x + width / 2 - 20} y={y - 30} width={40} height={20}>
      <div
        style={{
          backgroundColor: "#FEE2E2",
          color: "#DC2626",
          borderRadius: "12px",
          fontSize: "10px",
          textAlign: "center",
          padding: "2px 4px"
        }}
      >
        {value}
      </div>
    </foreignObject>
  );
};

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width={400} height={230}>
      <BarChart 
        data={data}
        barCategoryGap={0} 
        barGap={0} 
      >
        <defs>
          {/* Pattern for last bar */}
          <pattern id="patternStripes" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="#D9D6F6" />
            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#BDB4ED" strokeWidth="1" />
          </pattern>
        </defs>
        <XAxis dataKey="name" tickFormatter={(val) => val} />
        <YAxis hide />
        <Tooltip />
        <Bar
          dataKey="value"
          radius={[10, 10, 0, 0]}
          isAnimationActive={true}
        >
          <LabelList dataKey="value" content={CustomLabel} />
          <LabelList dataKey="label" content={PercentageLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
