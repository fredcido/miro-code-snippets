import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { extractUser } from "~/server/auth";

export default async function middleware(request: NextRequest) {
  try {
    if (!request.headers.has("X-BOARD-ID")) {
      throw new Error("Missing X-BOARD-ID header");
    }

    // Just make sure it doesn't throw when extracting user
    await extractUser(request.headers.get("Authorization"));

    return NextResponse.next();
  } catch (error) {
    console.log({ error });
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};
