"use client"
import Image from 'next/image'
import { products } from '@/utils/constants';
import { useEffect, useState } from 'react';
export default function HeroSection() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  const handleNext = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <main className="relative overflow-hidden h-screen w-full">
      {products.map((product, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentProductIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <HeroCanSlide {...product} />
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute z-20 left-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={handleNext}
        className="absolute z-20 right-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#9654;
      </button>

      <div className="absolute flex gap-2 z-20 bottom-20 transform -translate-x-1/2 left-1/2 bg-white bg-opacity-50 p-2 rounded-full">
          <div className="p-1 rounded-full bg-black/20" style={{background: currentProductIndex == 0 ? '#111' : '#11111177'}}></div>
          <div className="p-1 rounded-full bg-black/20" style={{background: currentProductIndex == 1 ? '#111' : '#11111177'}}></div>
          <div className="p-1 rounded-full bg-black/20" style={{background: currentProductIndex == 2 ? '#111' : '#11111177'}}></div>
          <div className="p-1 rounded-full bg-black/20" style={{background: currentProductIndex == 3 ? '#111' : '#11111177'}}></div>
      </div>
    </main>
  );
}
export type HeroCanSlideColorsProps = {
  badgeText: string,
  badgeBorder: string,
  badgeBg: string,
}


export type HeroCanSlideProps = {
  title: string,
  image: string,
  amount: string,
  color: HeroCanSlideColorsProps,
  flavor: string,
  bgColor: string,
  titleColor: string
}

export function HeroCanSlide(props: HeroCanSlideProps) {
  return (
    <section className={`hero h-screen w-full ${props.bgColor} relative z-[2] transition-all duration-200`}>
      <div className="background select-none flex items-center justify-center z-[-1] absolute top-0 left-0 bottom-0 right-0">
        <h1 className={`text-7xl md:text-[10rem] uppercase font-sec font-bold ${props.titleColor}`}>{props.title}</h1>
      </div>
      <div className="content w-full h-full flex flex-col items-center justify-center">
        <Image width={1000} height={1000} className='lg:h-[40rem] lg:w-[52rem]' alt={props.title} src={`/images/mockups/${props.image}`} />
        <div>
          <h1 className='md:text-3xl text-xl text-center font-primary capitalize relative'>{props.flavor} <span className={`text-xl normal-case border ${props.color.badgeBorder} ${props.color.badgeText} px-2 ${props.color.badgeBg} py-1 rounded-full`}>{props.amount}</span></h1>
          <p className='max-w-sm md:max-w-lg md:text-base text-sm mt-5 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, nam!</p>
        </div>
      </div>
    </section>
  )
}