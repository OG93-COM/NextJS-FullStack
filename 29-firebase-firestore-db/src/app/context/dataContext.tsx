"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { collection, onSnapshot, doc, addDoc } from "firebase/firestore"
import {db} from '../db/firebaseConfig'
import {DataType, DbContextType} from '../Types/useTypes'
import { toast } from 'react-toastify';


const MembersContext = createContext<DbContextType | null>(null)

export const useFirebase = () => {
    const context = useContext(MembersContext)
    if(!context) {
        throw new Error("Error When creating the context ❌")
    }
    return context
}

export const MembersProvider : React.FC<{children: React.ReactNode}> = ({children}) => {
    const [members, setMembers] = useState<DataType[]>([]);
    useEffect(()=>{
        const unsubscribe = onSnapshot(collection(db,"members"), (snapshot) => {
            const membersData:DataType[] = []
            snapshot.forEach((doc) => {
                membersData.push({id: doc.id, ...doc.data()} as DataType)
            })
            setMembers(membersData)
        })
        return () => unsubscribe()
    },[])

    const addMember = async (membersData : Omit<DataType, "id"> & {image:string}) => {
        try {
            const docRef = await addDoc(collection(db, "members"), membersData)
            const newMember:DataType = {id:docRef.id, ...membersData}
            setMembers([...members, newMember ])
            toast.success("member Added ✅")
        } catch (error) {
            console.log("Error Add Member ❌", error)
        }
    }

    const value = {
        members,
        addMember
    }
    return <MembersContext.Provider value={value}>{children}</MembersContext.Provider>
}