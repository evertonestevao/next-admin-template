"use client";

import { useEffect, useState } from "react";
import Filters, { FiltersValue } from "@/components/filters";
import { DataTable } from "@/components/data-table";
import ViewSwitcher from "@/components/view-switcher";
import { Button } from "@/components/ui/button";

type ExampleItem = {
  id: string;
  name: string;
  category: string;
  status: "active" | "inactive";
};

export default function ExampleListPage() {
  const [data, setData] = useState<ExampleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FiltersValue>({});
  const [view, setView] = useState<"table" | "cards">("table");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const all: ExampleItem[] = [
        { id: "1", name: "Item A", category: "Geral", status: "active" },
        { id: "2", name: "Item B", category: "Serviço", status: "inactive" },
        { id: "3", name: "Item C", category: "Produto", status: "active" },
      ];

      let filtered = all;

      if (filters.search) {
        filtered = filtered.filter((i) =>
          i.name.toLowerCase().includes(filters.search!.toLowerCase()),
        );
      }

      if (filters.status && filters.status !== "all") {
        filtered = filtered.filter((i) => i.status === filters.status);
      }

      if (filters.category && filters.category !== "all") {
        filtered = filtered.filter((i) => i.category === filters.category);
      }

      setData(filtered);
      setLoading(false);
    }, 400);
  }, [filters]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Tela de Exemplo</h1>
        <Button>Novo registro</Button>
      </div>

      {/* Barra de filtros + view */}
      <div className="flex items-center justify-between gap-3">
        <Filters
          statusOptions={[
            { label: "Ativo", value: "active" },
            { label: "Inativo", value: "inactive" },
          ]}
          categoryOptions={[
            { label: "Produto", value: "Produto" },
            { label: "Serviço", value: "Serviço" },
            { label: "Geral", value: "Geral" },
          ]}
          onChange={(v) => setFilters(v)}
        />

        <ViewSwitcher value={view} onChange={setView} />
      </div>

      {/* Conteúdo */}
      {view === "table" ? (
        <DataTable<ExampleItem>
          loading={loading}
          data={data}
          columns={[
            { key: "name", label: "Nome" },
            { key: "category", label: "Categoria" },
            {
              key: "status",
              label: "Status",
              render: (row) => (row.status === "active" ? "Ativo" : "Inativo"),
            },
          ]}
          onEdit={(row) => console.log("editar", row)}
          onDelete={(row) => console.log("excluir", row)}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id} className="rounded-lg border p-4">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-muted-foreground">
                {item.category}
              </div>
              <div className="mt-2 text-sm">
                {item.status === "active" ? "Ativo" : "Inativo"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
