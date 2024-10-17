"use client"
import SignInBtn from "../components/SignInBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {

  const router = useRouter()
  const {data: session} = useSession()
  console.log(session)

  useEffect(()=>{
    if(session) {
      router.push("/dashboard")
    }

  },[session, router])

    return (
      <div className="mx-auto h-screen flex flex-col justify-center items-center text-2xl font-bold gap-6">
          Welcome to our NextAuth Login
          <SignInBtn/>
      </div>
    )
  }
