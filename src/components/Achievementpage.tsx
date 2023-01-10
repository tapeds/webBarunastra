import Image from "next/image"
import { Carousel } from "react-responsive-carousel"

const Achievementpage = () => {
  return(
    <div className="h-screen flex justify-center items-center bg-black">
      <Carousel className="border border-blue-500 h-[33rem] w-[20rem] rounded-3xl text-white" 
      showThumbs={false} >
        <div className="text-left text-xs tracking-widest p-10">
          <div className="border border-blue-500 rounded-xl mb-5">
            <Image 
              src="/roboboat.png"
              alt="roboboat"
              width={300}
              height={300}
              />
          </div>
          <h2>2021</h2>
          <p className="mb-3">
            1st Place Skills Video & <br />
            Website <br />
            2nd Place Technical <br />
            Design Report <br />
            AUVSI 14th International Roboboat <br />
            Competition, 2021 <br />
            Conducted Online
          </p>
          <h2>2019</h2>
          <p>
            1st Place AUVSI 12th <br />
            International Roboboat <br />
            Competition, 2019, <br />
            Florida, USA
          </p>
        </div>
        <div className="text-left text-xs tracking-widest p-10">
          <div className="border border-blue-500 rounded-xl mb-5">
            <Image 
              src="/kkctbn.png"
              alt="kkctbn"
              width={300}
              height={300}
              />
          </div>
          <h2>2021</h2>
          <p className="mb-3">
            1st Place Skills Video & <br />
            Website <br />
            2nd Place Technical <br />
            Design Report <br />
            AUVSI 14th International Roboboat <br />
            Competition, 2021 <br />
            Conducted Online
           </p>
          <h2>2019</h2>
          <p>
            1st Place AUVSI 12th <br />
            International Roboboat <br />
            Competition, 2019, <br />
            Florida, USA
          </p>
        </div>
      </Carousel>
    </div>
  )
}

export default Achievementpage