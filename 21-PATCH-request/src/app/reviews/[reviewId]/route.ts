import {NextResponse } from "next/server";
import { reviewTab } from "../data";

export async function GET(_req:Request, {params}:{params : {reviewId:string}}) {

    try {
        const review = reviewTab.find(rev => rev.id === parseInt(params.reviewId))
        return NextResponse.json(review,{status:200})
    } catch (error) {
        return NextResponse.json({message:"Review not found"}, {status:500})
    }
}

export async function PATCH(req:Request, {params}: {params :{reviewId : string}}) {
    const {text} = await req.json()
    try {
    const index = reviewTab.findIndex(rev => rev.id === parseInt(params.reviewId) )
    reviewTab[index].text = text
    return NextResponse.json(reviewTab)
    } catch (error) {
        return NextResponse.json({message:"Review Not Updated!!!"},{status:405})
    }
}

