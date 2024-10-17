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
      <div className="mx-auto h-screen flex flex-col justify-center items-center gap-6 ">
          <p className="text-4xl font-black uppercase">Login</p>
          <SignInBtn/>
      </div>
    )
  }
