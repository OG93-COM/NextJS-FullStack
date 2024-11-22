"use client"

import { useState, ChangeEvent } from "react"
import * as yup from "yup"
import useClientAuth from "@/app/hooks/useClient"

interface FormData {
  email:string,
  password:string,
}
const schema = yup.object().shape({
  email: yup.string().email("Email Invalid").required("Email Required"),
  password:  yup.string().required("Password Required")
})

export default function SignInAndUpPage() {

  const [isSignUpActive, setIsSignUpActive] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({email:"", password:""})
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const {user, signUp, signIn, loginWithGoogle, redirectAuthenticated} = useClientAuth()

  const handleFormChange = ()=> {
    setIsSignUpActive(!isSignUpActive)
    setFormData({email:"", password:""})
    setErrors({})
  }

  const handleInputChange = (event: ChangeEvent <HTMLInputElement>) => {
    const {name,value} = event.target;
    setFormData(prevData => ({...prevData, [name]:value}))
    console.log(formData)
  }

  const handleSignUp = () => {
    schema.validate(formData, {abortEarly:false}).then(()=>{
      signUp(formData.email, formData.password)
    })
    .catch((validationError: yup.ValidationError)=>{
      const formattedError:Partial<FormData>={}
      validationError.inner.forEach(error => {
        formattedError[error.path as keyof FormData]= error.message
      })
      setErrors(formattedError)
    })
  }

  const handleSignIn = () => {
    schema.validate(formData, {abortEarly:false}).then(()=>{
      signIn(formData.email, formData.password)
    })
    .catch((validationError: yup.ValidationError)=>{
      const formattedError:Partial<FormData>={}
      validationError.inner.forEach(error => {
        formattedError[error.path as keyof FormData]= error.message
      })
      setErrors(formattedError)
    })
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
        <input onChange={handleInputChange} value={formData.email} type="email" name="email" id="email" className="h-10 border border-slate-500 rounded-md p-4"/>
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        <label htmlFor="Password" className="text-slate-800">Password</label>
        <input onChange={handleInputChange} value={formData.password} type="Password" name="Password" id="Password" className="h-10 border border-slate-500 rounded-md p-4"/>
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
        {isSignUpActive ? (
          <>
            <button onClick={handleSignUp} className="bg-slate-600 hover:bg-slate-500 text-white rounded-md p-2">Create</button>
            <p onClick={()=> handleFormChange()} className="cursor-pointer hover:text-slate-400 text-sm">You Have already an account</p>
          </>
        ):(
          <>
            <button onClick={handleSignIn} className="bg-slate-600 hover:bg-slate-500 text-white rounded-md p-2">Login</button>
            <p onClick={()=> handleFormChange()} className="cursor-pointer hover:text-slate-400 text-sm">Don't Have account</p>
          </>
        )}
        
      </form>
    </section>
  )
}
