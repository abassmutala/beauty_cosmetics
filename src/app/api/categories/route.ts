import { NextResponse } from "next/server";
import categories from "../../../data/categories.json"

export async function GET() {
    try {
        return NextResponse.json(categories, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}