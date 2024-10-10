"use client"

import Link from "next/link";
import { useState } from "react"

export default function layout({children}:{children:React.ReactNode}) {
  const [state, setState] = useState("");
  const handleClick = (e: any) => {
    setState(e.target.value)
  }

  return (
    <div>
        <div className="bg-slate-800 flex justify-center items-center p-2 gap-4 text-slate-100">
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
          <Link href={"/forgotpwd"}>Forgot Passord ?</Link>
        </div>
        <input onChange={handleClick} value={state} type="text" placeholder="Write state"/>
        {children}
    </div>
  )
}
