import { Facebook, MapPin, Twitter, Instagram, Youtube, Mail } from 'lucide-react'
import Image from 'next/image';
import traLogo from '@/../public/images/traLogo.png';

interface SocialData{
  logo:JSX.Element,
  name: string
}

const Footer = () => {
  const socialLogo: SocialData[] = [{logo:<Facebook />, name:'Facebook'}, {logo:<Twitter/>, name:'Twitter'}, {logo:<Instagram />, name:'Instagram'}, {logo:<Youtube />, name: 'Youtube'}, {logo:<Mail />,name: 'Mail'} ];
  return (
    <div className=' flex flex-col text-center mt-40'>
      <div className=' bg-yellow w-full flex flex-col items-center gap-14 pb-10'>
        <div className=' bg-black w-fit px-7 pb-10 pt-24 -mt-20'>
          <Image src={traLogo} alt='TRA Logo' className=' max-w-36 '/>
        </div>
        <div className=' flex justify-center gap-5'>
          { socialLogo?.map((data) => (          
            <div key={data.name} className=' flex flex-col  relative items-center group' >
              <div className=' bg-black text-white absolute py-1 px-2 opacity-0 group-hover:opacity-100 duration-300'>
                {data.name}
              </div>
              <div className=' mt-10 bg-black  w-fit  text-white p-3 hover:bg-white hover:text-black '>
                {data.logo}
              </div>
            </div>
          ))}
        </div>
        <div className=' flex items-center justify-center gap-5'>
          <MapPin />
          <h5 className=' text-sm'>No.23 Street Ave. New York - USA 99220</h5>
        </div>
      </div>
      <div className=' bg-black text-white py-7 w-full'>
        <p className='text-sm'>Copyright © 2024 Xtra Theme. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer