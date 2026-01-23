"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("E-mail ou senha inválidos");
        return;
      }

      const data = await res.json();
      document.cookie = `token=${data.token}; path=/; max-age=86400`;
      router.push("/dashboard");
    } catch {
      setError("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center bg-background px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6 rounded-xl  p-8"
        >
          <div className="text-center space-y-3">
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary text-5xl
             transition-all duration-300 ease-out hover:scale-110 hover:bg-primary/10"
            >
              ⬢
            </div>

            <div>
              <h2 className="text-2xl font-bold">Entrar na conta</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Use seu e-mail e senha para acessar
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                required
                className="pl-9"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
              />
            </div>
          </div>

          {/* Senha */}
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPass ? "text" : "password"}
                required
                className="pl-9 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={() => router.push("/esqueci-senha")}
            >
              Esqueci a senha
            </button>

            <button
              type="button"
              className="text-muted-foreground hover:underline"
              onClick={() => router.push("/cadastro")}
            >
              Criar conta
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-500/10 p-2 rounded">
              {error}
            </p>
          )}

          <Button className="w-full" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </div>
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-primary/90 to-primary text-primary-foreground">
        <div>
          <h1 className="text-3xl font-bold text-white">Nome do Sistema</h1>
          <p className="mt-2 text-sm  text-white">
            Gestão simples, rápida e segura.
          </p>
        </div>

        <p className="text-sm text-white">
          © {new Date().getFullYear()} Empresa
        </p>
      </div>
    </div>
  );
}
