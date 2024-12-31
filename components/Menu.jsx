const Menu = () => {
  return (
    <section className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 md:mb-40 bg-white rounded-md">
      {/* Background Image */ }
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 rounded-md" style={ { backgroundImage: "url('/images/bg_menu.png')" } }></div>
      {/* Content */}
      <div className="relative z-10 container px-4 py-20 mx-auto text-white border border-gray-300 p-6 rounded-md shadow-md">
        <div className="relative lg:flex">
          <div className="hidden lg:block w-full my-auto">
            <div className="absolute left-16 w-[30rem] h-[30rem] bg-black/10 rounded-full shadow-md"></div>
            <img
              className="relative w-[28rem] h-[28rem] xl:w-[30rem] xl:h-[30rem] object-cover rounded-full"
              src="/images/coffee_Machine_2.jpg"
              alt="Menu"
            />
          </div>

          <div className="w-full space-y-6 px-4">
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 uppercase">
              Menu
            </h1>
            { menuItems.map(({ name, price }, index) => (
              <div key={ index }>
                <div className="flex mt-2 md:mt-0 justify-between text-gray-700">
                  <div className="font-medium text-lg uppercase">{ name }</div>
                  <p className="">{ price }</p>
                </div>
                <div className="mt-2 w-full h-[0.5px] bg-gray-500/70"></div>
              </div>
            )) }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

const menuItems = [
  {
    name: "espresso",
    price: "3.0",
  },
  {
    name: "long black",
    price: "3.2",
  },
  {
    name: "pour over",
    price: "5.0",
  },
  {
    name: "flat white",
    price: "3.5",
  },
  {
    name: "cappuccino",
    price: "3.5",
  },
  {
    name: "latte",
    price: "3.7",
  },
  {
    name: "tea",
    price: "3.0",
  },
  {
    name: "matcha latte",
    price: "4.5",
  },
  {
    name: "hot chocolate",
    price: "4.0",
  },
]