"use client"
import Link from 'next/link'
import React from 'react'
import { TiUserAddOutline } from "react-icons/ti";


export default function Nav() {
  return (
    <nav className='h-10 bg-slate-800 text-white flex justify-center items-center gap-5'>
        <Link href={"/"} className='font-extrabold hover:text-slate-500'>HOME</Link>
        <Link href={"/users"} className='font-extrabold hover:text-slate-500'>Users</Link>
        <Link href={"/users/adduser"}><TiUserAddOutline size={22} className='hover:scale-125 duration-300'/></Link>
    </nav>
  )
}
