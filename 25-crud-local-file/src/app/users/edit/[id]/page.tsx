"use client"
import { User } from '@/app/types/types'
import { redirect, useParams } from 'next/navigation'
import {useState, useEffect, useTransition, FormEvent} from 'react'

export default function EditUser() {
  const {id} = useParams()
  const [user, setUser] = useState({name:"", email:""})
  const [errors, setErrors] = useState<string | null>(null)
  const [success, setSuccess] = useState<string>("");
  const [isPending, startTransition] = useTransition()

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

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const {name, value} = e.target as HTMLInputElement;
    setUser(prev => ({...prev, [name]:value}))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setErrors(null)
    setSuccess("")
    try {
      startTransition(async ()=>{
        const response = await fetch("/api/editUser",{
          method:"PUT",
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(user)
        })

        if(!response.ok){
          console.log('error when update user response')
        }

        const data = await response.json()
        setSuccess(data.name + " updated successfuly ✅")

      })
    } catch (err: any) {
      console.log("Cant edit user", err)
      setErrors("Can't edit user, please try again")
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2 bg-slate-100">
    <h1 className="text-xl font-bold uppercase text-slate-800">Edit User <span className='text-blue-700'>{user.name}</span></h1>
    <form onSubmit={handleSubmit}
    className='bg-slate-50 p-10 w-[400px] rounded-md shadow-sm flex flex-col gap-4'>
        <input
        onChange={handleChange}
        value={user.name}
        type='text'
        name='name'
        className='rounded-md border p-2 w-full'
        placeholder='Write your name here...'
        required/>
        <input
        onChange={handleChange}
        value={user.email}
        type='text'
        name='email'
        className='rounded-md border p-2 w-full'
        placeholder='Write your Address Email here...'
        required/>
        <button type='submit' className='btn-view-profile uppercase'>Save Edit User</button>
        {errors && <p className='text-sm font-bold text-red-500'>{errors}</p>}
        {success && <p className='text-sm font-bold text-green-500'>{success}</p>}
    </form>
  </div>
  )
}
