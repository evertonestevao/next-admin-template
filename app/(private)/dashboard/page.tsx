"use client";

import { showToast } from "@/lib/toast";
import { Button } from "@/components/ui/button";

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Início</h1>
      <p className="mb-6">Bem-vindo ao dashboard! Aqui é a tela inicial.</p>

      <div className="flex gap-4">
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
  );
}
