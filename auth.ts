import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./utils/db";
import { compareSync } from "bcrypt-ts";

declare module "next-auth" {
  interface User {
    role: string | {};
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role: string | {};
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", placeholder: "email" },
        password: { label: "Password", placeholder: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide login details");
        }

        const user = await prisma.user.findUnique({
          where: { email: email },
        });

        if (!user) {
          throw new Error("User with email does not exist");
        }

        const passwordMatch = compareSync(password, user.password);

        if (!passwordMatch) {
          throw new Error("Invalid password");
        }

        const userData = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email,
          state: user.state,
          gender: user.gender,
          role: user.role,
          displayPhoto: user.image,
        };

        return userData;
      },
    }),
  ],
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      session.expires = new Date(Date.now() + 20 * 60 * 1000) as any;
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.exp = Math.floor(Date.now() / 1000) + 20 * 60;
      }

      if (token.exp && Date.now() >= token.exp * 1000) {
        return {};
      }

      return token;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
