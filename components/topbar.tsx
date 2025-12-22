"use client";

import { Key, LogOut, User as UserIcon } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type User = {
  name: string;
};

export default function Topbar({ user }: { user: User | null }) {
  async function handleLogout() {
    // limpa cookie ou chama API de logout
    document.cookie = "token=; path=/; max-age=0";
    window.location.href = "/auth/login";
  }

  return (
    <header className="h-14 border-b px-6 flex items-center justify-between bg-background">
      <span className="font-semibold text-sm">Nome do Sistema</span>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer">
              {/* <UserIcon size={16} /> */}
              <span className="text-sm text-muted-foreground">
                Olá, {user.name}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={handleLogout}
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                <Key size={16} />
                Alterar senha
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                <LogOut size={16} />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
