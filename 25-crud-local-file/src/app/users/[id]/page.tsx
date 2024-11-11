"use client"
import { User } from '@/app/types/types'
import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'
import { FaRegUser } from "react-icons/fa";


export default function page() {
    const [user, setUser] = useState<User[]>([]);
    const [errors, setErrors] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const param = useParams()
    const id = param.id

    useEffect(()=>{
        const fetchUserById = async () => {
            try {
                startTransition(async ()=>{
                    const response = await fetch(`/api/getUserById?id=${id}`)
                    if(!response.ok){
                        redirect("/")
                    }
                    const data = await response.json();
                    setUser(data)
                    console.log(user)
                })
            } catch (err : any) {
                setErrors(err.message)
            }
        }

        fetchUserById()
    },[])
    
  return (
    <div className='mx-auto mt-2 shadow-sm h-[400px] border rounded-md bg-slate-50 flex flex-col justify-center items-center w-[400px] p-4'>
        {isPending && <div>... is Loading</div>}
        {errors && <div>Error : {errors}</div>}
        <h1 className='mb-5 opacity-30'><FaRegUser size={48} /></h1>
        {user && (
            <>
            <p className='text-md font-extrabold'>{user.id}</p>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            </>
        )}
    </div>
  )
}
