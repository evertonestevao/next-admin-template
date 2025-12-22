import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="mx-auto max-w-5xl flex  items-center justify-between px-8 py-6 border-b">
        <span className="text-lg font-semibold">Template Admin</span>

        <ThemeToggle />
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-5xl px-8 py-24">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight">
            Esse é um template base para sistemas com painel administrativo
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground">
            Estrutura pronta com autenticação, rotas protegidas, tema claro e
            escuro, layout administrativo e componentes reutilizáveis. Ideal
            para acelerar a criação de novos projetos.
          </p>

          <div className="flex gap-4 pt-4">
            <Button size="lg">Ver demonstração</Button>

            <Button variant="outline" size="lg">
              Documentação
            </Button>
          </div>
        </div>

        {/* Features */}
        <section className="mt-18 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="Next.js + App Router">
            Estrutura moderna com Server Components e melhor performance.
          </Feature>

          <Feature title="Tema Claro / Escuro">
            Alternância de tema com persistência e integração com shadcn/ui.
          </Feature>

          <Feature title="Layout Administrativo">
            Sidebar colapsável, topbar e rotas privadas prontas para uso.
          </Feature>

          <Feature title="Autenticação JWT">
            Login seguro com cookies httpOnly e middleware.
          </Feature>

          <Feature title="Componentes Reutilizáveis">
            Base pensada para copiar, adaptar e escalar projetos rapidamente.
          </Feature>

          <Feature title="Foco em Produtividade">
            Menos tempo em boilerplate, mais tempo resolvendo problema real.
          </Feature>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mx-auto max-w-5xl py-6 text-center text-sm text-muted-foreground">
        Template base • Desenvolvido por{" "}
        <Link
          href="https://www.linkedin.com/in/everton-estevão-78216292"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:underline"
        >
          Everton Estevão
        </Link>{" "}
        para acelerar projetos
      </footer>
    </div>
  );
}

function Feature({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border p-6">
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
