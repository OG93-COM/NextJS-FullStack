"use client"

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";


const SignInBtn = () => {
  

  return (
    <div className="flex flex-col text-sm">
      <button onClick={()=> signIn('github')} className="btn-singin-platform">
        <FaGithub size={30} /> Sign In With Github
      </button>
      <button onClick={()=> signIn('google')} className="btn-singin-platform">
        <FcGoogle size={30} /> Sign In With Google
      </button>
    </div>
  );
};

export default SignInBtn;
