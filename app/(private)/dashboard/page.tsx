"use client";

import { showToast } from "@/lib/toast";
import { Button } from "@/components/ui/button";
import KPI from "@/components/kpi";
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
import { Badge } from "@/components/ui/badge";
import { DollarSign, ShoppingCart, Users } from "lucide-react";
import TitleSection from "@/components/titlepage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChartExample } from "@/components/example-chart";
import { ChartAreaStacked } from "@/components/chart-area-stacked";
import { ChartPieDonutText } from "@/components/chart-pie-donut-text";

const clientsData = [
  {
    name: "João Silva",
    email: "joao@email.com",
    status: "Ativo",
    avatarUrl: "",
  },
  {
    name: "Maria Souza",
    email: "maria@email.com",
    status: "Inativo",
    avatarUrl: "",
  },
  {
    name: "Carlos Pereira",
    email: "carlos@email.com",
    status: "Cancelado",
    avatarUrl: "",
  },
  {
    name: "Ana Oliveira",
    email: "ana@email.com",
    status: "Ativo",
    avatarUrl: "",
  },
];

export default function DashboardHome() {
  function getBadgeVariant(status: string) {
    switch (status) {
      case "Ativo":
        return "default"; // verde
      case "Inativo":
        return "destructive"; // vermelho
      default:
        return "secondary"; // amarelo/laranja ou outro status
    }
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho e toasts */}
      <div>
        <TitleSection
          title="Início"
          description="Bem-vindo ao dashboard! Aqui é a tela inicial."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <KPI
            title="Clientes"
            value={1234}
            trend="up"
            description="Última semana"
            info="Novos clientes nos ultimos 7 dias"
            icon={Users}
          />

          <KPI
            title="Vendas"
            value="R$ 56.780,98"
            trend="down"
            description="Comparado com mês passado"
            icon={DollarSign}
          />

          <KPI
            title="Pedidos"
            value={342}
            trend="up"
            description="Últimos 30 dias"
            icon={ShoppingCart}
          />
        </div>
      </div>

      <div className="flex gap-4 flex-wrap mt-4">
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

      <div className="  overflow-x-auto rounded-lg border border-muted-foreground/10 bg-background shadow-sm">
        <div className="px-4 py-2 border-b border-muted-foreground/20">
          <h2 className="text-lg font-semibold">Clientes Recentes</h2>
        </div>

        <Table className="min-w-full">
          <TableHeader className="bg-muted-foreground/5">
            <TableRow>
              <TableHead className="text-left">Nome</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clientsData.map((client, idx) => (
              <TableRow
                key={idx}
                className="hover:bg-muted-foreground/10 transition-colors"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={client.avatarUrl} alt={client.name} />
                      <AvatarFallback>
                        {client.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col leading-tight">
                      <span className="font-medium">{client.name}</span>
                      <span
                        className="text-sm text-muted-foreground cursor-pointer hover:underline"
                        onClick={() => {
                          navigator.clipboard.writeText(client.email);
                          showToast.info("Copiado para área de transferência");
                        }}
                        title="Clique para copiar"
                      >
                        {client.email}
                      </span>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="text-right">
                  <Badge
                    className={
                      client.status === "Ativo"
                        ? "bg-green-500 text-white"
                        : client.status === "Inativo"
                          ? "bg-red-500 text-white"
                          : "bg-gray-500 text-white"
                    }
                  >
                    {client.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        <ChartExample />
        <ChartPieDonutText />
        <ChartAreaStacked />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        <div className="h-96">
          <BarChart />
        </div>
        <div className="h-96">
          <PieChart />
        </div>
        <div className="h-96">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
