"use client"
import { User } from '@/app/types/types'
import { useParams } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'

export default function page() {
    const [user, setUser] = useState<User[]>([])
    const [errors, setErrors] = useState<string | null>(null)
    const [isPending, startTransition] = useTransition()
    const param = useParams()
    const id = param.id

    useEffect(()=>{
        const fetchUserById = async () => {
            try {
                startTransition(async ()=>{
                    const response = await fetch(`/api/getUserById?id=${id}`)
                    if(!response.ok){
                        throw new Error("error when fetching the data")
                    }
                    const data : User = await response.json();
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
    <div>User  ID : {id}</div>
  )
}
