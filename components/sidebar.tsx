"use client";

import { useState } from "react";
import {
  Home,
  Users,
  Menu,
  X,
  User,
  Key,
  LogOut,
  ChevronDown,
  Package,
  Settings,
  FileText,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

/* ================== TYPES ================== */

type SubItem = {
  label: string;
  href: string;
};

type MenuGroup =
  | {
      type: "link";
      label: string;
      href: string;
      icon: React.ElementType;
    }
  | {
      type: "submenu";
      label: string;
      icon: React.ElementType;
      items: SubItem[];
    };

type MenuSection = {
  title: string;
  items: MenuGroup[];
};

/* ================== MENU ================== */

const menuSections: MenuSection[] = [
  {
    title: "Geral",
    items: [
      { type: "link", label: "Dashboard", href: "/dashboard", icon: Home },
      {
        type: "submenu",
        label: "Clientes",
        icon: Users,
        items: [
          { label: "Lista de clientes", href: "/dashboard/clientes" },
          { label: "Novo cliente", href: "/dashboard/clientes/novo" },
        ],
      },
    ],
  },
  {
    title: "Vendas",
    items: [
      {
        type: "submenu",
        label: "Pedidos",
        icon: Package,
        items: [
          { label: "Todos pedidos", href: "/dashboard/pedidos" },
          { label: "Pendentes", href: "/dashboard/pedidos/pendentes" },
          { label: "Cancelados", href: "/dashboard/pedidos/cancelados" },
        ],
      },
      {
        type: "link",
        label: "Relatórios",
        href: "/dashboard/relatorios",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Sistema",
    items: [
      {
        type: "link",
        label: "Documentos",
        href: "/dashboard/docs",
        icon: FileText,
      },
      {
        type: "link",
        label: "Configurações",
        href: "/dashboard/config",
        icon: Settings,
      },
    ],
  },
];

/* ================== USER ================== */

const user = {
  name: "Admin Teste",
  email: "admin@teste.com",
};

/* ================== COMPONENT ================== */

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  function handleLogout() {
    document.cookie = "token=; path=/; max-age=0";
    window.location.href = "/auth/login";
  }

  /* ============ RENDER MENU ============ */

  function renderMenu(closeOnClick = false) {
    return (
      <div className="space-y-4">
        {menuSections.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <p className="px-3 mb-1 text-xs font-semibold text-muted-foreground uppercase">
                {section.title}
              </p>
            )}

            <div className="space-y-1">
              {section.items.map((item) => {
                /* ---------- LINK ---------- */
                if (item.type === "link") {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => closeOnClick && setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded px-3 py-2 text-sm transition-colors
                        ${isActive ? "bg-muted font-medium" : "hover:bg-muted"}`}
                    >
                      <Icon size={18} />
                      {!collapsed && <span>{item.label}</span>}
                    </Link>
                  );
                }

                /* ---------- SUBMENU ---------- */
                const Icon = item.icon;
                const isAnyActive = item.items.some((i) => pathname === i.href);

                return (
                  <Collapsible key={item.label} defaultOpen={isAnyActive}>
                    <CollapsibleTrigger asChild>
                      <button
                        className={`w-full flex items-center justify-between rounded px-3 py-2 text-sm transition-colors
                          ${isAnyActive ? "bg-muted font-medium" : "hover:bg-muted"}`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} />
                          {!collapsed && <span>{item.label}</span>}
                        </div>

                        {!collapsed && <ChevronDown size={16} />}
                      </button>
                    </CollapsibleTrigger>

                    {!collapsed && (
                      <CollapsibleContent className="ml-6 mt-1 space-y-1">
                        {item.items.map((sub) => {
                          const active = pathname === sub.href;

                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() =>
                                closeOnClick && setMobileOpen(false)
                              }
                              className={`block rounded px-3 py-1.5 text-sm transition-colors
                                ${active ? "bg-muted font-medium" : "hover:bg-muted"}`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </CollapsibleContent>
                    )}
                  </Collapsible>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ================== JSX ================== */

  return (
    <>
      {/* ===== MOBILE DRAWER ===== */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="w-64 h-full bg-background shadow-lg p-3 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header mobile */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-sm">Menu</span>

              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded hover:bg-muted"
              >
                <X size={18} />
              </button>
            </div>

            {/* Menu */}
            <nav className="flex-1 overflow-y-auto">{renderMenu(true)}</nav>

            {/* User mobile */}
            <div className="border-t pt-3 mt-3">
              <UserMenu />
            </div>
          </aside>
        </div>
      )}

      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside
        className={`hidden md:flex md:flex-col border-r bg-background transition-all duration-200
          ${collapsed ? "w-16" : "w-64"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          {!collapsed && (
            <span className="font-semibold text-sm">Template Admin</span>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded hover:bg-muted"
          >
            <Menu size={18} />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-2 mt-2 flex-1 overflow-y-auto">
          {renderMenu(false)}
        </nav>

        {/* User desktop */}
        <div className="border-t p-2">
          <UserMenu collapsed={collapsed} />
        </div>
      </aside>
    </>
  );

  /* ================== USER MENU ================== */

  function UserMenu({ collapsed }: { collapsed?: boolean }) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full flex items-center gap-3 p-2 rounded hover:bg-muted text-left">
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
            <User size={18} />
          </div>

          {!collapsed && (
            <div className="flex flex-col text-sm leading-tight">
              <span className="font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent side="top" align="start" className="w-56">
          <DropdownMenuItem className="flex items-center gap-2">
            <User size={16} />
            Perfil
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <Key size={16} />
            Alterar senha
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
