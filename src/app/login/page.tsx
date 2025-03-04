"use client"
import { Section, Title, TitleWrapper, Wrapper, Form } from './style'
import AuthInput from '@/components/InputField/AuthInput/AuthInput';
import AuthButton from '@/components/Button/AuthButton/AuthButton';
import SocialButton from '@/components/SocialButton/SocialButton';
import { useActionState } from 'react';
import { loginSubmit } from './action';

const Page = () => {
    const [state, action] = useActionState(loginSubmit, null);
    console.log('state', state)
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