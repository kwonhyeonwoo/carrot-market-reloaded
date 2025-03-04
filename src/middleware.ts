import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/lib";

export async function middleware(req:NextRequest,res:NextResponse){
    const session = await getSession();
    if(session === undefined){
        console.log('?')
       return NextResponse.redirect(new URL('/'))
    }
    // console.log(req.url)
}