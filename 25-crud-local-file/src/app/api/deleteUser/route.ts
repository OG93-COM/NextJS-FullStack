import { NextResponse, NextRequest } from "next/server";
import fs from 'fs'
import path from "path";
import { User } from "@/app/types/types";

export async function DELETE(req:NextRequest){
    const filePath = path.join(process.cwd(), "data.json")
    try {
        const {id} = await req.json()
        const jsonData = fs.readFileSync(filePath,'utf-8')
        const user : User[] = JSON.parse(jsonData)

        const index = user.findIndex(user => user.id === parseInt(id))
        if(index === -1){
            return NextResponse.json({message:"User Not Found"},{status:404})
        }
        user.splice(index,1)
        fs.writeFileSync(filePath, JSON.stringify(user, null , 2))

        return NextResponse.json(user[index],{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Cannot Delete user"},{status:500})
    }
}