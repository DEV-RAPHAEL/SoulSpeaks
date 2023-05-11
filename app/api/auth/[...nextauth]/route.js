import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId : process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ], 
    callbacks: {
        async session({ session }){
            const sessionUser = await User.findOne({
                email : session.user.email
            })
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({profile}){
            try {   
                await connectToDB();
                // check if user exists
                const userExists = await User.findOne({
                    email:profile.email
                });
                // if not create one
                if(!userExists){
                    await User.create({
                        email: profile.email,
                        username : profile.name.split(" ")[0].replace(/[^\w]/g, '').toLowerCase(),
                        image: profile.picture
                    })   
                }
                return 1;

             } catch (error) {
                console.log(error);
                return false;
            }
        }
    }       
})
export { handler as GET, handler as POST };