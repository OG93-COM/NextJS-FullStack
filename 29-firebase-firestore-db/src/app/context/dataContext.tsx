"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { collection, onSnapshot, doc } from "firebase/firestore"
import {db} from '../db/firebaseConfig'
import {DataType, DbContextType} from '../Types/useTypes'

const MembersContext = createContext<DataType | null>(null)

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

    const value = {
        members
    }
    return <MembersContext.Provider value={value}>{children}</MembersContext.Provider>
}