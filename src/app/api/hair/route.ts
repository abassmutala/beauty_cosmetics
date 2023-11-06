import { NextResponse } from "next/server";
import data from "../../../data/hair.json"

export async function GET(request: Request) {
    try {
        return NextResponse.json(data, {status: 200});
        
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }

}

// export async function GET() {
//     const res = await fetch('https://data.mongodb-api.com/...', {
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY,
//       },
//     })
//     const data = await res.json()
   
//     return Response.json({ data })
//   }

