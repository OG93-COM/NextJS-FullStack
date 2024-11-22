import { MdDelete } from "react-icons/md";
import { deleteTask } from "@/utils/actions";

interface DeleteButtonProps {
    id:string
}

export default function DeleteButton({id}:DeleteButtonProps) {
  return (
    <form action={deleteTask}>
        <button type="submit"> 
        <input type="hidden" name="id" value={id}/>
            <MdDelete
            className="text-red-600 hover:text-red-500 hover:scale-105 duration-200 cursor-pointer" 
            size={20} />
        </button>
    </form>
    
  )
}
