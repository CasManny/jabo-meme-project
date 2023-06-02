"use client"
import React, { useState, useEffect } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { HideImageTwoTone } from '@mui/icons-material';

const MoveToTop = () => {
    const [scrolltoTop, setScrolltoTop] = useState(false)

    const handleScroll = () => {
        window.scrollTo(0,0)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScrolltoTop(true)
            } else {
                setScrolltoTop(false)
            }
        })
    }, [scrolltoTop])
    
 
    return (
        <>
        {
            scrolltoTop &&
      <div onClick={handleScroll} className='bg-red-600 text-white fixed cursor-pointer flex items-center justify-center right-5 bottom-5 z-50 w-12 h-12 rounded-full animate-bounce'>
          <ExpandLessIcon fontSize='large' />
    </div>
        }
        
        </>
    
        
  )
}
 
export default MoveToTop 