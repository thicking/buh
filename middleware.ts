import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Этот middleware будет запускаться для всех запросов
export function middleware(request: NextRequest) {
  // Получаем текущие куки
  const sessionCookie = request.cookies.get("session")

  // Добавляем заголовки для отладки
  const response = NextResponse.next()
  response.headers.set("x-debug-has-session", sessionCookie ? "true" : "false")

  return response
}

// Указываем, для каких путей запускать middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

