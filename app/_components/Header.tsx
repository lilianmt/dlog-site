import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <nav>
      <div>
        <Link href="/">
          <Image
            src="/./_asets/dlog.png"
            alt="Logo"
            width={300}
            height={200}
            className='cursor-pointer'
            priority
          />
        </Link>
      </div> 
    </nav>
  )
}

export default Header