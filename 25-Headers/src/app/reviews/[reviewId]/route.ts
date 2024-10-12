import {type NextRequest, NextResponse } from "next/server";
import { reviewTab } from "../data";
import { redirect } from "next/navigation";

export async function GET(_req:NextRequest, {params}:{params : {reviewId:string}}) {

    if(parseInt(params.reviewId) > reviewTab.length) {
        redirect("/reviews")
    }

    try {
        const review = reviewTab.find(rev => rev.id === parseInt(params.reviewId))
        return NextResponse.json(review,{status:200})
    } catch (error) {
        return NextResponse.json({message:"Review not found"}, {status:500})
    }
}


