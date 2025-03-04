"use server";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import { AccountType } from "user";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/lib";

export async function createAccount(
  prevState: AccountType,
  formData: FormData
) {
  const data = {
    email: formData.get("email") as string,
    userName: formData.get("userName") as string,
    password: formData.get("password") as string,
    passwordConfirm: formData.get("passwordConfirm"),
    github_id: formData.get("github_id"),
    create_at: formData.get("create_at"),
    update_at: formData.get("update_at"),
  };
  const email = await db.user.findUnique({
    where: {
      email: data.email,
    },
    select: {
      id: true,
    },
  });
  if (email) {
    return {
      state: false,
      msg: "이미 존재한 이메일 입니다",
    };
  }
  if (data.password !== data.passwordConfirm) {
    return {
      state: false,
      msg: "비밀번호를 올바르게 입력해주세요",
    };
  }
  const hashedPassword = await bcrypt.hash(data.password, 12);
  const session = await getSession();
  
  const response = await db.user.create({
    data: {
      email: data.email,
      userName: data.userName,
      password: hashedPassword,
    },
    select: {
      id: true,
    },
  });
  //@ts-ignore
  session.id = response.id;
  await session.save();
  redirect("/");
}
