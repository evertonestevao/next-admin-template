"use client";

import { Button } from "@/components/ui/button";

type Column<T> = {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
};

export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  loading,
  onEdit,
  onDelete,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="p-4 text-sm text-muted-foreground">Carregando...</div>
    );
  }

  if (!data.length) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        Nenhum registro encontrado
      </div>
    );
  }

  return (
    <div className="rounded-lg border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-3 py-2 text-left font-medium"
              >
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete) && <th className="px-3 py-2 w-24">Ações</th>}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t">
              {columns.map((col) => (
                <td key={String(col.key)} className="px-3 py-2">
                  {col.render ? col.render(row) : String(row[col.key])}
                </td>
              ))}

              {(onEdit || onDelete) && (
                <td className="px-3 py-2 flex gap-2">
                  {onEdit && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onEdit(row)}
                    >
                      Editar
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => onDelete(row)}
                    >
                      Excluir
                    </Button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
