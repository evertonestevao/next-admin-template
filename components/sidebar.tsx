"use client";

import { useState } from "react";
import { Home, Users, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

const menuItems: MenuItem[] = [
  {
    label: "Início",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Clientes",
    href: "/dashboard/clientes",
    icon: Users,
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`border-r bg-background transition-all duration-200 ${
        collapsed ? "w-16" : "w-64"
      }`}
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
      <nav className="p-2 mt-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded px-3 py-2 text-sm transition-colors
                ${isActive ? "bg-muted font-medium" : "hover:bg-muted"}`}
            >
              <Icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
