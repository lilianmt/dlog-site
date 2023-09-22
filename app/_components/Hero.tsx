import React from 'react'
import truck from '../_assets/hero.jpg'
import Image from 'next/image'

function Hero() {
  return (

    <div className='flex items-center'>
      <div className='fixed -z-10 w-screen h-screen'>
        <Image
          alt="Hero image"
          src={truck}
          layout='fill'
          quality={100}
          objectFit='cover'
        />   
      </div>
      <div className='flex-col'>
        <h1 className='text-3xl font-bold '>
          Find, book or rent your logistics solutions right away!
        </h1>
        <p>
          Experience effortless booking and safe delivery.
        </p>
    </div>
    </div>
  )
}

export default Hero