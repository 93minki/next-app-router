import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "testlist",
    "testlist.json"
  );
  const res = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(res);

  console.log(data);

  return NextResponse.json({ data });
}
