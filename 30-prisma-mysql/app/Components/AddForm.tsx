"use client"
import { addTask } from "@/utils/actions"
import { useFormStatus } from "react-dom"

export default function AddForm() {

    const BtnSubmit = ()=> {
        const {pending} = useFormStatus();
        return  <button type="submit" className="bg-yellow-700 hover:bg-yellow-600 p-3 rounded text-white"> {pending ? "Creating..." : "Add New Task"} </button>
    }
  return (
    <form action={addTask} className="max-w-[700px] flex items-center mb-2 gap-2 my-2">
        <input type="text" name="task" placeholder="Add New Task" className="h-[50px] border rounded-md p-2" required/>
        <BtnSubmit/>
    </form>
  )
}
