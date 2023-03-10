import * as React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Start from '@/components/Start';
import Divisionpage from '@/components/Divisionpage';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Page2 from '@/components/Page2';
import Achievementpage from '@/components/Achievementpage';
import Quote from '@/components/Quote';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Start />
      <Page2 />
      <div className='h-[30rem] bg-black'>
        <h1 className='flex h-[30rem] justify-start items-center text-white ml-40 tracking-widest'>OUR DIVISION</h1>
      </div>
      <Divisionpage />
      <div className='h-[30rem] bg-black'>
        <h1 className='flex h-[30rem] justify-start items-center text-white ml-40 tracking-widest'>ACHIEVEMENT</h1>
      </div>
      <Achievementpage />
      <Quote />
      <Footer />
    </div>
  );
}
