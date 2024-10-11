import React from 'react'
import YellowLine from '../yellow line/YellowLine'
import icon1 from '@/../public/images/icon1.png'
import icon2 from '@/../public/images/icon2.png'
import icon3 from '@/../public/images/icon3.png'
import icon4 from '@/../public/images/icon4.png'
import ServicesCard from '../services card/ServicesCard'
import { ChevronRight } from 'lucide-react'

const OurServices = () => {
  return (
    <div className=' flex flex-col gap-5'>
      <div className='flex gap-5 max-md:flex-col'>
        <div className=' bg-black flex items-center text-white gap-5 max-md:mr-5 max-md:py-8 md:w-[55%] '>
          <YellowLine />
          <h3>Our Services</h3>
        </div>
        <div className='grid grid-cols-2 mr-20  max-lg:mr-10 max-md:grid-cols-1 max-md:mr-0 gap-5 w-full'>
          <ServicesCard imageUrl={icon1} imageAlt='icon 1' title='Interior Design' bgImage='interior'/>
          <ServicesCard imageUrl={icon2} imageAlt='icon 2' title='Home Decoration' bgImage='home'/>
        </div> 
      </div>
      <div className=' flex gap-5 max-md:flex-col'>
        <div className='grid grid-cols-2  gap-5 ml-16 max-lg:ml-10 max-md:grid-cols-1 max-md:ml-0 w-full'>
          <ServicesCard imageUrl={icon3} imageAlt='icon 3' title='Exterior Design' bgImage='exterior'/>
          <ServicesCard imageUrl={icon4} imageAlt='icon 4' title='Kitchen Decoration' bgImage='kitchen'/>
        </div>
        <div className=' bg-black flex justify-center text-yellow gap-5 p-10 flex-col max-md:ml-5 md:w-[55%]'>
          <h3>Contact Us<br/> and make your dream<br/> come true!</h3>
          <button className=" flex bg-yellow text-black max-w-fit px-6 py-2 gap-2 items-center hover:scale-110 duration-200 hover:bg-white">
            <p className=" opacity-100 font-semibold text-sm capitalize">Get a free quote</p>
            <span className=" bg-black text-yellow p-1">
            <ChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurServices
