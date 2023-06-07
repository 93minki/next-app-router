import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export async function middleware(req: NextRequest, res: NextResponse) {
  // const jwt = getCookie("jwt");
  // if (jwt) {
  //   const requestHeaders = new Headers(req.headers);
  //   requestHeaders.set("Authorization", `Bearer ${jwt}`);
  // }
  // let token: string | undefined;
  // // console.log("request", req);
  // if (req.cookies.has("jwt")) {
  //   token = req.cookies.get("jwt")?.value;
  // } else if (req.headers.get("Authorization")?.startsWith("Bearer ")) {
  //   token = req.headers.get("Authorization")?.substring(7);
  // }
  // const response = NextResponse.next();
  // console.log("response", response);
}

export const config = {
  matcher: ["/", "/dashboard"],
};
