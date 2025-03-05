import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: "123ufjljslkjfkljlk!!```#@$Dfsdfaasd456789",
};

// ✅ HTTP 메서드별로 명시적으로 내보내기
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
