import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
import Google from "next-auth/providers/google";


export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  return {
    providers: [Google],
  };
});
