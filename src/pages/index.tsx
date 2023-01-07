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
import Footer from '@/components/Footer';
import Start from '@/components/Start';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';
import Page2 from '@/components/Page2';
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
      <div className='h-[30rem] bg-black'>
        <h1 className='flex h-[30rem] justify-start items-center text-white ml-40 tracking-widest'>ACHIEVEMENT</h1>
      </div>
      <Footer />
    </div>
  );
}
