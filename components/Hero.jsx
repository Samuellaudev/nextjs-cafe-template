import Link from 'next/link'
import Image from 'next/image'
import ParallaxEffect from './ParallaxEffect'

const Hero = () => {
  return (
    <ParallaxEffect
      backgroundImageClassName='absolute hidden md:block inset-0 bg-cover bg-center bg-no-repeat md:rounded-md'
      backgroundImageLocation="url('/images/hero.webp')"
      contentClassName="relative z-10 grid grid-cols-1 md:grid-cols-3 md:items-center md:gap-8 border border-gray-300 p-6 rounded-md shadow-md"
      sectionId='cafe-hero'
    >
      {/* Left-side - video */ }
      <>
        <div className='md:col-span-1' />
        <video
          muted loop autoPlay playsInline
          className='absolute top-0 left-0 h-full w-full md:top-6 md:left-8 md:w-[18.6rem] md:h-auto object-cover opacity-90 mx-auto rounded-md shadow-md border-2 border-gray-300'
        >
          <source src="/video/filter_coffee_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </>
      {/* Right-side - text */ }
      <div className="relative my-10 md:my-0 max-w-lg md:max-w-none md:col-span-2 text-white p-8 shadow-md">
        <div className='hidden md:block absolute top-1 right-3 w-6/12'>
          <Image
            src='/images/hero_subtitle.png'
            alt="Coffee, the Bristol Way"
            className='mx-auto h-auto w-full'
            width={ 0 }
            height={ 0 }
            sizes='100vw'
            priority={ true }
          />
        </div>
        <div className="absolute md:mt-36 inset-0 bg-black/40 md:bg-black/50 rounded-md"></div>
        <div className="relative md:mt-36 z-10 md:py-10 ">
          <h2 className="font-light text-[26px] md:text-5xl">
            Experience the Perfect Brew
          </h2>
          <h2 className="font-light text-[26px] md:text-5xl">
            Your Daily Coffee Fix
          </h2>
          <p className="font-extralight mt-4">
            Savor the rich aroma of freshly brewed coffee, from bold espressos to smooth cappuccinos. Experience passion and tradition in every cup, crafted from the finest handpicked beans.
          </p>
        </div>
        <div className='relative z-10 mt-10 md:mt-4 md:mr-4 md:mb-10'>
          <Link href="#coffee-menu" className='py-3 px-5 shadow rounded-md bg-white text-slate-700 border border-transparent hover:border-white hover:bg-gray-500 hover:text-white hover:shadow-lg transition duration-300'>
            Menu
          </Link>
        </div>
      </div>
    </ParallaxEffect>
  )
}

export default Hero