"use client"

import Link from 'next/link'
import styles from '../styles/components/navigations.module.css'
import { usePathname } from 'next/navigation'

const menuItems = [
  {
    name:"Home Page",
    href:"/"
  },
  {
    name:"Authentification",
    href:"/login"
  },

]

export default function Nav() {
  const pathname = usePathname()
  
  return (
    <div className={styles.container}>
      <ul className="flex justify-center items-center gap-5">
        {menuItems.map((link,idx)=> {
          const isActive = pathname.startsWith(link.href)
          return (
            <Link key={idx} href={link.href}>
              <li className={isActive && link.href!=="/" ? "text-orange-100" : ""}>
                {link.name}
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
