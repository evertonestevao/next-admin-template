import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET = process.env.JWT_SECRET || "dev-secret";

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export function getUserFromToken(token: string): AuthUser | null {
  try {
    const payload = jwt.verify(token, SECRET) as any;

    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
    };
  } catch {
    return null;
  }
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  return getUserFromToken(token);
}
