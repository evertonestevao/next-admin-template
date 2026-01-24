"use client";

import { Key, LogOut, Menu } from "lucide-react";
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

export default function Topbar({
  user,
  onMenuClick,
}: {
  user: User | null;
  onMenuClick: () => void;
}) {
  async function handleLogout() {
    document.cookie = "token=; path=/; max-age=0";
    window.location.href = "/auth/login";
  }

  return (
    <header className="h-14 border-b px-4 flex items-center justify-between bg-background">
      <div className="flex items-center gap-3">
        {/* BOTÃO MENU MOBILE */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-muted "
        >
          <Menu size={20} />
        </button>

        <span className="font-semibold text-sm">Nome do Sistema</span>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
