'use client'
import Image, { StaticImageData } from "next/image"
import YellowLine from "../yellow line/YellowLine"
import work1 from '@/../public/images/home.jpg'
import work2 from '@/../public/images/img4.jpg'
import work3 from '@/../public/images/img8.jpg'
import work4 from '@/../public/images/bedroom.jpg'
import work5 from '@/../public/images/interior.jpg'
import work6 from '@/../public/images/kitchen.jpg'
import work7 from '@/../public/images/img7.jpg'
import work8 from '@/../public/images/exterior.jpg'
import WorksCarousel from "../works carousel/WorksCarousel"
import { useState } from "react"

interface GridData{
    imgUrl: StaticImageData;
    imgAlt: string;
}
const OurWorks = () => {
  const firstGridImages: GridData[] = [{imgUrl:work2, imgAlt:'work 2'}, {imgUrl:work3, imgAlt:'work 3'}, {imgUrl:work4, imgAlt:'work 4'}];
  const secondGridImages: GridData[] = [{imgUrl:work5, imgAlt:'work 5'}, {imgUrl:work6, imgAlt:'work 6'}, {imgUrl:work7, imgAlt:'work 7'}];
  const [isCarouselOpen, setIsCarouselOpen] = useState<boolean>(false);
  const [imageIndex, setImgageIndex] = useState<number>(0)

  const handleImageClick = (index: number) => {
    setIsCarouselOpen(true);
    setImgageIndex(index); 
  }
  
  return (
    <div className=" bg-black">
      <div className=" flex gap-5 pt-12 max-md:text-center w-full ">
        <YellowLine />
        <h3 className=" text-white max-md:text-center">Our Works</h3>
      </div>
      <div className="mx-16  max-md:mx-5 flex gap-5 py-20 max-md:flex-col max-md:gap-3">
        <div className="grid grid-cols-3 w-1/2 gap-5 max-md:grid-cols-2 max-md:w-full max-md:gap-3">
          <div className=" md:col-span-3" onClick={()=> handleImageClick(0)}>
            <Image src={work1} alt="work 1"  className=" hover:grayscale duration-500 cursor-crosshair"/>
          </div>
          {firstGridImages?.map((data, index) => (
            <Image key={data.imgAlt} src={data.imgUrl} alt={data.imgAlt} onClick={()=> handleImageClick(index+1)} className=" hover:grayscale duration-500 cursor-crosshair"/>
          ))}
        </div>
        <div className="grid grid-cols-3 w-1/2 gap-5 max-md:grid-cols-2 max-md:w-full max-md:gap-3">
          {secondGridImages?.map((data, index) => (
            <Image key={data.imgAlt} src={data.imgUrl} alt={data.imgAlt} onClick={()=> handleImageClick(index+4)} className=" hover:grayscale duration-500 cursor-crosshair"/>
          ))}
          <div className=" md:col-span-3 " onClick={()=> handleImageClick(7)}>
            <Image src={work8} alt="work 8" className=" hover:grayscale duration-500 cursor-crosshair"/>
          </div>
        </div>
      </div>
      {isCarouselOpen && <WorksCarousel isOpen={isCarouselOpen} oncloseFunc={()=>setIsCarouselOpen(false)} imgageIndex={imageIndex}/>}
    </div>
  )
}

export default OurWorks