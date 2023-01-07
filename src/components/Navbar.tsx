import React from "react";
import Link from "next/link";

const Navbar = () => {
  return(
    <div className='fixed left-0 top-0 w-full z-10'>
      <div className="max-w-6xl m-auto flex justify-between items-center p-4 text-white tracking-wide">
        <Link href='/' className='border border-white px-4 rounded-xl'>
          Home
        </Link>
        <ul className='flex flex-row gap-10 text-white'>
          <li><a>Gallery</a></li>
          <li><a>Team</a></li>
          <li><a>Competition</a></li>
          <li><a>Inamarine 2022</a></li>
          <li><a>Sponsor</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar