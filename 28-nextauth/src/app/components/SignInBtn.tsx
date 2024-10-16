"use client"

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const SignInBtn = () => {
  return (
    <div className="flex flex-col text-sm">
      <div onClick={()=> signIn('github')} className="btn-singin-platform">
        <FaGithub size={30} /> Sign In With Github
      </div>
      <div onClick={()=> signIn('google')} className="btn-singin-platform">
        <FcGoogle size={30} /> Sign In With Google
      </div>
    </div>
  );
};

export default SignInBtn;
