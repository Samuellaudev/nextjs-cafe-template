import { poppins } from '@/components/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";

export const metadata = {
  title: "Greytone Coffee",
  description: "The best speciality coffee in Bristol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${ poppins.className } flex flex-col min-h-screen` }>
        <Navbar />
        <main className="mt-20 mx-auto flex-grow w-full">{ children }</main>
        <Footer />
      </body>
    </html>
  );
}
