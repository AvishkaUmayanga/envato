import Image, { StaticImageData } from "next/image"

interface ImageProps{
    imgUrl: StaticImageData;
    alt: string;
}

const KitchenAndBedroomImage = (props: ImageProps) => {
  return (
    <div className=" w-[40%] flex  max-md:w-3/4 -mx-5">
      <div className="  bg-dotted-pattern bg-dot-size xl:h-full w-full  flex  relative  md:h-1/3 lg:h-1/2 max-md:h-40 ">
        <Image src={props.imgUrl} alt={props.alt}  className=" md:mt-14 md:ml-14 absolute mt-5 ml-5 max-md:mt-10 max-md:ml-10"/>
      </div>
    </div>
  )
}

export default KitchenAndBedroomImage