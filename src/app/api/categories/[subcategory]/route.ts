import { Product } from "@/types/index"
import { NextResponse } from "next/server"
import products from "../../../../data/products.json"

function getSubcategoryProducts(subCategoryID: string) {
    const filteredProducts: Product[] = products.filter((product) => (product.subCategory === subCategoryID))
    return filteredProducts;
}

function getBrands() {
    const uniqueBrandsSet = new Set<number>();
    products.forEach(product => {
        uniqueBrandsSet.add(product.brand);
    });
    const uniqueBrandsArray = Array.from(uniqueBrandsSet);
    return uniqueBrandsArray;
}

export async function GET(req: Request) {
    try {
        const url = new URL(req.url)
        const subCategoryID = url.searchParams.get("id");
        console.log(url.searchParams);
        const subcategoryProducts = getSubcategoryProducts(subCategoryID!);
        const brands = getBrands();
        return NextResponse.json({ subcategoryProducts, brands }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}