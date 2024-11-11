import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'
import path from 'path'
import { User } from "@/app/types/types";


export async function POST(req:NextRequest) {
    try {
        const body = await req.json()
        const {name , email} = body;
        const filePath = path.join(process.cwd(), "data.json")
        const jsonData = fs.readFileSync(filePath, "utf-8")
        const data:User[] = JSON.parse(jsonData)

        const newUser : User = {
            id: data.length + 1,
            name,
            email
        }

        data.push(newUser)
        fs.writeFileSync(filePath, JSON.stringify(data, null , 2))

        return NextResponse.json(newUser, {status:200})

    } catch (error) {
        return NextResponse.json({message:"Error Route when add user"}, {status:500})
    }
}