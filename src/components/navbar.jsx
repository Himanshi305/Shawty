'use client'
import React from 'react';
import Link from "next/link";

const navbar = () => {
  return (
    <div className='relative h-10 flex justify-between px-5 items-center top-2 shadow-lg'>
        <Link href="/" className="logo font-bold text-3xl text-pink-600 ">Shawty</Link>
        <ul className='justify-center items-center flex gap-40 border-4 border-black rounded-3xl p-2 text-pink-500'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Me</li></Link>
        </ul>
        <div className='flex justify-center gap-5'>
            <Link href="/shorten" className='bg-white rounded-2xl p-2 font-bold text-black'><button>Try now</button></Link>
            <Link href="https://github.com/Himanshi305" className='bg-white rounded-2xl p-2 font-bold text-black'><button>Github</button></Link>
        </div>
    </div>
  )
}

export default navbar
