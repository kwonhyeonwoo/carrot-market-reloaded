'use client'
import React from 'react'
import { AuthBtn } from './style';
import { useFormStatus } from 'react-dom';
interface Props {
  text: string;
}

const AuthButton = ({ text }: Props) => {
  const { pending } = useFormStatus();
  return (
    <AuthBtn disabled={pending}>{pending ? "로딩중..." : text}</AuthBtn>
  )
}

export default AuthButton