import { Info, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface cardProps{
  title: string;
  price: number;
}

const DecorativeCard = (props: cardProps) => {
  const formattedPrice = props.price
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <div className=' h-10 w-10 bg-black rounded-full flex justify-center items-center relative max-md:h-5 max-md:w-5'>
          <span className="animate-ping absolute h-full w-full rounded-full bg-yellow opacity-75"></span>
            <div className="relative rounded-full h-5 w-5 bg-yellow ">
              <Info className=' w-full h-full' />
            </div>              
          </div>  
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col bg-black bg-opacity-60 text-white max-w-44 gap-5">
        <div className=''>
          <h4 className=' font-medium '>{props.title}</h4>  
          <p className=' font-normal opacity-100 text-sm'>${formattedPrice}</p>
        </div>
        <div className=' flex flex-col gap-3'>
          <p className=' text-sm opacity-100 font-normal'>Lorem ipsum dolor sit amet, conse ctetuer.</p>
          <button className=" flex w-full bg-yellow p-1 gap-3 justify-center items-center text-black hover:bg-white duration-300">
            <p className="  opacity-100 font-semibold text-sm capitalize ">buy now</p>
            <span className=" bg-black text-yellow p-1.5 ">
              <ShoppingCart size={16} />
            </span>
          </button>
        </div>
      </HoverCardContent>
      </HoverCard>
  )
}

export default DecorativeCard