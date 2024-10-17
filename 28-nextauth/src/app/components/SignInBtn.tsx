"use client"

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { signIn } from "next-auth/react";
import Link from "next/link";


const SignInBtn = () => {
  

  return (
    <div className="flex flex-col text-sm">
      <button onClick={()=> signIn('github')} className="btn-singin-platform">
        <FaGithub size={30} /> Sign In With Github
      </button>
      <button onClick={()=> signIn('google')} className="btn-singin-platform">
        <FcGoogle size={30} /> Sign In With Google
      </button>
      <Link href={"/register"} className="btn-singin-platform">
        <TfiEmail size={30} /> Register With Email
      </Link>
    </div>
  );
};

export default SignInBtn;
