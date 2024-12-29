import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-md" style={ { backgroundImage: "url('/images/hero.webp')" } }></div>
      <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center md:gap-8 border border-gray-300 p-6 rounded-md shadow-md">
        <div className='md:col-span-1'>
          <video
            muted loop autoPlay playsInline
            className='w-10/12 h-1/2 object-cover opacity-90 mx-auto rounded-md shadow-md'
          >
            <source src="/video/filter_coffee_hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div dir="rtl" className="relative mb-auto max-w-lg md:max-w-none md:col-span-2 text-white p-8 shadow-md">
          <div className="absolute inset-0 bg-black/50 rounded-md"></div>
          <div className="relative z-10 p-10 border border-gray-300 rounded-md">
            <h2 className="font-extralight text-3xl md:text-4xl">
              Experience the Perfect Brew
            </h2>
            <h2 className="font-extralight text-3xl md:text-4xl">
              Your Daily Coffee Fix
            </h2>
            <p className="font-thin mt-4">
              Savor the rich aroma of freshly brewed coffee, whether it's a strong espresso or a smooth cappuccino. Every cup tells a story of passion, craftsmanship, and tradition. Join us in discovering the world's best coffee beans, handpicked for perfection.
            </p>
          </div>

          <div className='relative z-10 mt-8 mr-10'>
            <Link href="/menu" className='shadow rounded-md bg-white text-slate-700 py-2 px-5 border border-transparent hover:border-white hover:bg-gray-500 hover:text-white hover:shadow-lg transition duration-300'>
              Menu
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero