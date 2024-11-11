import { useEffect, useState } from "react";
import { database } from "../db/firebaseConfig";
import { push, ref, onValue, update, remove } from "firebase/database";

interface Todos {
    id:string,
    textTodo:string,
}

export function useRealtime(){
    const [todo, setTodo] = useState<Todos[]>([])
    const [editingTodo, setEditingTodo] = useState<Todos | null>(null)


    //Read from Database Realtime
    useEffect(()=>{
        const todoRef = ref(database,"todos");
        const onDataChange = (snapshot:any) => {
            const todoList:Todos[] = [];
            snapshot.forEach((childSnapshot:any)=> {
                const todo = childSnapshot.val()
                todo.id = childSnapshot.key
                todoList.push(todo)
            })
            setTodo(todoList)
        }
    const todosListener = onValue(todoRef, onDataChange);
    return ()=> {
        todosListener()
    }
    },[])

    //add to database Realtime
    const addTodo = async(todoText:string) => {
        try {
            const todoRef = ref(database,"todos")
            await push(todoRef, {textTodo:todoText})
        } catch (error) {
            console.log("Error Add Todo ❌❌")
        }
    }

    //Update Todos to database Realtime
    const updateTodo = async(id: string, newTodoText:string) => {
        try {
            await update(ref(database,`todos/${id}`), {textTodo:newTodoText});
            setEditingTodo(null)


        } catch (error) {
            console.log("Error Update Todo ❌❌")
        }
    }

    // Start Editing the todo function
    const startEditingTodo = (todo: Todos) => {
        setEditingTodo(todo)
    }

    // Delete The todo
    const deleteTodo = async (id: string) => {
        if(confirm("Sure you want to delete this item")){
            try {
                await remove(ref(database,`todos/${id}`))
            } catch (error) {
                console.log("Error Delete Todo ❌❌")
            }
        }
    }
    return {
        todo,
        editingTodo,
        addTodo,
        updateTodo,
        startEditingTodo,
        deleteTodo
    }
}