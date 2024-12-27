import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/images/logo.jpg';
import clsx from 'clsx';
import { navLinks } from '@/utils/constants';

const DesktopMenu = () => {
  const linkClasses = clsx(
    'relative z-10 text-slate-700 py-2'
  );

  const underlineClasses = clsx(
    'absolute w-full z-20 mt-0.5 duration-500 border-b-2 opacity-0 border-slate-500 group-hover:opacity-100',
  );

  return (
    <div className='flex flex-1 md:justify-between'>
      <Link className='flex flex-shrink-0 items-center' href='/'>
        <Image className='w-16 rounded-full' src={ logo } alt='Greytone Coffee' />
      </Link>
      <div className='hidden md:ml-6 md:block my-auto'>
        <div className='flex space-x-6'>
          { navLinks.map(item => (
            <div key={ item.title } className="group mt-2 z-0 flex items-center" >
              <Link
                href={ item.href }
                className={ `${ linkClasses }` }
              >
                { item.title }
                <div className={ underlineClasses }></div>
              </Link>
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu