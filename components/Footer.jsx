"use client"
import React from 'react'
import jagoImage from '../public/assets/1683568734640.png'
import Image from 'next/image'
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

const Footer = () => {
  return (
      <div className='bg-black  w-full '>
          <div className="container text-white sm:items-center lg:flex sm:grid place-items-center sm:grid-cols-1 justify-between p-5 items-center">
          <div className="flex items-center ">
              <Image src={jagoImage} height={50} width={50} />
              <p className="text-2xl ml-2 ">JaGocoin</p>
          </div>
          <div className="flex items-center ">
              <p className="text-2xl ">&copy;2023 <span>Jagocoin</span></p>
          </div>
          <div className="flex items-center">
              <Link href={'https://t.me/jagocoin'} className='flex p-2 mx-2 items-center border rounded-sm'>
            <TelegramIcon />
          </Link>
              <Link href={'https://twitter.com/jagocoins?t=FWU4sLtWVJCv2LLWiFJHdw&s=08'} className='flex p-2 items-center border rounded-sm'>
            <TwitterIcon />
          </Link>
          </div>
              
          </div>
    </div>
  )
}

export default Footer