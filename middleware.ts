import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Permite tudo no ambiente de desenvolvimento
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;
  const isAuthRoute = pathname.startsWith("/login");
  const isPrivateRoute = pathname.startsWith("/dashboard");

  // Não logado tentando acessar área privada
  if (!token && isPrivateRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Logado tentando acessar login
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", // protege tudo dentro do dashboard
    "/login",
  ],
};
