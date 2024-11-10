import { NextRequest, NextResponse } from "next/server";
import { reviewTab } from "./data";

export async function GET() {
    return NextResponse.json(reviewTab)

}
