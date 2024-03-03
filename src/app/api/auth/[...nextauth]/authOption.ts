import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { authService } from "@app/providers/Authserviceprovider/userAuthentication";
import { cookies } from "next/headers";
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials): Promise<any> {
                const { email, password } = credentials as { email: string, password: string };
                try {
                    const user = await authService.authenticate(email, password)
                    return user;
                } catch (error) {
                    throw (error)
                }
            },
        }),
        GoogleProvider({
            clientId: "160563412651-jqk8h0tj6i7qhp710sulsrcig0vijjbj.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],

    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email
                token.accessToken = user.accessToken
                token.refreshToken = user.refreshToken
                token.name = user.name
                token.user = user
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user
            return session;
        },

    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV == "development",
    pages: {
        signIn: "/user/login",
        error: '/user/login'
    },

}
