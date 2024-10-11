import { Check, Grid3X3 } from "lucide-react"
import LinkButton from "../link button/LinkButton"

interface TextPrpos{
    title: string;
    description: string;
    dataArray: string[] | null;
}

const KitchenAndBedroomText = (props: TextPrpos) => {
  return (
    <div className=" w-1/2 gap-12 flex flex-col max-md:w-full">
        <h3 className=" max-md:text-center">{props.title}</h3>
        <hr className=" bg-yellow w-8 h-[2px] border-none max-md:w-6 -mt-4 -mb-4 flex max-md:self-center" />
        <p className=" text-justify">{props.description}</p>
        <div className=" flex gap-10 flex-wrap">
          { props.dataArray?.map((data, index) => (
            <div key={index} className=" flex gap-3 font-semibold ">
              <Check className=" text-yellow" />
              <h4>{data}</h4>
            </div>
          ))}
        </div>
        <LinkButton btnText="view projects" btnLogo={<Grid3X3 size={16} />} />
      </div>
  )
}

export default KitchenAndBedroomText