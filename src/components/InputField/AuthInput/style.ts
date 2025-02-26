"use client"
import styled from "styled-components";

export const Input = styled.input`
    padding:8px;
    border-radius: 5px;
    border:none;
    border:1px solid white;
    background-color: black;
    color:white;
    font-size: 14px;
    &:focus{
        outline:none;
        border:1px solid #FA7000;
    }
`