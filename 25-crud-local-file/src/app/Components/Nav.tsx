"use client"
import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className='h-10 bg-slate-800 text-white flex justify-center items-center gap-5'>
        <Link href={"/"} className='font-extrabold hover:text-slate-500'>HOME</Link>
        <Link href={"/users"} className='font-extrabold hover:text-slate-500'>Users</Link>
    </nav>
  )
}
