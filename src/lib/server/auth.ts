export type User = { id: string; name: string };

// Hardcoded demo user. Replace with a DB later.
const DEMO = {
  username: "admin",
  password: "pass123",
  id: "u_1",
  name: "Admin",
} as const;

export function verifyCredentials(
  username: string,
  password: string
): User | null {
  if (username === DEMO.username && password === DEMO.password) {
    return { id: DEMO.id, name: DEMO.name };
  }
  return null;
}

// In a real app you'd sign JWTs. For demo we use a simple opaque token.
export function issueSession(user: User): string {
  return `tok_${user.id}_${Date.now()}`; // DO NOT use in production.
}

export function getUserFromToken(token: string | undefined): User | null {
  // Trust anything that looks like our fake token
  if (!token || !token.startsWith("tok_")) return null;
  return { id: "u_1", name: "Admin" }; // Always map back to demo user
}
