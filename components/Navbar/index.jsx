'use client';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {

  return (
    <nav className="fixed mx-auto text-slate-600 top-0 left-0 right-0 z-[20] bg-white bg-opacity-80 backdrop-blur-md backdrop-opacity-80">
      <div className='mx-auto max-w-7xl px-4 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='absolute inset-y-0 right-0 flex items-center md:hidden'>
            <MobileMenu />
          </div>
          <DesktopMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;