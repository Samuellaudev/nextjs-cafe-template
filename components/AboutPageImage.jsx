'use client'

import Image from 'next/image';
import Slider from "react-slick";

const AboutPageImage = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider { ...settings }>
      { images.map((image, index) => (
        <div key={ index } className='p-2'>
          <Image
            src={ image }
            alt={ index }
            width={ 1300 }
            height={ 630 }
            className=""
          />
        </div>
      )) }
    </Slider>
  )
}

export default AboutPageImage