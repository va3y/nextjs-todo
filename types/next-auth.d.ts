import NextAuth from "next-auth";
import { Session as InitSession } from "next-auth";

declare module "next-auth" {
  interface Session extends InitSession {
    id: string;
  }
}
