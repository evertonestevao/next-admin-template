"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { List, Table2, Columns3 } from "lucide-react";

type ViewMode = "list" | "table" | "kanban";

interface ViewSwitcherProps {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}

export function ViewSwitcher({ value, onChange }: ViewSwitcherProps) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(v) => v && onChange(v as ViewMode)}
      className="justify-end "
    >
      <ToggleGroupItem value="list" aria-label="Lista">
        <List className="h-4 w-4" />
      </ToggleGroupItem>

      <ToggleGroupItem value="table" aria-label="Tabela">
        <Table2 className="h-4 w-4" />
      </ToggleGroupItem>

      <ToggleGroupItem value="kanban" aria-label="Kanban">
        <Columns3 className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
