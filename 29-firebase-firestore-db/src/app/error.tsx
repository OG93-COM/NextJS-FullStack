"use client"
import React, { useEffect } from 'react'

export default function error({error, reset} : {error:Error, reset:()=> void}) {

    useEffect(()=>{
        console.log(error)
    },[error])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className='text-xl text-red-600'>Oops, Error</h2>
        <p>{error.message}</p>
        <button onClick={()=> reset()} className='py-2 px-4 bg-blue-600 text-white rounded-md'>Try Again</button>
    </div>
  )
}
