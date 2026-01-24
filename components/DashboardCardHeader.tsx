type DashboardCardHeaderProps = {
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
};

export function DashboardCardHeader({
  title,
  subtitle,
  rightSlot,
}: DashboardCardHeaderProps) {
  return (
    <div className="mb-4 flex items-start justify-between">
      <div>
        <p className="text-sm font-medium leading-none">{title}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>

      {rightSlot && <div className="ml-2">{rightSlot}</div>}
    </div>
  );
}
