import { NextResponse } from "next/server"

export async function GET(req: Request) {
  return NextResponse.json({ message: 'Hello from Beauty Cosmetics Manufacturing' }, { status: 200 })
}