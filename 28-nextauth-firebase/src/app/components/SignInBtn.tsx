"use client"

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { signIn } from "next-auth/react";
import Link from "next/link";


const SignInBtn = ({InUpText}:{InUpText : string}) => {
  

  return (
    <div className="flex flex-col text-sm">
      <button onClick={()=> signIn('github')} className="btn-singin-platform mb-2">
        <FaGithub size={30} /> Sign{InUpText} With Github
      </button>
      <button onClick={()=> signIn('google')} className="btn-singin-platform">
        <FcGoogle size={30} /> Sign{InUpText} With Google
      </button>
    </div>
  );
};

export default SignInBtn;
