import { NextResponse } from 'next/server';
import data from "../../../data/face.json"

export async function GET(request: Request) {
    try {
        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }

}

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<CategoryWithSubsections>
// ) {

//     const { method, query } = req;

//     switch (method) {
//         case "GET":
//             res.status(200).json({
//                 name: "Face",
//                 image: "/images/face_banner.png",
//                 subsections: [
//                     {
//                         name: "Mask",
//                         image: "",
//                         href: "",
//                     },
//                     {
//                         name: "Radiance",
//                         image: "",
//                         href: "",
//                     },
//                 ]
//             })
//             break;

//         default:
//             res.setHeader("Allow", ["GET", "POST"])
//             res.status(405).end(`Method ${method} not allowed`);
//             break;
//     }
// }