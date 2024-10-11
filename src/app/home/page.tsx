import AboutUs from "@/components/about us/AboutUs";
import AmazingBedrooms from "@/components/amazing bedrooms/AmazingBedrooms";
import DecorativeShop from "@/components/decorative shop/DecorativeShop";
import HeroSection from "@/components/hero section/HeroSection";
import ModernKitchens from "@/components/modern kitchens/ModernKitchens";
import NavBar from "@/components/navbar/NavBar";
import OurServices from "@/components/our services/OurServices";
import OurTeam from "@/components/our team/OurTeam";
import OurWorks from "@/components/our works/OurWorks";
import OurStats from "@/components/out stats/OurStats";

const HomePage = () => {
  return (
    <>
      <div className=" xmd:hidden">
        <NavBar />
      </div>
      <div className=" flex flex-col gap-20 pb-20"> 
        <HeroSection />
        <AboutUs />
        <OurWorks />
        <AmazingBedrooms />
        <ModernKitchens />
        <OurServices />
        <OurTeam />
        <div>
          <DecorativeShop />
          <OurStats />
        </div>
      </div>
    </>
  )
}

export default HomePage
