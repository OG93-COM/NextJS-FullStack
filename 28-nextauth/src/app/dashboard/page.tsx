"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";



export default function Dashboard() {
    const router = useRouter()

    const {data:session} = useSession()


  return (
    <>
    {session ? (
        <div className="mx-auto h-screen flex flex-col justify-center items-center gap-3">
        {session.user?.image && (
          <Image src={session.user?.image as string} width={88} height={88} alt={session.user?.name as string} className="rounded-full shadow-md"/>
        )}
        <p className="text-3xl font-bold">Welcome {session.user?.name}</p>
        <p>{session.user?.email}</p>
        <button
              className="bg-slate-100 border-2 border-slate-200 rounded-lg px-3 py-1 text-md flex items-center gap-2 hover:text-slate-600 duration-300"
              onClick={() => signOut()}>
              Logout <IoLogOutOutline />
        </button>
      </div>
    ) : router.push('/login')}
    </>
  )
}

