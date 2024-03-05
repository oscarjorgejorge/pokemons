"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

interface SliderProps {
  slides: string[];
}

export const Slider = (props: SliderProps) => {
  const { slides } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();

    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();

    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (
    e: React.MouseEvent<HTMLDivElement>,
    slideIndex: number,
  ) => {
    e.preventDefault();
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" h-[160px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="w-full h-full rounded-2xl duration-500 bg-contain bg-no-repeat bg-center"
      />
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-2 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={(e) => prevSlide(e)} size={10} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-2 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={(e) => nextSlide(e)} size={10} />
      </div>
      <div className="flex top-2 justify-center pb-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide}
            onClick={(e) => goToSlide(e, slideIndex)}
            className="text-xl cursor-pointer"
          >
            <RxDotFilled
              className={
                slideIndex === currentIndex
                  ? "text-slate-300"
                  : "text-slate-200"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
