import { NextResponse } from "next/server";
import products from "../../../../data/products.json"

export async function GET(req: Request) {
    const url = new URL(req.url)
    const id = url.searchParams.get("id");
    try {
        const product = products.find((product) => product.id === id);
        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
        return NextResponse.json({ product }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}