import kitchenImg from '@/../public/images/kitchen.jpg'
import KitchenAndBedroomText from "../kitchen and bedroom text/KitchenAndBedroomText"
import KitchenAndBedroomImage from "../kitchen and bedroom image/KitchenAndBedroomImage"

const ModernKitchens = () => {
  const kitchenData: string[] = ['Modern', 'Minimal', 'Ergonomic', 'Perfect']
  return (
    <div className=" flex px-16 gap-8 max-md:flex-col mb-40 max-md:px-5 ">
      <KitchenAndBedroomText 
        title="Modern Kitchens"  
        description="Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such projects. Interior design is a multifaceted profession that includes conceptual development, space planning and site inspections."
        dataArray={kitchenData}
      />
      <KitchenAndBedroomImage imgUrl={kitchenImg}  alt="kitchen"/>
    </div>
  )
}

export default ModernKitchens