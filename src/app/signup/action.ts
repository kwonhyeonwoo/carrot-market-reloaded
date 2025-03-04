"use server"

import db from "@/lib/db";

import { AccountType } from "user";

export async function createAccount(prevState: AccountType, formData: FormData) {
    const data = {
        email: formData.get('email') as string | undefined,
        userName: formData.get('userName'),
        phone: formData.get('phone') as string | undefined,
        password: formData.get('password'),
        passwordConfirm: formData.get('passwordConfirm'),
        github_id: formData.get('github_id'),
        create_at: formData.get('create_at'),
        update_at: formData.get('update_at'),
    };

    const email = await db.user.findUnique({
        where: {
            email: data.email
        },
        select: {
            id: true
        }
    })
    const phone = await db.user.findUnique({
        where: {
            phone: data.phone,
        },
        select: {
            id: true
        }
    })
    if (email) {
        return {
            state: false,
            message: "이미 존재한 이메일 입니다"
        }
    }
    if (phone) {
        return {
            state: false,
            message: "이미 존재한 휴대폰 번호 입니다"
        }
    }

    return {
        data: {
            state: true,
            message: "회원가입이 완료되었습니다."
        }
    }
}