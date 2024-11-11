"use client"
import {useState, FormEvent} from 'react'

export default function AddUser() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [errors, setErrors] = useState<string | null>(null)
    const [success, setSuccess] = useState<string>("");

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        setErrors(null)
        setSuccess("")

        try {
            const response = await fetch("/api/createUser", {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({name, email})
            })
            if(!response.ok){
                console.log('Error when post data ❌')
            }

            const data = await response.json();
            setSuccess(data.name + " added successfuly ✅")
            setName('')
            setEmail('')

        } catch (err: any) {
            console.log("Cant add user", err)
            setErrors("Can't add user, please try again")
        }
    }

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2 bg-slate-100">
    <h1 className="text-xl font-bold uppercase text-slate-800">Add New User</h1>
    <form onSubmit={handleSubmit}
    className='bg-slate-50 p-10 w-[400px] rounded-md shadow-sm flex flex-col gap-4'>
        <input
        onChange={e => setName(e.target.value)}
        value={name}
        type='text'
        className='rounded-md border p-2 w-full'
        placeholder='Write your name here...'
        required/>
        <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        type='text'
        className='rounded-md border p-2 w-full'
        placeholder='Write your Address Email here...'
        required/>
        <button type='submit' className='btn-view-profile uppercase'>Add User</button>
        {errors && <p className='text-sm font-bold text-red-500'>{errors}</p>}
        {success && <p className='text-sm font-bold text-green-500'>{success}</p>}
    </form>
  </div>
  )
}
