"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Topbar from "@/components/topbar";

// carrega só no client (evita hydration mismatch)
const Sidebar = dynamic(() => import("@/components/sidebar"), { ssr: false });
const Toaster = dynamic(() => import("sonner").then((m) => m.Toaster), {
  ssr: false,
});

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = {
    id: "1",
    name: "Admin Teste",
    email: "admin@teste.com",
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="flex flex-col flex-1">
        <Topbar user={user} onMenuClick={() => setMobileOpen(true)} />

        <main className="flex-1 p-6 bg-background overflow-auto">
          {children}
        </main>
      </div>

      <Toaster position="top-right" richColors />
    </div>
  );
}
