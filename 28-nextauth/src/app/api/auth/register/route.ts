import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "@/app/db/firebaseConfig";

export async function POST(req : Request){
    try {
        const {email, password} = await req.json()
        const bcrypt = require("bcrypt")
        const hashedPassword = await bcrypt.hash(password,10)
        const userCollection = collection(db, "users")
        const userRef = await addDoc(userCollection, {
            email:email,
            password:hashedPassword,
        })

        return NextResponse.json({success:"Account Added Successfuly", userId: userRef.id})
    } catch (error: any) {
        return NextResponse.json({error : error.message}, {status:500})
    }
}