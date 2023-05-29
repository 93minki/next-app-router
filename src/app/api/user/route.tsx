import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "오투라인",
    subscription: "프리미엄",
  });
}
