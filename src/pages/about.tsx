import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

const about = () => {
  return(
    <div>
      <Navbar />
      <div className="flex justify-center h-screen gap-20 items-center">
        <div>
          <h1 className="p-32 bg-gray-300 bg-opacity-25 rounded-3xl text-[60px]">Profile</h1>
        </div>
        <div>
          <p className="p-8 bg-gray-300 bg-opacity-25 rounded-3xl text-justify">
            ITS Roboboat Team is a <br />
            research team from Sepuluh Nopember <br />
            Institute of Technology (ITS) which <br />
            focuses on developing unmanned <br />
            vessels since 2012. We specialize in <br />
            designing and producing ASV <br />
            (Autonomous Surface Vehicle), FERC <br />
            (Fuel Engine Remote Control) and RC <br />
            (Remote Control) boats. Barunastra ITS <br />
            has a strong commitment to help foster <br />
            the world's maritime technology <br />
            advancement.
          </p>
        </div>
      </div>
      <Link href='/' className='border rounded-full border-black p-2 mb-5 ml-5'>&lt;</Link>
    </div>
  )
}

export default about