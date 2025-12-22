import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { name: "Produto A", value: 240 },
  { name: "Produto B", value: 120 },
  { name: "Produto C", value: 360 },
];

const COLORS = ["#6366f1", "#f43f5e", "#fbbf24"];

export default function ProductPieChart() {
  return (
    <Card className="w-full h-80">
      <CardHeader>
        <CardTitle>Vendas por produto</CardTitle>
      </CardHeader>
      <CardContent className="h-full p-4">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </RechartsPieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
