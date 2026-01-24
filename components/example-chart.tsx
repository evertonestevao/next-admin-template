"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { DashboardCardHeader } from "./DashboardCardHeader";
import { DashboardCardFooter } from "./DashboardCardFooter";

const chartData = [
  { month: "Janeiro", desktop: 186, mobile: 80 },
  { month: "Fevereiro", desktop: 305, mobile: 200 },
  { month: "Março", desktop: 237, mobile: 120 },
  { month: "Abril", desktop: 73, mobile: 190 },
  { month: "Maio", desktop: 209, mobile: 130 },
  { month: "Junho", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "#2563eb" },
  mobile: { label: "Mobile", color: "#60a5fa" },
} satisfies ChartConfig;

const total = chartData.reduce(
  (acc, item) => acc + item.desktop + item.mobile,
  0,
);

export function ChartExample() {
  return (
    <div className="h-full w-full rounded-lg border bg-background p-4 shadow-sm flex flex-col">
      <DashboardCardHeader
        title="Total de acessos"
        subtitle="Últimos 6 meses"
      />

      {/* Gráfico ocupa o resto */}
      <ChartContainer config={chartConfig} className="flex-1 w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
      <DashboardCardFooter text="Total de acessos" trend="up" />
    </div>
  );
}
