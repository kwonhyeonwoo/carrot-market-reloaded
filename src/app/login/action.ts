"use server";
import bcrypt from "bcrypt"
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/lib";

export async function loginSubmit(prevState: unknown, formData: FormData) {
    const data = {
        email:formData.get('email') as string,
        password:formData.get('password') as string
    };
    const user = await db.user.findUnique({
        where:{
            email:data.email,
        },
        select:{
            id:true,
            email:true,
            password:true
        }
    });
    const session = await getSession();
    const comparePassword = await bcrypt.compare(data.password, user?.password ?? "xxx") ;
    if(user){
        if(!user.email){
            return { state:false, message:"존재하지 않은 이메일 입니다."}
        }
    }
    if(!comparePassword){
        return {
            state:false,
            message:"비밀번호가 올바르지 않습니다."
        }
    };

    // @ts-ignore
    session.id = user?.id;
    await session.save();
    return redirect('/profile')
    
}
