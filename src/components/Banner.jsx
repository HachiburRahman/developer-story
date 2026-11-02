"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router=useRouter()
    const handleBtn=()=>{
        const pass=prompt('Enter Your Password');
        if(pass=="1234")
        {
            router.push('/dashboard')
        }
       
    }
    return (
        <div className='bg-linear-60 from-sky-200 to-sky-500  text-center py-15 space-y-8'>
            <h1 className='text-6xl font-bold'>Welcome To Dev-Story</h1>
            <button onClick={handleBtn} className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:text-black font-semibold'>Share-Story</button>
        </div>
    );
};

export default Banner;