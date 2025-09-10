import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([{
    message: "Otakudesu unofficial API, made by lannzphry with 🤍",
    GitHub: "https://github.com/Lannnnnzzzzzzzzzzz",
    Facebook: "https://www.facebook.com/Beatrixxiw",
  },],
    { status: 200 }
  )
}
