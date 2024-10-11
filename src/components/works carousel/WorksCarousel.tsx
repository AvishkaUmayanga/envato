'use client'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Image from "next/image"
import work1 from '@/../public/images/home.jpg'
import work2 from '@/../public/images/img4.jpg'
import work3 from '@/../public/images/img8.jpg'
import work4 from '@/../public/images/bedroom.jpg'
import work5 from '@/../public/images/interior.jpg'
import work6 from '@/../public/images/kitchen.jpg'
import work7 from '@/../public/images/img7.jpg'
import work8 from '@/../public/images/exterior.jpg'

interface CarouselProps {
  isOpen: boolean;
  imgageIndex: number;
  oncloseFunc: () => void;
}

const WorksCarousel = (props: CarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const imageDetails = [
    {imgUrl:work1, imgAlt:'work 1'},
    {imgUrl:work2, imgAlt:'work 2'}, 
    {imgUrl:work3, imgAlt:'work 3'}, 
    {imgUrl:work4, imgAlt:'work 4'}, 
    {imgUrl:work5, imgAlt:'work 5'}, 
    {imgUrl:work6, imgAlt:'work 6'}, 
    {imgUrl:work7, imgAlt:'work 7'},
    {imgUrl:work8, imgAlt:'work 8'}
  ]
  React.useEffect(() => {
    if (api && props.imgageIndex >= 0) {
      api.scrollTo(props.imgageIndex)
    }
  }, [api, props.imgageIndex])

  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])



  return (
    <Dialog open={props.isOpen} onOpenChange={props.oncloseFunc}>
      <div className=" flex overflow-hidden w-full ">
       <DialogContent  >  
         <Carousel setApi={setApi} className="w-full px-10 flex flex-col max-md:px-5 justify-center ">
           <CarouselContent >
             {imageDetails?.map(data => (
               <CarouselItem key={data.imgAlt}>
                 <Card>
                   <CardContent className="flex  items-center justify-center p-4 max-md:p-0">
                     <TransformWrapper >
                       <TransformComponent >
                       <Image src={data.imgUrl} alt={data.imgAlt} />
                       </TransformComponent>
                     </TransformWrapper>
                   </CardContent>
                 </Card>
               </CarouselItem>
             ))}
           </CarouselContent>
           <div className=" flex justify-between top-1/2 bottom-1/2 absolute w-full right-0 px-1 md:px-4 xl:px-20 left-0">
             <CarouselPrevious />
             <CarouselNext />
           </div>
         </Carousel>
       </DialogContent>
     </div>
   </Dialog>
  )
}

export default WorksCarousel