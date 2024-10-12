import {type NextRequest, NextResponse } from "next/server";
import { reviewTab } from "../data";

export async function GET(_req:NextRequest, {params}:{params : {reviewId:string}}) {

    try {
        const review = reviewTab.find(rev => rev.id === parseInt(params.reviewId))
        return NextResponse.json(review,{status:200})
    } catch (error) {
        return NextResponse.json({message:"Review not found"}, {status:500})
    }
}

export async function PATCH(req:NextRequest, {params}: {params :{reviewId : string}}) {
    const {text} = await req.json()
    try {
    const index = reviewTab.findIndex(rev => rev.id === parseInt(params.reviewId) )
    reviewTab[index].text = text
    return NextResponse.json(reviewTab)
    } catch (error) {
        return NextResponse.json({message:"Review Not Updated!!!"},{status:405})
    }
}

export async function DELETE(req:NextRequest, {params}: {params :{reviewId : string}}) {
    const {text}  = await req.json()

    try {
        const index = reviewTab.findIndex(rev => rev.id === parseInt(params.reviewId))
        const deleteReview = reviewTab[index];
        reviewTab.splice(index,1)
        return NextResponse.json({reviewTab}, {status:200})
    } catch (error) {
        return NextResponse.json({message:"Cannot Delete the review"})
    }
}

