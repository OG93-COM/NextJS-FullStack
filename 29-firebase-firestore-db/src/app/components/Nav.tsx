"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name:"Firestore Database",
    href:"/"
  },
  {
    name:"Realtime",
    href:"/realtime"
  },
  {
    name:"Dashboard",
    href:"/dashboard"
  },
  {
    name:"Login",
    href:"/signInAndUp"
  },
]

export default function Nav() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <nav className="h-12 p-3 bg-slate-700 text-white flex items-center justify-center gap-5 shadow-md">
        <ul className="flex justify-center items-center gap-5">
        {menuItems.map((link,idx)=> {
          const isActive = pathname.startsWith(link.href)
          return (
            <Link key={idx} href={link.href}>
              <li className={isActive && link.href!=="/" ? "text-orange-300 border-b" : ""}>
                {link.name}
              </li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}
