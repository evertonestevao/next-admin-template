import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 200 },
];

export default function LineChart() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Vendas por mês</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#6366f1"
              strokeWidth={2}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
