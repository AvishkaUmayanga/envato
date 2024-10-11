import React from 'react'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

interface SocialData{
  logo:JSX.Element,
  name: string
}

const TeamSocialData = () => {
  const socialLogo: SocialData[] = [{logo:<Facebook />, name:'Facebook'}, {logo:<Twitter/>, name:'Twitter'}, {logo:<Instagram />, name:'Instagram'}, {logo:<Mail />,name: 'Mail'} ];
  return (
    <>
    {socialLogo?.map(data => (
      <div key={data.name} className=" flex  group gap-0.5">
        <div className="bg-black text-yellow p-1 cursor-pointer hover:animate-pulse">
          {data.logo}
        </div>
        <div className=" bg-black text-white text-xs p-1 w-full text-center hidden group-hover:flex items-center justify-center">
          {data.name}
        </div>
      </div> 
    ))}
    </>
  )
}

export default TeamSocialData