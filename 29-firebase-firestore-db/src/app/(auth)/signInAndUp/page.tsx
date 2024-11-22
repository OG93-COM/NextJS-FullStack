"use client"

import { useState, ChangeEvent } from "react"
import * as yup from "yup"

export default function SignInAndUpPage() {

  const [isSignUpActive, setIsSignUpActive] = useState<boolean>(false)

  const handleFormChange = ()=> {
    setIsSignUpActive(!isSignUpActive)
  }

  return (
    <section className="w-full h-screen flex justify-center items-center flex-col gap-5">
        {isSignUpActive ? (
          <h1 className="text-center text-gray-700 font-bold uppercase">Create account</h1>
        ):(
          <h1 className="text-center text-gray-700 font-bold uppercase">Login</h1>
        )}
      <form className="max-w-[750px] min-w-[400px] flex flex-col gap-2 bg-slate-50 p-5 rounded-md shadow-md">
        <label htmlFor="email" className="text-slate-800">Email</label>
        <input type="email" name="email" id="email" className="h-10 border border-slate-500 rounded-md p-4"/>
        <label htmlFor="Password" className="text-slate-800">Password</label>
        <input type="Password" name="Password" id="Password" className="h-10 border border-slate-500 rounded-md p-4"/>
        {isSignUpActive ? (
          <>
            <button className="bg-slate-600 hover:bg-slate-500 text-white rounded-md p-2">Create</button>
            <p onClick={()=> handleFormChange()} className="cursor-pointer hover:text-slate-400 text-sm">You Have already an account</p>
          </>
        ):(
          <>
            <button className="bg-slate-600 hover:bg-slate-500 text-white rounded-md p-2">Login</button>
            <p onClick={()=> handleFormChange()} className="cursor-pointer hover:text-slate-400 text-sm">Don't Have account</p>
          </>
        )}
        
      </form>
    </section>
  )
}
