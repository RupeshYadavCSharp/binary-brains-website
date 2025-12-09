// Simple admin authentication utilities
// Default credentials: admin / binarybrains2024

const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "binarybrains2024"

export function validateAdmin(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

export function setAdminSession(): void {
  if (typeof window !== "undefined") {
    const expiry = Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    localStorage.setItem("admin_session", JSON.stringify({ authenticated: true, expiry }))
  }
}

export function clearAdminSession(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_session")
  }
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false

  const session = localStorage.getItem("admin_session")
  if (!session) return false

  try {
    const { authenticated, expiry } = JSON.parse(session)
    if (Date.now() > expiry) {
      clearAdminSession()
      return false
    }
    return authenticated === true
  } catch {
    return false
  }
}
