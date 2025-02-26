import React from 'react'
import { AuthBtn } from './style';
interface Props{
    text:string;
    isLoading:boolean;
}

const AuthButton = ({text,isLoading}:Props) => {
  return (
    <AuthBtn>{isLoading ? "":text}</AuthBtn>
  )
}

export default AuthButton