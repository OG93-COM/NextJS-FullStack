import { NextResponse, NextRequest } from "next/server";
import users from "../../../../data.json"

export async function GET(req:NextRequest) {
    const {searchParams} = new URL(req.url)
    const id = searchParams.get("id")

    const user = users.find(user => user.id === id)

    if (!user){
        return NextResponse.json({message:"User not found"},{status:400})
    }

    return NextResponse.json(user, {status:200})

}