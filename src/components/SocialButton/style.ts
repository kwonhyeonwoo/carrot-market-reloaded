'use client'

import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    a{
        width: 100%;
        display: flex;
        border-radius: 5px;
        color:white;
        justify-content: center;
        align-items:center;
        background-color: #fa7000;
        column-gap:6px;
        padding:8px;
        box-sizing: border-box;
        font-size: 14px;
        span{
        }
        svg{
            width:20px;
            height:20px;
        }
    }
`

export const SocialLink = styled.a`

`