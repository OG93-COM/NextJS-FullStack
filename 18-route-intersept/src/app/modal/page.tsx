import Link from "next/link";

export default function ModalProfile() {
  return (
    <div className="m-5">
        <h1 className="mb-3">MODAL</h1>
        <Link
            className='mt-2 p-2 bg-slate-700 text-slate-200 rounded-xl'
            href={"/modal/modalprofile"}>
            Profile MODAL
        </Link>
        <Link
            className='mt-2 p-2 bg-slate-700 text-slate-200 rounded-xl'
            href={"/about"}>
            About MODAL
        </Link>
    </div>
  )
}
