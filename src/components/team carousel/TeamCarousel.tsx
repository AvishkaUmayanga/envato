import * as React from "react" 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

import {teamData} from '@/data/teamData';
import TeamSocialData from "../team social data/TeamSocialData";

const TeamCarousel = () => {
  return (
    <Carousel
      opts={{
      align: "start",
      loop: true,
    }}
      className="w-full "
    >
      <CarouselContent>
        {teamData.map((data, index) => (
          <CarouselItem  key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className=" bg-black flex justify-center">
                <CardContent className="flex aspect-square  p-6 flex-col ">
                  <div className=" w-full relative">
                    <div className=" absolute z-10 h-full flex flex-col justify-center">
                      <TeamSocialData />
                    </div>
                    <Image src={data.memberImage} alt="member" className=" w-fit h-fit grayscale hover:grayscale-0 duration-200"/>
                  </div>
                  <div className="  text-center mt-5">
                    <h4 className=" text-xl font-medium text-yellow">{data.memberName}</h4>
                    <p className=" text-white opacity-80">{data.memberDesignation}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="  flex justify-center gap-5 mt-5">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}

export default TeamCarousel