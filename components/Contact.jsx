const Contact = () => {
  return (
    <section className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 md:mb-20 bg-white md:rounded-md">
      {/* Background Image */ }
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 md:rounded-md" style={ { backgroundImage: "url('/images/greytone_1.jpg')" } }></div>

      {/* Content */ }
      <div className="relative z-10 container px-6 py-10 mx-auto text-white border border-gray-300 p-6 rounded-md shadow-md">
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>

          <div className="relative">
            <div className="absolute inset-0 bg-black/50 rounded-md"></div>
            <div className='relative flex flex-col text-white px-6 py-8 space-y-3'>
              <h1 className="mt-2 text-2xl font-semibold  md:text-3xl">Location & Hours</h1>
              <div>
                <h2 className="mt-4 text-base font-medium">Visit Us</h2>
                <p className="mt-1 text-sm">Unit A, Dean Street Works,</p>
                <p className="mt-1 text-sm">13-19 Dean St, Bristol BS2 8SF</p>
              </div>

              <div>
                <h2 className="mt-4 text-base font-medium">Cafe Hours</h2>
                <ul className="mt-2 text-sm space-y-1">
                  <li>
                    <time>Monday - Friday: 8am - 4pm</time>
                  </li>
                  <li>
                    <time>Tuesday: Closed</time>
                  </li>
                  <li>
                    <time>Saturday: 9am - 4pm</time>
                  </li>
                  <li>
                    <time>Sunday: 10am - 4pm</time>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-1 h-96 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.7765994167903!2d-2.5860495999999995!3d51.462258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f74c8b3cdcb%3A0x30946e4cbafaa74!2sGreytone%20Coffee!5e0!3m2!1sen!2s!4v1735673285084!5m2!1sen!2s"
            width="600"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Greytone Coffee Location"
          ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact