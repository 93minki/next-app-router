import { authOptions } from "../../../../lib/auth";
import NextAuth from "next-auth";

console.log("routes running!");
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
