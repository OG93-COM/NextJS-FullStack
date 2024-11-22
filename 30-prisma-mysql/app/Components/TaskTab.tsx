import { getAllTasks } from "@/utils/actions"
import Link from "next/link"
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"


export default async function TaskTab() {
    const tasks = await getAllTasks()
  return (
    <>
        {tasks?.length === 0 ? (
            <div>Nothing Found</div>
        ) : (
            <table className="max-w-[700px] mt-2 m-auto border-collapse border border-gray-200 text-center">
                <thead>
                    <tr>
                        <th className="border-gray-300 px-4 py-2">ID</th>
                        <th className="border-gray-300 px-4 py-2">Task</th>
                        <th className="border-gray-300 px-4 py-2">Completed</th>
                        <th className="border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(item => (
                        <tr key={item.id}>
                            <td className="border-gray-300 px-4 py-2 font-light">{item.id}</td>
                            <td className="border-gray-300 px-4 py-2 font-light">{item.content}</td>
                            <td className="border-gray-300 px-4 py-2 font-light">{item.completed ? "✅" : " ❌"}</td>
                            <td className="flex justify-end items-center gap-2 px-4 py-2">
                                <Link href={`task/${item.id}`}><EditButton/></Link>
                                <DeleteButton id={item.id}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </>
  )
}
