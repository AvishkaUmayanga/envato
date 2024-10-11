import bedroomImage from '@/../public/images/bedroom.jpg'
import KitchenAndBedroomImage from '../kitchen and bedroom image/KitchenAndBedroomImage'
import KitchenAndBedroomText from '../kitchen and bedroom text/KitchenAndBedroomText'

const AmazingBedrooms = () => {
  return (
    <div className=" flex px-16  max-md:flex-col xl:mb-40 max-md:px-5 justify-between max-md:gap-36">
      <KitchenAndBedroomImage imgUrl={bedroomImage} alt='Bedroom' />
      <KitchenAndBedroomText 
        title='Amazing Bedrooms' 
        description='An interior designer is someone who plans, researches, coordinates, and manages such projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.'
        dataArray={null}
      />
    </div>
  )
}

export default AmazingBedrooms