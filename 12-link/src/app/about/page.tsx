"use client"
import { useRouter } from "next/navigation"

export default function About() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/")
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-3xl font-bold text-slate-700">About Us</h1>
      <button
        onClick={handleClick}
        className="px-5 py-2 bg-gray-700 text-slate-100 rounded-full hover:scale-110 duration-300">
        Go To Home
      </button>
    </div>
  )
}
