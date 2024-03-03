import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link';
import image from '../../../assets/COA.png'
import Bg from "@images/assets/orc-logo-head.png"
import { useRouter } from 'next/navigation';

export default function Header() {
   const router = useRouter();
   const [showDrop, setshowDrop] = useState(false)
   const [scrollheight, setscrollheight] = useState(0)
   const [isScrolled, setisScrolled] = useState(false)
   let navdrop = useRef('navdrop')
   let paddednav = useRef('paddednav')
   let favimage = useRef('favimage')

   useLayoutEffect(() => {
      if (showDrop) {
         navdrop.current.style.height = `${scrollheight}.px`
      } else {
         navdrop.current.style.height = 0
      }
   }, [showDrop])

   useEffect(() => {
      let setScrolledEffect = () => {
         if (window.scrollY > 0) {
            paddednav.current.classList.remove('addpadding')
            favimage.current.style.height = '2rem'
            favimage.current.style.width = '2.5rem'
         } else {
            paddednav.current.classList.add('addpadding')
            favimage.current.style.height = '3rem'
            favimage.current.style.width = '3.5rem'
         }
      }
      window.addEventListener('scroll', setScrolledEffect, true);
      return () => {
         window.removeEventListener('scroll', setScrolledEffect, true);
      };

   }, [])
   useEffect(() => {
      setscrollheight(navdrop.current.scrollHeight)
   }, [])

   const goToLogin = () => {
      router.push('/login')
   }

   return (
      <div className=' text-gray-500 sticky top-0 z-50 bg-gray-50/50 backdrop-blur-lg'>
         <div className='relative'>
            <div className='container mx-auto  px-5 '>
               <nav className='flex justify-between items-center transition-[padding] duration-500 ' ref={paddednav} >
                  <span className='flex gap-3 items-center w-max grow  '>
                     <img src='/images/judicialservice.jpeg' ref={favimage} alt="" className=' bg-blend-sreen rounded-full aspect-square h-12 w-14 transition-all duration-500' />
                     <span className='text-sm'><h3 className='inline text-gray-600 font-medium text-base'> Office of the Registrar of Companies </h3></span>
                  </span>
                  <span className='inline md:hidden'>
                     Menu Icon
                     {/* <MenuIcon className='cursor-pointer' onClick={() => setshowDrop(!showDrop)} /> */}
                  </span>
                  <div className=' text-sm'>
                     <div className='hidden md:flex items-center'>
                        <Link href='/'
                           className=' hover:text-blue-600 inline-block duration-200 py-5 px-4'
                        >Home</Link>
                        <Link href="/login" className='p-2  rounded-lg px-5 text-sm '>Login</Link>
                        <Link href="/sign-up" className='p-2 ml-3 rounded-lg px-5 bg-blue-600 text-sm text-white'>sign up</Link>

                     </div>
                  </div>

               </nav>
            </div >
         </div >
         {/* Mobile view */}
         < div ref={navdrop} className={`absolute  md:hidden flex flex-col bg-black/90 backdrop-blur-md text-white w-full items-center text-sm shadow-md overflow-hidden transition-[height] duration-300 h-0 `
         }>
            <Link href='/' onClick={() => setshowDrop(!showDrop)} className='bg-gray-800 pl-5  linkitem inline-block duration-200 py-3 px-4  w-full hover:text-black'>Home</Link>
            <Link href='/contact' onClick={() => setshowDrop(!showDrop)} className='bg-gray-500 pl-5  linkitem  inline-block py-3 px-4  w-full hover:text-black'>Contact</Link>
            <Link href='/services' onClick={() => setshowDrop(!showDrop)} className='bg-gray-800 pl-5  linkitem  inline-block py-3 px-4  w-full hover:text-black'>Services</Link>
            <Link href='/Login' onClick={() => setshowDrop(!showDrop)} className='bg-gray-500 pl-5  linkitem  inline-block py-3 px-4 w-full hover:text-black'>Login</Link>
            <Link href='/signup' onClick={() => setshowDrop(!showDrop)} className='bg-gray-800 pl-5  linkitem  inline-block py-3 px-4 w-full hover:text-black '>sign up</Link>
         </div >

      </div >
   )
}