import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/lib";

export async function middleware(req:NextRequest,res:NextResponse){
    const session = await getSession();
    console.log('hello')
    // console.log(req.url)
}

export const config ={
    matcher:["/"]
}