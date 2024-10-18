"use client";
import Link from "next/link";
import SignInBtn from "../components/SignInBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { TfiEmail } from "react-icons/tfi";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="mx-auto h-screen flex flex-col justify-center items-center gap-6 ">
      <p className="text-4xl font-black uppercase">Login</p>
      <LoginForm/>
      <SignInBtn InUpText={"In"}/>
      <Link href={"/register"} className="btn-singin-platform">
        <TfiEmail size={30} /> Register With Email
      </Link>
    </div>
  );
}
