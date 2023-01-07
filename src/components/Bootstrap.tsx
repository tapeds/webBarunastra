import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Bootstrap = () => {
  return (
    <Carousel>
      <div className='text-left ml-20 tracking-widest'>
        <h1 className='mb-10 my-20 text-[50px]'>INAMARINE 2022</h1>
        <p className='mb-10 text-[20px]'>
          The 10th Indonesia International Shipbuilding, <br />
          Offshore, Marine Equipment, Macine & Service <br />
          Exhibition, Inamarine is back at Jakarta <br />
          (JIExpo) Kemayoran, Jakarta - <br />
          Indonesia
        </p>
        <button className='border border-white items-left rounded-lg px-2 my-auto'>Explore</button>
      </div>
      <div className='text-left ml-20 tracking-widest'>
        <h1 className='mb-10 my-20 text-[50px]'>ROBOBOAT 2022</h1>
        <p className='mb-10 text-[20px]'>
          On ongoing project that is asking to be <br />
          conquered for the sake of our extraordinary <br />
          dreams
        </p>
        <button className='border border-white items-left rounded-lg px-2'>Explore</button>
      </div>
      <div className='text-left ml-20 tracking-widest'>
        <h1 className='mb-10 my-20 text-[50px]'>NALA THESEUS</h1>
        <p className='mb-10 text-[20px]'>
          Presenting the teams hardwork in developing <br /> 
          maritime technology advancement. Here is <br />
          the Theseus.
        </p>
        <button className='border border-white items-left rounded-lg px-2'>Explore</button>
      </div>
      <div className='text-left ml-20 tracking-widest' >
        <h1 className='mb-10 my-20 text-[50px]'>TEAMS</h1>
        <p className='mb-10 text-[20px]'>
          Prespectives, ideas, and innovations came <br />
          different from each of us. But, the way to <br />
          assemble all of them, that is how a team <br />
          works
        </p>
        <button className='border border-white items-left rounded-lg px-2'>Explore</button>
      </div>
    </Carousel>
  );
}

export default Bootstrap
