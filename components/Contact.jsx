import ParallaxEffect from "./ParallaxEffect";

const Contact = () => {
  return (
    <ParallaxEffect
      backgroundImageClassName='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 md:rounded-md'
      backgroundImageLocation="url('/images/cafe_address.jpg')"
      contentClassName="relative z-10 container px-6 py-10 mx-auto text-white border border-gray-300 p-6 rounded-md shadow-md"
      sectionId='cafe-contact'
    >
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
        {/* Left-side: Location & Hours */ }
        <div className="relative p-6 md:p-10 shadow-md">
          {/* Overlay */ }
          <div className="absolute inset-0 bg-black/50 rounded-md"></div>
          {/* Content */ }
          <div className="relative z-10 flex flex-col space-y-6 text-white">
            <h1 className="text-2xl md:text-3xl font-semibold">Location & Hours</h1>
            <div>
              <h2 className="text-lg font-medium">Visit Us</h2>
              <address className="mt-2 not-italic text-sm leading-6">
                150-152 West St, Bedminster,<br />
                Bristol BS3 3LYBristol BS3 3LY
              </address>
            </div>
            <div>
              <h2 className="text-lg font-medium">Cafe Hours</h2>
              <ul className="mt-3 space-y-1 text-sm leading-6">
                <li>
                  <time dateTime="Mo-Fr 08:00-16:00">Monday - Friday: 8am - 4pm</time>
                </li>
                <li>
                  <time dateTime="Tu 00:00-00:00">Tuesday: Closed</time>
                </li>
                <li>
                  <time dateTime="Sa 09:00-16:00">Saturday: 9am - 4pm</time>
                </li>
                <li>
                  <time dateTime="Su 10:00-16:00">Sunday: 10am - 4pm</time>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Right-side: Google Map */ }
        <div className="overflow-hidden rounded-lg lg:col-span-1 h-96 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.208512099444!2d-2.6093555923993064!3d51.435514140461315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718c2e2b89e0a7%3A0xe9c0e052f7871d8f!2sCafe%2C%20150-152%20West%20St%2C%20Bedminster%2C%20Bristol%20BS3%203LY!5e0!3m2!1szh-TW!2suk!4v1736881060529!5m2!1szh-TW!2suk"
            width="600"
            height="400"
            style={ { border: 0 } }
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Next.js Coffee Location"
          ></iframe>
        </div>
      </div>
    </ParallaxEffect>
  )
}

export default Contact