import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiAlignRight } from "react-icons/bi";
export default function header() {
  return (
    <div className=' py-2 md:px-[60px] px-[20px] flex justify-between items-center w-full absolute'>
        <div className=' flex'>
            <Image src='/logo.webp' alt='Panaverse' width={120} height={120} />
        </div>
        <div className='flex py-2'>

            <ul className='hidden md:flex space-x-10 font-semibold items-center'>
                <li className='hover:underline'><Link href='/'>Home</Link></li>
                <li className='hover:underline'><Link href='/'>Explore</Link></li>
                <li className='hover:underline'><Link href='/'>About</Link></li>
                <li className='hover:underline'><Link href='/'>Contact</Link></li>
                <div>
                  <button className='px-6 py-2 bg-green-600 hover:bg-green-900 rounded-xl text-xl font-semibold text-white' >Apply</button>
                </div>
            </ul>

        </div>
        <div className='static md:hidden text-2xl'><BiAlignRight/></div>
    </div>
  )
}
