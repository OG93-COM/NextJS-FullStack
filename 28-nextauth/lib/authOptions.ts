import { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions ={
    providers:[
        GithubProvider({
            clientId: process.env.CLIENT_ID_GITHUB as string,
            clientSecret: process.env.CLIENT_SECRET_GITHUB as string,
        }),
        GoogleProvider({
            clientId: process.env.CLIENT_ID_GOOGLE as string,
            clientSecret: process.env.CLIENT_SECRET_GOOGLE as string,
        })

    ],
    pages: {
        signIn:"/login"
    },
    secret: process.env.NEXTAUTH_SECRET as string
}