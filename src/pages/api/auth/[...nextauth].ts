import { signIn } from "@/utils/db/service";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                confirmpassword: { label: "Confirm Password", type: "password" },
            },
            async authorize(credentials:any) {
                const { email, password} = credentials as {
                    username: string;
                    email: string;
                    password: string;
                    confirmpassword: string;
                }
                const user : any = await signIn({email});
                if(user){
                    console.log(user);
                    console.log(password);
                    console.log(user.email)
                    console.log(user.userName)
                    console.log(user.userPassword)
                    const passwordConfirm = await compare(password, user.userPassword);
                    if(password===user.userPassword){
                        return user;
                    }
                    else{
                        return null;
                    }
                    
                }
                else{
                    return null;
                }

            },
        })
    ],
    callbacks: {
        jwt({token, account, profile, user} : any) {
            if(account?.provider === "credentials") {
                token.email = user.email;
                token.username = user.username;
            }

        
            return token;
        },
        async session({session, token} : any)  {
            if("email" in token) {
                session.user.email = token.email;
            }
            if("username" in token) {
                session.user.username = token.username;
            }
            console.log(session);
            return session;
        }
    },
    pages: {
        signIn: "/auth/login",

    },
}

export default NextAuth(authOptions);