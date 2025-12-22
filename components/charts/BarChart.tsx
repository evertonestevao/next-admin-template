import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { name: "Produto A", sales: 240 },
  { name: "Produto B", sales: 120 },
  { name: "Produto C", sales: 360 },
  { name: "Produto D", sales: 670 },
  { name: "Produto E", sales: 260 },
];

export default function SalesBarChart() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Vendas por produto</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#f43f5e" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
