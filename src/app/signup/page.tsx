"use client"
import React, { useActionState } from "react";
import { Form, Section, Title, TitleWrapper, Wrapper } from "./style";
import AuthInput from "@/components/InputField/AuthInput/AuthInput";
import AuthButton from "@/components/Button/AuthButton/AuthButton";
import SocialButton from "@/components/SocialButton/SocialButton";
import { createAccount } from "./action";
const initialState = { state: false, message: "", data: undefined };

const SignupPage = () => {
  const [state, action] = useActionState(createAccount, initialState);
  console.log('state', state)
  return (
    <Wrapper>
      <Section>
        <TitleWrapper>
          <Title>Hello!</Title>
          <Title>Fill in the form below to join!</Title>
        </TitleWrapper>
        <Form action={action}>
          {signupInputArr.map(({ name, placeholder, type }, idx) => (
            <AuthInput
              key={idx}
              name={name}
              placeholder={placeholder}
              type={type}
            />
          ))}
          <AuthButton text="Create Account" />
        </Form>
        <SocialButton />
      </Section>
    </Wrapper>
  );
};

export default SignupPage;

const signupInputArr = [
  {
    name: "email",
    placeholder: "Email",
    type: "email",
  },
  {
    name: "userName",
    placeholder: "Username",
    type: "text",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
  },
  {
    name: "passwordConfirm",
    placeholder: "Confirm Password",
    type: "password",
  },
];
