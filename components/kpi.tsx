import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

type KPIProps = {
  title: string;
  value: string | number;
  description?: string;
  trend?: "up" | "down"; // indica se a métrica subiu ou caiu
};

export default function KPI({ title, value, description, trend }: KPIProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="text-2xl font-bold">{value}</span>
        {trend === "up" && <ArrowUp className="text-green-500" />}
        {trend === "down" && <ArrowDown className="text-red-500" />}
      </CardContent>
    </Card>
  );
}
