import { getTaskById, updateTask } from "@/utils/actions"
import Link from "next/link"
import { IoArrowBackCircleOutline } from "react-icons/io5";


interface Params {
    id:string,
    content:string,
    completed:boolean,
}

interface UpdatePageProps {
    params:Params
}

export default async function Task({params}:UpdatePageProps) {
    const task = await getTaskById(params.id)

    if(!task){
        return <div className="w-full h-screen flex justify-center items-center flex-col">Not found <Link href={"/"}><IoArrowBackCircleOutline size={32} className="hover:scale-105 transition duration-200"/></Link></div>
    }

    const {id, content, completed} = task
    console.log(task)
  return (

    <div className="w-full h-screen flex justify-center items-center flex-col">
        <Link href={"/"}><IoArrowBackCircleOutline size={32} className="hover:scale-105 transition duration-200"/></Link>
        <form action={updateTask} className="max-w-[700px] flex items-center flex-col justify-center my-2">
            <input type="hidden" name="id" value={id} />
            <div className="flex gap-2">
            <input type="text" name="task" defaultValue={content} className="h-[50px] border rounded-md p-2" required />
            <button type="submit" className="bg-yellow-700 hover:bg-yellow-600 p-3 rounded text-white"> Save </button>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm font-bold text-yellow-700">
                <label htmlFor="completed">Completed?</label>
                <input type="checkbox" defaultChecked={completed} name="completed" id="" className="border border-gray-300"/>
            </div>
        </form>
    </div>
  )
}
