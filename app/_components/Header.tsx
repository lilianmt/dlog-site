import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../_assets/dlog.png'

function Header() {
  return (
    <nav className='bg-white bg-blur flex self-center max-w-[80%] min-w-fit px-5 py-5 mx-auto'>
      <div className='justify-between flex w-full px-5'>
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            className='cursor-pointer'
            priority
          />
        </Link>
        <div>
          <ul className='flex gap-5'>
            <Link href="">
              <li className='uppercase hover:border-b-2 border-slate-700'>About</li>
            </Link>
            <Link href="">
              <li className='uppercase hover:border-b-2 border-slate-700'>About</li>
            </Link>
            <Link href="">
              <li className='text-center uppercase hover:border-b-2 border-slate-700'>Contact Us</li>
            </Link>
          </ul>
        </div>
        <button className='text-center w-40 h-9 text-white rounded-xl bg-slate-800 hover:bg-slate-700'>
          Get a free quote
        </button>
      </div> 
    </nav>
  )
}

export default Header