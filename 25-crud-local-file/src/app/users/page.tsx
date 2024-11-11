"use client"
import Link from 'next/link'
import React, { startTransition, useEffect, useState, useTransition } from 'react'
import { User } from '../types/types'
export default function PageUser() {
  
  const [user, setUser] = useState<User[]>([]);
  const [errors, setErrors] = useState<string | null>(null)
  const [isPending, StartTransittion] = useTransition();

  useEffect(()=> {
    const fetchUser = async ()=> {
      try {
        startTransition(async()=> {
          const response = await fetch('/api/getUsers')
          if(!response.ok){
            throw new Error("error when fetching the data")
          }
          const data:User[] = await response.json();
          setUser(data)
        })
      } catch (err: any) {
        setErrors(err.message)
      }
    }

    fetchUser()
  },[])

  const handleDelete = async(id:number) => {
    if(confirm("You want to delete user??")){
      try {
        startTransition(async()=>{
          const response = await fetch("api/deleteUser",{
            method:"DELETE",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify({id})
          })
          if(!response.ok){
            console.log('error when Delete user response')
          }

          setUser(user.filter(user => user.id != id))
        })
      } catch (err: any) {
        console.log("Cant Delete user", err)
      }
    }
  }

  return (
    <section className='w-full h-screen flex items-center justify-center'>
      {isPending && <div>... Loading</div>}
      {errors && <p>{errors}</p>}

      <ul>
      {user?.map(user => (
        <li key={user.id} className='border rounded-md p-4 my-2 shadow-sm'>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <div className='mt-3 flex gap-2 justify-center items-center'>
            <Link href={`/users/${user.id}`} className='btn-view-profile'>View Profile</Link>
            <Link href={`/users/edit/${user.id}`} className='btn-edit-profile'>Edit Profile</Link>
            <div onClick={()=> handleDelete(user.id)} className='btn-delete-profile cursor-pointer'>Delete Profile</div>
          </div>
        </li>

      ))}
      </ul>
    </section>
  )
}
