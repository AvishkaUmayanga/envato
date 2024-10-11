import { ChevronRight } from "lucide-react"
import LinkButton from "../link button/LinkButton"
import YellowLine from "../yellow line/YellowLine"

const AboutUs = () => {
  return (
    <div className=" flex">
      <YellowLine />
      <div className=" flex px-5 gap-36 items-center max-lg:gap-20 max-md:flex-col max-md:pr-10">
        <div className=" flex flex-col gap-9 w-[60%] text-justify max-md:w-full ">
          <div className="max-md:text-center">
            <h3>about us</h3>
          </div>
          <p>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.</p>
          <LinkButton btnText="Learn more" btnLogo={<ChevronRight size={20}/>} />
        </div>
        <div className="  flex justify-center text-center flex-col">
          <div className=" relative flex items-center justify-center">
            <div className=" absolute w-[80%] h-[80%] border-yellow  rotate-45 border-4 "></div>
            <h1 className=" font-bold relative text-[10rem] leading-none">12</h1>
          </div>
          <h2 className=" text-7xl font-semibold z-10">Years</h2>
        </div>
      </div>
    </div>
  )
}

export default AboutUs