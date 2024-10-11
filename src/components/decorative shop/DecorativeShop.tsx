import shopImage from '@/../public/images/decorativeShop.jpg'
import Image from 'next/image'
import DecorativeCard from '../decorative card/DecorativeCard'

const DecorativeShop = () => {
  return (
    <div className=' relative '>
      <div className=' absolute'></div>
      <div className='  mx-16 relative max-md:mx-5'>
        <Image src={shopImage} alt='shop' />
        <div className=' absolute top-0  w-full h-full flex justify-center lg:pt-44 md:pt-20 pt-8'>
          <div className=' w-5/6 h-full '>
            <div className=' w-full flex justify-between h-1/2'>
              <DecorativeCard title='Skate Board' price={117.00}/>
              <div className=' flex  w-1/2  justify-between self-end h-5/6'>
                <DecorativeCard title='Calligraphy Art' price={500.00}/>
                <div className='  flex self-end'>
                  <DecorativeCard title='Iron Lamp' price={239.00}/>
                </div>
              </div>
            </div>
            <div className=' h-1/4 w-1/2 justify-between flex ml-20'>
              <DecorativeCard title='Yellow Chair' price={199.00}/>
              <div className=' flex self-end'>
                <DecorativeCard title='Lemon' price={10.00}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DecorativeShop