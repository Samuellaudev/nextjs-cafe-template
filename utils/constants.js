import { IoHomeOutline, IoSearchCircleOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";

export const companyName = "Greytone"

// Navbar
export const navLinks = [
  {
    href: '/',
    title: 'ABOUT',
    icon: <IoHomeOutline className='text-black text-xl mx-2 group-hover:text-white' />
  },
  {
    href: '/menu',
    title: 'MENU',
    icon: <IoSearchCircleOutline className='text-black text-xl mx-2 group-hover:text-white' />
  },
  {
    href: '/contact',
    title: 'CONTACT',
    icon: <GoQuestion className='text-black text-xl mx-2 group-hover:text-white' />
  }
]

export const socialLinks = [
  {
    href: 'https://www.instagram.com/',
    src: '/images/icon-instagram.svg',
    alt: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/',
    src: '/images/icon-facebook.svg',
    alt: 'Facebook',
  },
  {
    href: 'https://www.twitter.com/',
    src: '/images/icon-twitter.svg',
    alt: 'Twitter',
  }
];

export const footerLinks = [
  {
    href: '/',
    title: 'ABOUT',
    ariaLabel: 'about',
  },
  {
    href: '/menu',
    title: 'MENU',
    ariaLabel: 'menu',
  },
  {
    href: '/contact',
    title: 'CONTACT',
    ariaLabel: 'contact',
  }
];