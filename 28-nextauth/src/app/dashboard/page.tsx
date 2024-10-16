"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";


export default function Dashboard() {
    const router = useRouter()

    const {data:session} = useSession()
    const user = session?.user
    const imgUser = session?.user?.image
    const userName = session?.user?.name

  return (
    <>
    {session ? (
        <div className="mx-auto h-screen flex flex-col justify-center items-center gap-3">
        <Image src={imgUser} width={88} height={88} alt={userName} className="rounded-full shadow-md"/>
        <p className="text-3xl font-bold">Welcome {user?.name}</p>
        <button
              className="text-md flex items-center gap-2"
              onClick={() => signOut()}>
              Logout <IoLogOutOutline />
          </button>
      </div>
    ) : router.push('/login')}
    </>
  )
}

