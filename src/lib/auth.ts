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
        console.log("credentials", credentials);
        try {
          const response = await axios.post(
            "http://127.0.0.1:1337/api/auth/local",
            {
              identifier: credentials?.email,
              password: credentials?.password,
            }
          );
          console.log("response data", response.data);
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
      console.log("session", session);
      console.log("token", token);
      return {
        ...session,
        jwt: token.jwt as unknown as any,
        user: token.user as unknown as any,
      };
    },
    jwt: async ({ token, user, session }) => {
      // const { jwt, user: userInfo } = user;

      console.log("tokennnn", token);

      if (user) {
        // const { jwt, user: userInfo } = user;
        const u = user as unknown as any;
        console.log("uuuuuu", u);
        return {
          ...token,
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
