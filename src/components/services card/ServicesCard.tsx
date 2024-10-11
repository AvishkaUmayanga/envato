import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface CardProps {
    title: string;
    imageUrl: StaticImageData;
    imageAlt: string;
    bgImage: string;
}

const ServicesCard = (props: CardProps) => {
  const bgPatterns: { [key: string]: string } = {
    'kitchen': 'bg-kitchen-pattern',
    'interior': 'bg-interior-pattern',
    'exterior': 'bg-exterior-pattern',
    'home': 'bg-home-pattern',
  };
  const backgroundClass = bgPatterns[props.bgImage] || '';
  return (
    <div className=' relative  h-80 max-md:mx-5'>
      <div className=' absolute w-full h-80 '>
       <div className=' relative w-full h-full preserve-3d transition-all hover:rotate-y-180 duration-700'>
         <div className=' absolute bg-yellow w-full h-full backface-hidden flex flex-col justify-center items-center gap-5 text-center'>
           <Image src={props.imageUrl} alt={props.imageAlt} />
           <h3>{props.title}</h3>
         </div>
         <div className={`absolute  w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center gap-5 text-center p-5 ${backgroundClass}  bg-cover`}>
         <div className="absolute inset-0 bg-black opacity-20 w-full h-full"></div>
            <h3 className=' text-yellow  z-10'>{props.title}</h3>
            <p className='text-white z-10 '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condi mentum</p>
            <button className=' bg-yellow p-2 hover:bg-white duration-200 z-10 font-medium'>Learn More</button>
         </div>
       </div>
      </div>
    </div>
  )
}

export default ServicesCard