import * as React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Image from 'next/image'
import Navbar from '@/components/navbar';
import Bootstrap from '@/components/Bootstrap';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <body>
        <section className='flex items-center justify-center h-screen'>
          <div className='text-center  '>
            <h1 className='mb-14 text-6xl'>Start your journey</h1>
            <Link href='/about' className='px-12 py-1 text-xl border rounded-xl'>About</Link>
          </div>
        </section>
        <section className='flex h-screen justify-center items-center bg-[#010000]'>
          <div className='flex flex-col h-[30rem] rounded-[100px] mt-10 max-w-5xl mx-auto  
          justify-center bg-[#2C002A] rounded-4xl text-white'>
              <Bootstrap />
          </div>
        </section>
        
      </body>
    </div>
  );
}
