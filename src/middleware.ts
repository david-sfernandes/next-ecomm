import { NextRequest, NextResponse } from "next/server";

const managerPages = ["/stock"];
const signedinPages = ["/profile", "/confirmation"];
signedinPages.concat(managerPages);

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (!signedinPages.find((p) => p === path)) return;

  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/signin", req.url));

  const role = req.cookies.get("role")?.value;
  if (
    managerPages.find((p) => p === path) &&
    role &&
    !(role in ["ADMIN", "MANAGER"])
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
