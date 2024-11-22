"use server"

import { revalidatePath } from "next/cache";
import prisma from "./db"
import { redirect } from "next/navigation";

export const getAllTasks = async () => {
    const allTasks = await prisma.task.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })
    return allTasks;
}

export const addTask = async(formData: FormData) => {
    await new Promise((resolve)=> setTimeout(resolve, 2000))
    const task = formData.get("task") as string;
    await prisma.task.create({
        data:{
            content:task
        }
    })
    revalidatePath("/")
}

export const deleteTask = async(formData: FormData) => {
    const id = formData.get("id") as string;
    await prisma.task.delete({
        where :{id}
    })
    revalidatePath("/")
}

export const getTaskById = async(id: string) => {
    const updatedTask = prisma.task.findUnique({
        where: {id}
    })
    return updatedTask;
}

export const updateTask = async (formData : FormData) => {
    try {
        const id = formData.get("id") as string;
        const task = formData.get("task") as string;
        const completed = formData.get("completed");

        if(task !== null){
            await prisma.task.update({
                where:{id},
                data:{content: task, completed: completed === "on"}
            })
        }

    } catch (error) {
        console.error("Cannot Update the task")
    } finally {
        redirect('/')
    }
}