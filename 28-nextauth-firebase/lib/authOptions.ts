import { NextAuthOptions } from "next-auth";
import GithubProvider from '../node_modules/next-auth/providers/github'
import GoogleProvider from '../node_modules/next-auth/providers/google'
import CredentialsProvider from '../node_modules/next-auth/providers/credentials'
import {auth} from '../src/app/db/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";


export const authOptions: NextAuthOptions ={
    providers:[
        GithubProvider({
            clientId: process.env.CLIENT_ID_GITHUB as string,
            clientSecret: process.env.CLIENT_SECRET_GITHUB as string,
        }),
        GoogleProvider({
            clientId: process.env.CLIENT_ID_GOOGLE as string,
            clientSecret: process.env.CLIENT_SECRET_GOOGLE as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email:{label:"Email", type: "email"},
                password:{label:"Password", type: "password"},
            },
            async authorize(credentials: Record<"email"|"password", string> | undefined, req:any){
                if(!credentials){
                    return null;
                }
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, credentials.email , credentials.password)
                    const user = userCredential.user
                    if(user){
                        return {
                            id: user.uid,
                            email: user.email,
                        };
                    } else {
                        return null;
                    }
                } catch (error: any) {
                    console.error(error.message)
                    return null;
                }
            }
        })

    ],
    callbacks:{
        jwt: async({user,token,trigger,session}) => {
            if(trigger === "update"){
                return {...token, ...session.user}
            }
            return {...token, ...user}
        }
    },
    pages: {
        signIn:"/login"
    },
    secret: process.env.NEXTAUTH_SECRET as string
}