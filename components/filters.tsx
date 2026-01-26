"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export type FiltersValue = {
  search?: string;
  status?: string;
  category?: string;
};

type Option = {
  label: string;
  value: string;
};

type FiltersProps = {
  statusOptions?: Option[];
  categoryOptions?: Option[];
  onChange?: (values: FiltersValue) => void;
};

export default function Filters({
  statusOptions = [],
  categoryOptions = [],
  onChange,
}: FiltersProps) {
  const router = useRouter();
  const params = useSearchParams();

  const [values, setValues] = useState<FiltersValue>({
    search: "",
    status: "all",
    category: "all",
  });

  // carrega da URL
  useEffect(() => {
    const v: FiltersValue = {
      search: params.get("search") || "",
      status: params.get("status") || "all",
      category: params.get("category") || "all",
    };

    setValues(v);
    onChange?.(v);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function update(newValues: Partial<FiltersValue>) {
    const updated = { ...values, ...newValues };
    setValues(updated);
    onChange?.(updated);

    const q = new URLSearchParams();

    if (updated.search) q.set("search", updated.search);
    if (updated.status && updated.status !== "all")
      q.set("status", updated.status);
    if (updated.category && updated.category !== "all")
      q.set("category", updated.category);

    router.replace(`?${q.toString()}`);
  }

  function clearFilters() {
    const cleared = { search: "", status: "all", category: "all" };
    setValues(cleared);
    onChange?.(cleared);
    router.replace(`?`);
  }

  // 🎯 layout premium
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Input
        placeholder="Buscar..."
        value={values.search}
        onChange={(e) => update({ search: e.target.value })}
        className="h-9 w-56"
      />

      {statusOptions.length > 0 && (
        <Select
          value={values.status}
          onValueChange={(v) => update({ status: v })}
        >
          <SelectTrigger className="h-9 w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {statusOptions.map((op) => (
              <SelectItem key={op.value} value={op.value}>
                {op.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {categoryOptions.length > 0 && (
        <Select
          value={values.category}
          onValueChange={(v) => update({ category: v })}
        >
          <SelectTrigger className="h-9 w-44">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {categoryOptions.map((op) => (
              <SelectItem key={op.value} value={op.value}>
                {op.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      <Button
        variant="ghost"
        size="sm"
        onClick={clearFilters}
        className="text-muted-foreground hover:text-foreground"
      >
        Limpar
      </Button>
    </div>
  );
}
