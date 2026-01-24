import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowUp, ArrowDown, Icon, Info } from "lucide-react";
import { LucideIcon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type KPIProps = {
  title: string;
  value: string | number;
  description?: string;
  info?: string;
  trend?: "up" | "down";
  icon?: LucideIcon;
};

export default function KPI({
  title,
  value,
  description,
  info,
  trend,
  icon: Icon,
}: KPIProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
            {title}
          </CardTitle>
          {info && (
            <HoverCard openDelay={10} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground" />
              </HoverCardTrigger>
              <HoverCardContent className="flex  flex-col gap-0.5">
                <div>{info}</div>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>

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
