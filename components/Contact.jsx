import ParallaxEffect from "./ParallaxEffect";

const Contact = () => {
  return (
    <ParallaxEffect
      backgroundImageClassName='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 md:rounded-md'
      backgroundImageLocation="url('/images/greytone_1.jpg')"
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
                Unit A, Dean Street Works,<br />
                13-19 Dean St, Bristol BS2 8SF
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.7765994167903!2d-2.5860495999999995!3d51.462258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f74c8b3cdcb%3A0x30946e4cbafaa74!2sGreytone%20Coffee!5e0!3m2!1sen!2s!4v1735673285084!5m2!1sen!2s"
            width="600"
            height="400"
            style={ { border: 0 } }
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Greytone Coffee Location"
          ></iframe>
        </div>
      </div>
    </ParallaxEffect>
  )
}

export default Contact