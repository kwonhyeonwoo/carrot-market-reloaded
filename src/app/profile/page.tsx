import db from '@/lib/db'
import { getSession } from '@/lib/lib'
import { notFound, redirect } from 'next/navigation';
import React from 'react'


async  function getUser(){
    const session = await getSession();
    const user = await db.user.findUnique({
        where:{
            id:session.id
        },
    });
    if(user){
        return user;
    }
    console.log('first',user)
   
}
const page = async() => {
    const user =  await getUser();
    const handleLogout = async()=>{
        'use server'
        const session = await getSession();
        await session.destroy();
        return redirect('/')
    }
  return (
    <main>
      <p>{user?.userName}</p>
      <button style={{color:"red"}} onClick={handleLogout}>log out</button>
    </main>
  );
}

export default page