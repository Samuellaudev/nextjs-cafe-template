import Link from 'next/link'
import Image from 'next/image';
import clsx from 'clsx';

import { navLinks, socialLinks } from '@/utils/constants';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import logo from '@/assets/images/logo.jpg';

const MobileMenu = () => {
  const linkClasses = clsx(
    'group relative z-10 text-slate-700 flex items-center py-1 focus:outline-none rounded-md transition duration-300'
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          type='button'
          id='mobile-dropdown-button'
          className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white'
          aria-controls='mobile-menu'
          aria-expanded='false'
        >
          <span className='absolute -inset-0.5'></span>
          <span className='sr-only'>Open main menu</span>
          <MobileMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='z-[1000]'>
        <SheetHeader>
          <SheetTitle className='mx-auto'>
            <Link className='flex flex-shrink-0 items-center' href='/'>
              <Image className='w-20 md:w-24' src={ logo } alt='RentEase' />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div id='mobile-menu'>
          <div className='space-y-4 px-2 pb-3 ml-2 mb-2 flex flex-col items-center'>
            <div className='space-y-3'>
              { navLinks.map(item => (
                <div key={ item.title } className="group z-0" >
                  <Link
                    href={ item.href }
                    className={ `${ linkClasses }` }
                  >
                    { item.icon }
                    <SheetClose>{ item.title }</SheetClose>
                  </Link>
                </div>
              )) }
            </div>
            <Separator className="bg-slate-300" />
            <div className="flex flex-row gap-2 space-x-8 mx-2 pt-2 justify-center">
              { socialLinks.map((link, index) => (
                <a href={ link.href } key={ index } target="_blank">
                  <Image
                    src={ link.src }
                    alt={ link.alt }
                    width={ 20 }
                    height={ 20 }
                  />
                </a>
              )) }
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu

const MobileMenuIcon = () => (
  <svg
    className='block h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    aria-hidden='true'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
    />
  </svg>
)