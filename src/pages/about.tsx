import Link from "next/link";
import React from "react";

import Navbar from "@/components/Navbar";

const about = () => {
  return(
    <div>
      <Navbar />
      <div className="flex justify-center h-screen gap-20 items-center bg-[url('/background1.jpg')] bg-cover text-white">
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
      <div className="fixed left-4 bottom-4">
        <Link href='/' className='ml-15 border rounded-full text-white border-white 
        px-2 py-1 bg-gray-400 bg-opacity-40'>&lt;</Link>
      </div>

    </div>
  )
}

export default about