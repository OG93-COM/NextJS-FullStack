import Link from "next/link";

export default function Nav() {
  return (
    <div className="h-12 p-3 bg-slate-700 text-white flex items-center gap-3 shadow-md">
        
        <Link href={"/"}>Firestore Database</Link>
        <Link href={"/realtime"}>Realtime</Link>
        <Link href={"/signInAndUp"}>Login</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  )
}
