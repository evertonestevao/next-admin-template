import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Libera tudo em DEV (facilita desenvolvimento)
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  const isLoginRoute = pathname === "/login";
  const isDashboardRoot = pathname === "/dashboard";

  // Não logado tentando acessar o dashboard
  if (!token && isDashboardRoot) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Logado tentando acessar login
  if (token && isLoginRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard", // protege só a raiz
    "/login",
  ],
};
