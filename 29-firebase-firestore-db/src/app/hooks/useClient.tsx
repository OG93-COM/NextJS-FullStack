import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import {auth} from '../db/firebaseConfig'
import { useRouter } from "next/navigation";

const provider = new GoogleAuthProvider();

const useClientAuth = () => {
    const [user, setUser] = useState<User | null>(null)
    const [isFetch, setIsFetch] = useState<boolean>(true)
    const router = useRouter()

    // Create User with Firebase
    const signUp = async(email:string, password:string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
            router.push('/dashboard')
        } catch (error) {
            console.log("Error When Creating User")
        }
    }

    // SingIn with Firebase
    const signIn = async(email:string, password:string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
            router.push('/dashboard')
        } catch (error) {
            console.log("Error When SignIn")
        }
    }

    //SignIn With Google
    const loginWithGoogle = async ()=> {
        const result = await signInWithPopup(auth, provider)
        const user = result.user

        if(user){
            router.push('/dashboard')
        }
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user: User | null)=> {
            if(user){
                setUser(user)
                setIsFetch(false)
            }else {
                setUser(null)
                setIsFetch(false)
            }
        })
        return ()=> unsubscribe()
    },[])

    const redirectAuthenticated = ()=> {
        if(user){
            router.push('/dashboard')
        }
    }


    return {user, signUp, signIn, loginWithGoogle, redirectAuthenticated}

}

export default useClientAuth