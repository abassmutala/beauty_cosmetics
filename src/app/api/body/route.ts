import { CategoryWithSubsections } from '@/types';
import { NextResponse } from 'next/server';
import data from "../../../data/body.json"

export async function GET(request: Request) {
    try {
        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }

}