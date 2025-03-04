import { getIronSession } from "iron-session"
import { cookies } from "next/headers";

interface SessionType{
  id?:number
}

export const getSession = async()=>{
    const session = await getIronSession<SessionType>(await cookies(), {
      cookieName: "user_password",
      password: process.env.COOKIE_SESSION!,
    });
    console.log("first", session.id);
    return session;
}