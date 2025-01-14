import Image from "next/image";
import AboutPageImage from "@/components/AboutPageImage";

const AboutPage = () => {
  const images = [
    '/images/About/coffee_1.webp',
    '/images/About/coffee_2.webp',
    '/images/About/coffee_3.png',
    '/images/About/coffee_4.webp',
    '/images/About/coffee_5.webp',
  ]

  const content = () => (
    <div className="font-extralight">
      <p className="mb-4">
        In 2025, Samuel and Sophie embarked on a journey to bring their shared passion for innovation and connection to life. Inspired by their love for both coffee and technology, they founded Next.js Cafe, a space where creativity and quality blend seamlessly.
      </p>
      <p className="mb-4">
        Situated in the heart of St Paul’s, Next.js Cafe isn’t just a coffee shop—it’s a hub of inspiration. The sleek, modern interior reflects their background in web development, while every cup of coffee, brewed with precision and care, showcases their commitment to excellence. They partner with renowned roasters like Curve in Margate to source the finest beans, ensuring every sip is a celebration of flavor.
      </p>
      <p className="mb-4">
        At the heart of the cafe is a dedication to community and collaboration. Samuel’s expertise in crafting exceptional brews pairs perfectly with Sophie’s eye for design and hospitality, creating a space where people can relax, connect, and ignite new ideas. Whether enjoying a perfectly pulled espresso or taking part in one of their creative events, visitors are invited to experience the fusion of coffee culture and cutting-edge innovation that makes Next.js Cafe unique.
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
          src='/images/About/founder.jpg'
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