"use client";

import Link from "next/link";
import styles from "../styles/components/navigations.module.css";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";


const menuItems = [
  {
    name: "Home",
    href: "/",
    icon: IoHome,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: FaBloggerB,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: MdOutlineDashboard,
  },
  {
    name: "Login",
    href: "/login",
    icon: IoMdLogIn,
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={`${styles.container} flex justify-between px-4`}>
      <ul className="flex items-center gap-4">
        {menuItems.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link key={link.name} href={link.href}>
              <li
                className={`${
                  isActive && link.href !== "/" ? "text-orange-100" : ""
                } hover:text-orange-500 flex gap-1 items-center`}
              >
                <link.icon />
                {link.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <Link href={"/user"} className='bg-white h-8 w-8 p-1 rounded-full hover:scale-105 duration-300 flex justify-center items-center'>
        <FaUserLarge />
      </Link>
    </nav>
  );
}
