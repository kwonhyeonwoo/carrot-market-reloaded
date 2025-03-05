"use client"
import { Section, Title, TitleWrapper, Wrapper, Form } from './style'
import AuthInput from '@/components/InputField/AuthInput/AuthInput';
import AuthButton from '@/components/Button/AuthButton/AuthButton';
import SocialButton from '@/components/SocialButton/SocialButton';
import { useActionState } from 'react';
import { loginSubmit } from './action';
import { getServerSession } from "next-auth";
import { authOptions } from '../api/auth/[...nextauth]/route';

const Page =async () => {
    const [state, action] = useActionState(loginSubmit, null);
    //   const loginData = await getServerSession(authOptions);
    // console.log("loginData", loginData);
    return (
        <Wrapper>
            <Section>
                <TitleWrapper>
                    <Title>Hello</Title>
                    <Title>Login in with email and password</Title>
                </TitleWrapper>
                <Form action={action}>
                    {loginArr.map(({ name, type, placeholder }, idx) => (
                        <AuthInput
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            key={idx}
                        />
                    ))}
                    <AuthButton text='Login' />
                </Form>
                <SocialButton />
            </Section>
        </Wrapper>
    )
}

export default Page;

const loginArr = [
    {
        name: "email",
        type: "email",
        placeholder: "Email"
    },
    {
        name: "password",
        type: "password",
        placeholder: "Password"
    }
]