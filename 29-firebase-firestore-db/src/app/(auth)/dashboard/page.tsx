"use client"
import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import {auth} from '../../db/firebaseConfig'
import useClientAuth from "@/app/hooks/useClient"
import { useEffect } from "react"

export default function Dashboard() {
  const {user, redirectAuthenticated} = useClientAuth()
  const router = useRouter()

  useEffect(()=>{
    redirectAuthenticated()
  },[user])

  const handleLogOut = ()=> {
    if(user){
      signOut(auth)
      router.push('/')
    }
  }

  return (

    <div className="h-screen w-full flex flex-col justify-center items-center ">Dashboard 
      <p>My  Email : {user?.email}</p>
      <button onClick={handleLogOut} className="bg-slate-600 hover:bg-slate-500 text-white rounded-md p-2">Logout</button>
    </div>

  )
}
