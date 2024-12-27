import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.jpg';
import { socialLinks, companyName, footerLinks } from '@/utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center p-6 border-2 border-gray-200 border-b-0 rounded-md rounded-br-none rounded-bl-none">
          <Link href='/' className="cursor-pointer mb-6">
            <Image className='w-20 rounded-full' src={ logo } alt='Greytone Coffee' />
          </Link>
          <div className="flex flex-wrap justify-center -mx-4">
            { footerLinks.map((link, index) => (
              <Link
                key={ link.title }
                href={ link.href }
                aria-label={ link.ariaLabel }
                className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary dark:hover:text-primary-400"
              >
                { link.title }
              </Link>
            )) }
          </div>
        </div>

        <span className="my-4 relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-60"></div>
        </span>

        <div className="flex flex-col items-center p-6 sm:flex-row sm:justify-between border-2 border-gray-200 border-t-0 rounded-md rounded-tr-none rounded-tl-none">
          <p className="text-sm text-gray-500">&copy; { currentYear } { companyName }</p>
          <div className="flex flex-row gap-2 space-x-8 md:space-x-6 mx-2 pt-4">
            { socialLinks.map((link, index) => (
              <a href={ link.href } key={ index } target="_blank">
                <Image
                  src={ link.src }
                  alt={ link.alt }
                  width={ 20 }
                  height={ 20 }
                  className="duration-200 hover:invert-0 hover:sepia-0 hover:saturate-2 hover:hue-rotate-[184deg] hover:brightness-[110%] hover:contrast-[101%]"
                />
              </a>
            )) }
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
