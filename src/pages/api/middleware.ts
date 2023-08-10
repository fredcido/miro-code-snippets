import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { extractUser } from "~/server/auth";

export function middleware(request: NextRequest) {
  try {
    // Just make sure it doesn't throw when extracting user
    extractUser(request);
  } catch (error) {
    // Respond with JSON indicating an error message
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}
