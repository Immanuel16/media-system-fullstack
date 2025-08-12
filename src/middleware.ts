import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Ambil token dari cookies
  const token = req.cookies.get("token")?.value;

  // Kalau tidak ada token dan bukan halaman login/register → redirect
  // if (!token && !pathname.startsWith("/login") && !pathname.startsWith("/register")) {
  //   console.log("No token found, redirecting to login");
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  // Kalau cuma mau nambah header debug → clone request biar gak blank
  // const res = NextResponse.next({
  //   request: {
  //     headers: req.headers, // copy semua header asli
  //   },
  // });
  const res = NextResponse.next();

  res.headers.set("x-current-path", pathname);

  // return res;
  return NextResponse.next();
}

// Matcher biar gak jalan di file statis & API
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
