'use client'
import React, { useEffect, useState } from 'react'
import logo from '@/../public/images/traLogo.png'
import Image from 'next/image'
import {  Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


interface SocialData{
  logo:JSX.Element,
  name: string
}

const NavBar = () => {
  useEffect(()=> {})
  const pathname = usePathname();
  console.log(pathname)
  const socialLogo: SocialData[] = [{logo:<Facebook />, name:'Facebook'}, {logo:<Twitter/>, name:'Twitter'}, {logo:<Instagram />, name:'Instagram'}, {logo:<Linkedin />, name: 'Linkedin'} ];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <div className=' flex justify-between mx-16  max-xmd:mx-0 items-center max-xmd:px-14 max-md:px-5 z-50 max-xmd:bg-black max-xmd:fixed right-0 left-0'>
      <div className=' bg-black max-w-16 max-md:w'>
        <Image src={logo} alt='TRA logo' />
      </div>
      <ul className=' flex gap-10 max-xmd:hidden'>
      {['home', 'about', 'services', 'projects', 'fAQ', 'blog', 'shop', 'contact'].map((data, index) => (
        <Link href={data} key={index} className=' group'>
          <h4 className={`${pathname === '/'+data ? 'text-yellow' : ' text-white'} capitalize font-medium`}>{data}</h4>
          <span ><hr className={`${pathname === '/'+data ? 'w-4 ' : 'w-0' } group-hover:w-4 h-1 border-none bg-yellow w-0 duration-300`} /></span>
        </Link>
      ))}
      </ul>
      <div className=' border p-2 xmd:hidden text-white'>
        <Menu onClick={toggleMenu} />
      </div>
    </div>
    <div className={`${isMenuOpen ? ' flex' : 'hidden'} bg-black fixed w-full h-full z-40 bg-opacity-40 `}> </div>
    <div className={`${ isMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-black z-50 fixed w-full h-full  md:max-w-96 right-0 pt-2 flex flex-col justify-between pb-5 max-w-80 duration-300`} >
        <div>
          <div className=' w-full flex justify-end px-2'>
            <div className=' border p-2'>
              <X onClick={toggleMenu} className=' text-white '/>
            </div>
          </div>
          <ul className=' flex flex-col mt-4'>
            {['home', 'about', 'services', 'projects', 'fAQ', 'blog', 'shop', 'contact'].map((data, index) => (
               <Link href={data} key={index} className={`${pathname === '/'+data ? 'bg-yellow' : ''} font-medium text-white border-b py-3 text-lg px-5`} >
                {data}
               </Link>
          ))}
          </ul>
        </div>
        <div className=' flex flex-col items-center gap-2'>
          <div className=' flex gap-5'>
            {socialLogo.map(data => (
              <div key={data.name} className='text-yellow'>
                {data.logo} 
              </div>
            ))}
          </div>
          <p className=' text-white'>Copyright © 2024</p>
        </div>
      </div>
    </>
  )
}

export default NavBar