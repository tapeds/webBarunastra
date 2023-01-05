import React from "react";
import Link from "next/link";

const Navbar = () => {
  return(
    <div className='py-6 max-w-6xl mx-auto flex flex-row justify-between text-l text-black'>
      <div>
        <Link href='/' className='border border-black px-4 rounded-xl'>
          Home
        </Link>
      </div>
      <div>
        <ul className='flex flex-row gap-10'>
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