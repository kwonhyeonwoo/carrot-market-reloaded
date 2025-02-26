import React from 'react'
import { Input } from './style';

interface Props{
    name:string;
    placeholder:string;
    type:string;
}

const AuthInput = ({name,placeholder,type}:Props) => {
  return (
    <Input
        name={name}
        placeholder={placeholder}
        type={type}
        required
    />
  )
}

export default AuthInput