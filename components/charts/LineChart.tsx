import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function LineChart() {
  const data = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 300 },
    { month: "Mar", users: 500 },
  ];

  return (
    <RechartsLineChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={2} />
    </RechartsLineChart>
  );
}
