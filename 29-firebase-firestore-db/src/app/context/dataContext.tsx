"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { collection, onSnapshot, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
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

    // Function Add Member
    const addMember = async (membersData : Omit<DataType, "id"> & {image:string}) => {
        try {
            const docRef = await addDoc(collection(db, "members"), membersData)
            const newMember:DataType = {id:docRef.id, ...membersData}
            setMembers([...members, newMember ])
            toast.success(`Member ${membersData.firstName} Added`)
        } catch (error) {
            console.log("Error Add Member ❌", error)
        }
    }

    // Function Update Member
    const updateMember = async (member:DataType) => {
        try {
            const memberRef = doc(db, "members", member.id);
            await updateDoc(memberRef, member)
            setMembers(members.map((m) => m.id === member.id ? {...m, ...member} : m))
            toast.success(`Member ${member.firstName} Updated` )
        } catch (error) {
            console.log("Error Add Member ❌", error)
        }
    }

    // Function Delete Member
    const deleteMember = async (id:string) => {
        if(confirm("Sure You want to delete this member?")) {
            try {
                await deleteDoc(doc(db, "members", id))
                setMembers(members.filter((m) => m.id !== id))
                toast.success("Member Deleted" )
            } catch (error) {
                console.log("Error Add Member ❌", error)
            }
        }
    }

    const value = {
        members,
        addMember,
        updateMember,
        deleteMember,
    }
    return <MembersContext.Provider value={value}>{children}</MembersContext.Provider>
}