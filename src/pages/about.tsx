import React from "react";
import Link from "next/link";

const about = () => {
  return(
    <div>
      <div className="flex flex-row justify-between h-screen items-center">
        <div>
          <h1 className="p-20">Profile</h1>
        </div>
        <div>
          <p className="p-10 text-justify">
            ITS Roboboat Team is a research team
            from Sepuluh Nopember Institute of Technology (ITS) 
            which focuses on developing unmanned vessels since 2012. 
            We specialize in designing and producing ASV (Autonomous 
            Surface Vehicle), FERC (Fuel Engine Remote Control) and RC 
            (Remote Control) boats. Barunastra ITS has a strong 
            commitment to help foster the world's maritime technology 
            advancement.
          </p>
        </div>
      </div>
      <Link href='/' className='border rounded-full border-black p-2 mb-5 ml-5'>&lt;</Link>
    </div>
  )
}

export default about