import Image from 'next/image'

const ThinLine = () => (
  <span className="my-5 relative flex justify-center">
    <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
  </span>
)

const Quote = () => {
  return (
    <section className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 md:mb-40">
      {/* Background Image */ }
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 rounded-md" style={ { backgroundImage: "url('/images/quote_bg.png')" } }></div>
      {/* Content */ }
      <div className="relative z-10 container grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-20 mx-auto text-center text-white">
        <div className='relative col-span-1 md:col-span-1 my-auto mx-4'>
          <div className="absolute inset-0 bg-gray-300/70 rounded-md shadow-md backdrop-blur-sm"></div>
          <div className="relative py-4">
            <ThinLine />
            <p className="mt-6 md:px-14 text-base font-extralight text-[#66320a] leading-loose">
              "In colour definition, greytone is representing neutral, balance and relax.
              <span className='text-[#92400E] text-lg font-normal italic'>&nbsp;Connecting with coffee, we think balance and sweetness are essential elements of a good cup coffee.&nbsp;</span>
              Connecting to our shop design, we want a space that people can relax and enjoy their coffee moment."
            </p>
            <ThinLine />
          </div>
        </div>
        <div className='col-span-1 relative'>
          <div className="absolute -top-10 bottom-10 left-28 inset-0 w-2/3 bg-black/30 rounded-md"></div>
          <Image
            src='/images/barista_1.jpg'
            alt="Barista brewing coffee"
            className='relative ml-40 h-auto w-2/3 rounded-md shadow-md'
            width={ 0 }
            height={ 0 }
            sizes='100vw'
            priority={ true }
          />
        </div>
      </div>
    </section>
  )
}

export default Quote