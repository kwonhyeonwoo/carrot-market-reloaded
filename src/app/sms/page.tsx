import React from 'react'
import { Section, Wrapper, Form, TitleWrapper, Title } from "./style";
import AuthInput from '@/components/InputField/AuthInput/AuthInput';
import AuthButton from '@/components/Button/AuthButton/AuthButton';
import SocialButton from '@/components/SocialButton/SocialButton';

const page = () => {
  return (
    <Wrapper>
      <Section>
        <TitleWrapper>
          <Title>SMS Login</Title>
          <Title>Verify your phone numbeer.</Title>
        </TitleWrapper>
        <Form>
          {smsInputArr.map(({name,placeholder,type},idx)=>(
            <AuthInput
              name={name}
              placeholder={placeholder}
              type={type}
              key={idx}
            />
          ))}
          <AuthButton isLoading={false} text="Verify"/>
        </Form>
        <SocialButton/>
      </Section>
    </Wrapper>
  )
}

export default page;

const smsInputArr=[
  {
    name:"phone",
    placeholder:"Phone Number",
    type:"text"
  },
  {
    name:"verify",
    placeholder:"Verification Code",
    type:"number"
  }
]