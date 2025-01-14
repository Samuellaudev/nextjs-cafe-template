import { IoHomeOutline, IoSearchCircleOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";

export const companyName = "Next.js Cafe"

// Navbar
export const navLinks = [
  {
    href: '/about',
    title: 'ABOUT',
    icon: <IoHomeOutline className='text-black text-xl mx-2' />
  },
  {
    href: '/#coffee-menu',
    title: 'MENU',
    icon: <IoSearchCircleOutline className='text-black text-xl mx-2' />
  },
  {
    href: '/#cafe-contact',
    title: 'CONTACT',
    icon: <GoQuestion className='text-black text-xl mx-2' />
  }
]

export const socialLinks = [
  {
    href: 'https://www.instagram.com/',
    src: '/svg/icon-instagram.svg',
    alt: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/',
    src: '/svg/icon-facebook.svg',
    alt: 'Facebook',
  },
  {
    href: 'https://www.twitter.com/',
    src: '/svg/icon-twitter.svg',
    alt: 'Twitter',
  }
];

export const footerLinks = [
  {
    href: '/about',
    title: 'ABOUT',
    ariaLabel: 'about',
  },
  {
    href: '/#coffee-menu',
    title: 'MENU',
    ariaLabel: 'menu',
  },
  {
    href: '/#cafe-contact',
    title: 'CONTACT',
    ariaLabel: 'contact',
  }
];