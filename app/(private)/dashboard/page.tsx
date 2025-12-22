"use client";

import { showToast } from "@/lib/toast";
import { Button } from "@/components/ui/button";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const clientsData = [
  { name: "João Silva", email: "joao@email.com", status: "Ativo" },
  { name: "Maria Souza", email: "maria@email.com", status: "Inativo" },
  { name: "Carlos Pereira", email: "carlos@email.com", status: "Ativo" },
  { name: "Ana Oliveira", email: "ana@email.com", status: "Ativo" },
];

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Cabeçalho e toasts */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Início</h1>
        <p className="mb-4 text-muted-foreground">
          Bem-vindo ao dashboard! Aqui é a tela inicial.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button
            variant="default"
            className="bg-green-500 hover:bg-green-600 text-white"
            onClick={() =>
              showToast.success("Sucesso! Operação realizada com sucesso.")
            }
          >
            Success Toast
          </Button>

          <Button
            variant="default"
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={() => showToast.error("Erro! Algo deu errado.")}
          >
            Error Toast
          </Button>

          <Button
            variant="default"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() =>
              showToast.info("Info! Esta é uma mensagem informativa.")
            }
          >
            Info Toast
          </Button>
        </div>
      </div>

      {/* Tabela de exemplo */}
      <div className="overflow-x-auto rounded-lg border border-muted-foreground/10 bg-background shadow-sm">
        <div className="px-4 py-2 border-b border-muted-foreground/20">
          <h2 className="text-lg font-semibold">Clientes Recentes</h2>
        </div>

        <Table className="min-w-full">
          <TableHeader className="bg-muted-foreground/5">
            <TableRow>
              <TableHead className="text-left">Nome</TableHead>
              <TableHead className="text-left">E-mail</TableHead>
              <TableHead className="text-left">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clientsData.map((client, idx) => (
              <TableRow
                key={idx}
                className="hover:bg-muted-foreground/10 transition-colors"
              >
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      client.status === "Ativo"
                        ? "bg-green-100 text-green-800"
                        : client.status === "Inativo"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {client.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        <BarChart />
        <PieChart />
        <LineChart />
      </div>
    </div>
  );
}
