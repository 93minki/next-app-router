import { LoginResponse } from "@/type/userInfo";
import axios from "axios";
import type { NextAuthOptions, DefaultSession, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            "http://127.0.0.1:1337/api/auth/local",
            {
              identifier: credentials?.email,
              password: credentials?.password,
            }
          );
          return response.data;
        } catch (error) {
          console.error("API Call Error", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          id: token.id,
          email: token.email,
        },
        jwt: token.jwt as unknown as any,
        userInfo: token.user as unknown as any,
      };
    },
    jwt: async ({ token, user, session }) => {
      // const { jwt, user: userInfo } = user;

      if (user) {
        // const { jwt, user: userInfo } = user;
        const u = user as unknown as any;
        return {
          ...token,
          id: u.user.id,
          email: u.user.email,
          jwt: u.jwt,
          user: {
            ...u.user,
          },
        };
      }
      return token;
    },
  },
};
