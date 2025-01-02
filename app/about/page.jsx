import Image from "next/image";
import AboutPageImage from "@/components/AboutPageImage";

const AboutPage = () => {
  const images = [
    '/images/About/barista_2.png',
    '/images/About/coffee_1.jpg',
    '/images/About/coffee_2.jpg',
    '/images/About/coffee_Machine_1.jpg',
    '/images/About/greytone_2.jpg',
    '/images/About/greytone_3.jpg',
  ]

  const content = () => (
    <div className="font-extralight">
      <p className="mb-4">
        In 2021, Charlotte Fong and Ernest Ho left Hong Kong for Bristol with a shared dream: to create a space that celebrates coffee, art, and connection. After years of perfecting their craft and immersing themselves in the UK’s coffee culture, they brought this vision to life with Greytone.
      </p>
      <p className="mb-4">
        Nestled in St Paul’s, Greytone is more than a cafe—it’s a sanctuary designed to inspire. Every detail, from the carefully curated interior to the thoughtfully sourced beans roasted by Curve in Margate, reflects their passion for quality and creativity. Behind the counter gleams Bristol’s first Slayer machine, a symbol of their commitment to excellence, while Charlotte’s homemade cakes add a personal touch to the experience.
      </p>
      <p className="mb-4">
        For Charlotte and Ernest, Greytone is about more than coffee. It’s a place to foster connections, create moments of calm, and share their love for the art of brewing. As they welcome guests into their dream, one cup at a time, they’re building not just a cafe but a community rooted in passion and purpose.
      </p>
    </div>
  )

  return (
    <div className="relative mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 md:mt-10">
      <div className="md:mb-6 mx-2">
        <h2 className="font-normal text-3xl md:text-5xl ml-0 md:ml-10 mb-4 md:mb-10">
          Our Story
        </h2>
        <Image
          src='/images/About/founder.jpeg'
          alt='About Image'
          width={ 1120 }
          height={ 630 }
          className="rounded-md mx-auto"
        />
      </div>
      <div className="max-w-2xl mx-auto px-2 md:px-0 my-6 md:my-20 text-lg font-light">
        { content() }
      </div>
      <div className="mx-4 mb-6">
        <AboutPageImage images={ images } />
      </div>
    </div>
  )
}

export default AboutPage