import Link from "next/link";

const Start = () => {
  return(
    <section className='flex items-center justify-center h-screen text-center bg-[url("/background1.jpg")] bg-cover'>
      <div className='text-center text-white'>
        <h1 className='mb-14 text-6xl'>Start your journey</h1>
        <Link href='/about' className='px-12 py-1 text-xl border rounded-xl'>About</Link> 
      </div>
    </section>
  );
};

export default Start