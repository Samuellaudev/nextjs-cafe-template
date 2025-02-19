import { raleway } from '@/components/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Next.js Coffee",
  description: "The best speciality coffee in Bristol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ `${ raleway.className } flex flex-col min-h-screen` }
        style={ { backgroundImage: "url('/images/bg_img.png')" } }
      >
        <Navbar />
        <main className="mt-20 mx-auto flex-grow w-full">{ children }</main>
        <Footer />
      </body>
    </html>
  );
}
