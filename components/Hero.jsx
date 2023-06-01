"use client"

import React from 'react'
import JagoImage from '../public/assets/1683568734640.png'
import Image from 'next/image'
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import ParticlesPage from './ParticlesPage';
import TypeIt from "typeit-react";



const Hero = () => {
  return (
    <>

        <ParticlesPage  />
    <div className='hero-section mt-4 container mx-auto flex flex-col items-center'>
      <h1 className='text-3xl my-4 font-extrabold text-white text-center'>Join the rooster revolution with $Jago!</h1>
        <p className='font-bold jabo-white text-center'>
          <TypeIt options={{ loop: true }}>
          $Jago - the crypto coin that's cock-a-doodle-dooing its way to the top!"

          </TypeIt>
        </p>
      <div className="jago-image-container">
        <Image src={JagoImage} className='w-[23rem] mx-auto'/>
      </div>
      <div className="jabo-action-container  flex items-center">
        
        <button className='telegram-color jabo-border-color mx-3 border-2'>
          <Link href={'https://twitter.com/jagocoins?t=FWU4sLtWVJCv2LLWiFJHdw&s=08'} className='flex p-2 items-center border rounded-sm'>
            <TwitterIcon />
            <p>Follow Twitter</p>
          </Link>
        </button>
        <button className='telegram-color jabo-border-color mx-3 border-2'>
          <Link href={'https://t.me/jagocoin'} className='flex p-2 items-center border rounded-sm'>
            <TelegramIcon />
            <p className='text-sm'>join telegram</p>
          </Link>
        </button>
      </div>
    </div> 
    </>
  )
}

export default Hero