import React from 'react'
import LinkButton from '../link button/LinkButton'
import { Mail } from 'lucide-react'
import YellowLine from '../yellow line/YellowLine'
import TeamCarousel from '../team carousel/TeamCarousel'

const OurTeam = () => {
  return (
    <div className=" flex">
      <YellowLine />
      <div className=" flex px-5 gap-20 max-lg:flex-col max-md:pr-10 w-[90%]">
        <div className=" flex flex-col gap-9 w-1/3 text-justify max-lg:w-full ">
          <div className="max-lg:text-center">
            <h3>our team</h3>
          </div>
          <p className=' sm:pr-20 lg:pr-3'>Interior designers must be highly skilled in order to create interior environments that are functional, safe.</p>
          <LinkButton btnText="contact uS" btnLogo={<Mail size={16} />} />
        </div>
        <div className='w-2/3 max-lg:w-full'>
          <TeamCarousel />
        </div>
      </div>
    </div>
  )
}

export default OurTeam