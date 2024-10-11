import Image from "next/image"
import NavBar from "../navbar/NavBar"
import image1 from '@/../public/images/decorativeShop.jpg'

const HeroSection = () => {
  return (
    <div className=" min-h-screen relative overflow-hidden ">
      <div className=" max-xmd:hidden">
        <NavBar />
      </div>
      <Image src={image1} alt="Decorative Shop"  className=" absolute top-0 -z-10 h-full w-full object-cover animate-custom-ping" />
      <div className=" w-full h-full  absolute top-0 -z-10 flex items-center text-white justify-center">
        <div className=" w-fit flex items-center flex-col">
          <div className=" flex text-center relative">
            <h1 className=" text-8xl font-semibold p-3 max-md:text-6xl">Living Room</h1>
            {/* <div className=" absolute h-full w-full animate-fade-bottom-to-top bg-white trasn"></div>   */}
          </div>
          <hr className=" bg-white w-full h-0.5 border-none" />
          <div>
            <div className=" flex text-center relative">
              <p className=" opacity-80 text-2xl p-5">Modern & Minimal Design</p>
              <div className=" absolute h-full w-full animate-fade-bottom-to-top bg-white"></div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection