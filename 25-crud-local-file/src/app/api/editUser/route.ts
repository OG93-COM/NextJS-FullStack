import { NextResponse, NextRequest } from "next/server";
import fs from 'fs'
import path from "path";
import { User } from "@/app/types/types";

export async function PUT(req:NextRequest){
    const filePath = path.join(process.cwd(), "data.json")
    try {
        const {id, name, email} = await req.json()
        const jsonData = fs.readFileSync(filePath,'utf-8')
        const user : User[] = JSON.parse(jsonData)

        const index = user.findIndex(user => user.id === parseInt(id))
        if(index === -1){
            return NextResponse.json({message:"User Not Found"},{status:404})
        }
        user[index] = {...user[index], ...(name && {name}), ...(email && {email})}
        fs.writeFileSync(filePath, JSON.stringify(user, null , 2))

        return NextResponse.json(user[index],{status:200})
    } catch (error) {
        return NextResponse.json({message:"Cannot update user"},{status:500})
    }
}