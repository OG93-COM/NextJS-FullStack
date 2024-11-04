"use client"

import { useEffect, useState } from "react"
import { useRealtime } from "../hooks/useRealtime"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash } from "react-icons/fa";


export default function Realtime() {

  const {todo, addTodo, updateTodo, startEditingTodo, editingTodo, deleteTodo} = useRealtime()
  const [todoText, setTodoText] = useState<string>('')
  const [isBtnActive, setIsBtnActive] = useState<Boolean>(false)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isBtnActive){
      addTodo(todoText)
      setTodoText('')
      toast.success(`${todoText} added Successfuly`)
    }
  }

  // Funtion for hundle the input update change
  const handleEditChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(editingTodo){
      const updatedTodo = {...editingTodo, textTodo: e.target.value}
      startEditingTodo(updatedTodo)
    }
  }

  // Funtion for call the update change
  const handleEditSubmit = (id:string, newTodoText:string) => {
    updateTodo(id, newTodoText);
  }

  useEffect(()=>{
    if(todoText === ""){
      setIsBtnActive(false)
    } else {
      setIsBtnActive(true)
    }
  },[todoText])

  return (
    <div className="p-4 max-w-[600px] mx-auto">
      <ToastContainer/>
      <form onSubmit={handleSubmit} className="mb-8">
        <label>Add New Todo to Realtime Database from Firebase</label>
        <input onChange={handleChange} value={todoText} type="text" placeholder="add todo here ..." className="w-full border p-2 my-2 rounded-md"/>
        <button type="submit" className={`w-full px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 duration-300 ${!isBtnActive ? "opacity-50 cursor-not-allowed" : ""}`}>
          Add New Todo
        </button>
      </form>

      <ul>
        {todo.map(item => (
          <li className="mb-4 p-5 rounded-md flex justify-between items-center shadow-md hover:shadow-lg duration-300">
            {editingTodo?.id === item.id ? (
                <div className="w-full flex justify-start items-center gap-2 ">
                  <input type="text" onChange={handleEditChange}
                    className="border w-full p-2 rounded-md"
                    value={editingTodo.textTodo}
                    />
                  <button
                    onClick={()=> handleEditSubmit(item.id, editingTodo.textTodo)}
                    className="rounded-md bg-blue-500 text-white py-2 px-5 hover:bg-blue-600">Save</button>
                </div>
            ):(
            <>
              {item.textTodo}
              <div className="flex justify-center items-center gap-2">
                <FaEdit onClick={()=> startEditingTodo(item)} className="hover:text-blue-500 cursor-pointer" size={20}/>
                <FaTrash onClick={()=> deleteTodo(item.id)} className="hover:text-red-500 cursor-pointer" size={18}/>
              </div>
            </>
            )}
          </li>
          ))}
      </ul>

    </div>
  )
}
