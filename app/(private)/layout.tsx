import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import { getCurrentUser } from "@/lib/auth";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getCurrentUser();

  const user = {
    id: "1",
    name: "Admin Teste",
    email: "admin@teste.com",
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar user={user} />
        <main className="flex-1 p-6 bg-background overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
