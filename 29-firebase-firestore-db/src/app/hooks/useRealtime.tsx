import { useEffect, useState } from "react";
import { database } from "../db/firebaseConfig";
import { push, ref, onValue } from "firebase/database";

interface Todos {
    id:string,
    textTodo:string,
}

export function useRealtime(){
    const [todo, setTodo] = useState<Todos[]>([])

    //Read from Database
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
            console.log(todoList)
        }
    const todosListener = onValue(todoRef, onDataChange);
    return ()=> {
        todosListener()
    }
    },[])

    //add to database
    const addTodo = async(todoText:string) => {
        try {
            const todoRef = ref(database,"todos")
            await push(todoRef, {textTodo:todoText})
        } catch (error) {
            console.log("Error Add Todo ❌❌")
        }
    }

    return {
        todo,
        addTodo
    }
}