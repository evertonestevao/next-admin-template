import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev-secret";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Aqui você faz a validação do usuário
  // Exemplo simples:
  if (email === "admin@admin.com" && password === "1234") {
    // Cria o JWT
    const token = jwt.sign(
      {
        sub: "1", // ID do usuário
        email,
        name: "Admin", // Nome do usuário
      },
      SECRET,
      { expiresIn: "1d" } // expira em 1 dia
    );

    return NextResponse.json({ token });
  }

  return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
}
