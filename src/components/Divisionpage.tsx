import Button from "@/components/buttons/Button"
import { Carousel } from "react-responsive-carousel"

const Divisionpage = () => {
  return(
    <div className="flex h-screen bg-black items-center justify-center">
      <Carousel className="max-w-xl" showThumbs={false}>
        <div className="flex flex-col justify-center text-left bg-gradient-to-r 
        from-[#030871] to-[#06060A] text-white rounded-3xl h-[18rem]">
          <div className="ml-48">
            <h1 className="mb-1">
              ELECTRONICS & <br />
              PROGRAMMING
            </h1>
            <p className="text-[22px] tracking-wider font-thin">Barunastra ITS</p>
            <button className="mt-14 rounded-xl border border-black px-4 bg-white text-black 
            font-medium">Explore</button>
          </div>
          </div>
        <div className="flex flex-col justify-center text-left bg-gradient-to-r
        from-[#030871] to-[#06060A] text-white rounded-3xl h-[18rem]">
          <div className="ml-48">
            <h1 className="mb-1">
              MECHANICAL
            </h1>
            <p className="text-[22px] tracking-wider font-thin">Barunastra ITS</p>
            <button className="mt-14 rounded-xl border border-black px-4 bg-white text-black 
            font-medium">Explore</button>
          </div>
        </div>
        <div className="flex flex-col justify-center text-left bg-gradient-to-r 
        from-[#030871] to-[#06060A] text-white rounded-3xl h-[18rem]">
          <div className="ml-48">
            <h1 className="mb-1">
              NON-TECHNICAL
            </h1>
            <p className="text-[22px] tracking-wider font-thin">Barunastra ITS</p>
            <button className="mt-14 rounded-xl border border-black px-4 bg-white text-black 
            font-medium">Explore</button>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Divisionpage