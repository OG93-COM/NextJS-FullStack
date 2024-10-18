"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import SignInBtn from "../components/SignInBtn";

export default function Register() {

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
        <p className="text-4xl font-black uppercase">Register</p>
        <RegisterForm/>
        <SignInBtn InUpText={"Up"}/>
      </div>
    )
  }
