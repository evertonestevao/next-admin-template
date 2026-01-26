"use client";

import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

type ViewMode = "table" | "cards";

type Props = {
  value: ViewMode;
  onChange: (v: ViewMode) => void;
};

export default function ViewSwitcher({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-1 rounded-md border p-1">
      <Button
        size="icon"
        variant={value === "table" ? "secondary" : "ghost"}
        onClick={() => onChange("table")}
      >
        <List className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant={value === "cards" ? "secondary" : "ghost"}
        onClick={() => onChange("cards")}
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
    </div>
  );
}
