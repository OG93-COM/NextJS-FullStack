"use server"

import { revalidatePath } from "next/cache";
import prisma from "./db"

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