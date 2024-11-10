import { NextResponse, NextRequest } from "next/server";
import fs from 'fs'
import path from "path";

export async function GET(req:NextRequest) {
    const filePath = path.join(process.cwd(), "data.json")
    const data = await fs.promises.readFile(filePath, "utf-8")

    const user = JSON.parse(data)

    return NextResponse.json(user)
    
}