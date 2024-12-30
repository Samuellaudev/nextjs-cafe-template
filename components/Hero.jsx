import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 md:mb-40">
      {/* Background Image */ }
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-md" style={ { backgroundImage: "url('/images/hero.webp')" } }></div>
      {/* Content */ }
      <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center md:gap-8 border border-gray-300 p-6 rounded-md shadow-md">
        <div className='md:col-span-1'>{/* Empty Space */ }</div>
        {/* Left-side - video */ }
        <video
          muted loop autoPlay playsInline
          className='absolute top-6 left-8 w-[19.8rem] h-auto object-cover opacity-90 mx-auto rounded-md shadow-md border-8 border-white'
        >
          <source src="/video/filter_coffee_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Right-side - text */ }
        <div dir="rtl" className="relative mb-auto max-w-lg md:max-w-none md:col-span-2 text-white p-8 shadow-md">
          <div className='absolute -top-10 right-0 w-7/12'>
            <Image
              src='/images/hero_subtitle.png'
              alt="Barista brewing coffee"
              className='mx-auto h-auto w-full'
              width={ 0 }
              height={ 0 }
              sizes='100vw'
              priority={ true }
            />
          </div>
          <div className="absolute mt-36 inset-0 bg-black/50 rounded-md"></div>
          <div className="relative mt-36 z-10 py-10 px-4">
            <h2 className="font-extralight text-3xl md:text-5xl">
              Experience the Perfect Brew
            </h2>
            <h2 className="font-extralight text-3xl md:text-5xl">
              Your Daily Coffee Fix
            </h2>
            <p className="font-thin mt-4">
              Savor the rich aroma of freshly brewed coffee, from bold espressos to smooth cappuccinos. Experience passion and tradition in every cup, crafted from the finest handpicked beans.
            </p>
          </div>

          <div className='relative z-10 mt-4 mr-4 mb-10'>
            <Link href="/menu" className='py-3 px-5 shadow rounded-md bg-white text-slate-700 border border-transparent hover:border-white hover:bg-gray-500 hover:text-white hover:shadow-lg transition duration-300'>
              Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero