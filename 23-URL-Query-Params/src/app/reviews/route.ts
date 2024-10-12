import {type NextRequest, NextResponse } from "next/server";
import { reviewTab } from "./data";



export async function GET(req: NextRequest) {

        const searchParams = req.nextUrl.searchParams;
        const query = searchParams.get('query')
        const filtredReview = query ? reviewTab.filter(rev => rev.text.includes(query)) : reviewTab;
        return NextResponse.json(filtredReview)

}