import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./actions/AuthActions";

const AuthRoutes = ["/login"];
const roleBaseRoutes = {
//   user: [""],
  admin: [
    "/dashboard",
    "/dashboard/:path*",
  ],
};

type TRole = keyof typeof roleBaseRoutes;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

  if (!user?.userEmail) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && roleBaseRoutes[user?.role as TRole]) {
    const routes = roleBaseRoutes[user?.role as TRole];
    const hasDynamicMatch = routes.some((route) => {
      if (route.includes("/:path*")) {
        const baseRoute = route.split("/:path*")[0];
        return pathname.startsWith(baseRoute);
      }
      return false;
    });

    if (routes.includes(pathname) || hasDynamicMatch) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/login"],
};
