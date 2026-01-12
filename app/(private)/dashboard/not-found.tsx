"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardNotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>

      <p className="text-muted-foreground">
        A página que você tentou acessar não existe.
      </p>

      <Button asChild>
        <Link href="/dashboard">Voltar para o dashboard</Link>
      </Button>
    </div>
  );
}
