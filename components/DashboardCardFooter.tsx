import { TrendingUp, TrendingDown } from "lucide-react";

type DashboardCardFooterProps = {
  text: string;
  period?: string;
  trend?: "up" | "down";
};

export function DashboardCardFooter({
  text,
  period,
  trend,
}: DashboardCardFooterProps) {
  const Icon = trend === "up" ? TrendingUp : TrendingDown;

  return (
    <div className="mt-3 text-sm">
      <div className="flex items-center gap-2 font-medium">
        {text}
        {trend && <Icon className="h-4 w-4" />}
      </div>

      {period && (
        <div className="text-muted-foreground leading-none">{period}</div>
      )}
    </div>
  );
}
