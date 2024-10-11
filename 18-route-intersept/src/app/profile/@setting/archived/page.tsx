import CardProfile from "@/app/components/CardProfile";
import Link from "next/link";



export default function Archive() {
  return (
    <>
    <CardProfile>
        <h4>Archived Component Setting</h4>
        <Link href={"/profile/"}>Archived Default</Link>
    </CardProfile>
    </>
  )
}
