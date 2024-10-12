import { NextResponse } from "next/server";
import { reviewTab } from "./data";

export async function GET() {
    return NextResponse.json(reviewTab)
    
}

export async function POST(req:Request) {
    const review = await req.json()
    const newReview = {
        id: reviewTab.length + 1,
        text: review.text,
    }
    try {
        reviewTab.push(newReview)
        return NextResponse.json(newReview, {status:201})
    } catch (error) {
        return NextResponse.json({message:"Couldnt added"}, {status:401})
    }
    
}