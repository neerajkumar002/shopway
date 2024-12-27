import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    }
  };
  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className=" flex w-full     xl:h-[500px] m-auto relative overflow-hidden   ">
      {images &&
        images.map((slide, index) => (
          <div
            key={index}
            className={`${index === currentIndex ? "  " : "hidden  "}  w-full h-full `}
          >
            <img src={slide} alt="" className="w-full xl:h-full   " />
          </div>
        ))}

      <button className="absolute text-white top-1/2 left-5 bg-black bg-opacity-50 rounded-full transform -translate-y-1/2">
        <ChevronLeft size={50} onClick={prevSlide} />
      </button>
      <button className="absolute  text-white top-1/2 right-5  bg-black bg-opacity-50 rounded-full transform -translate-y-1/2">
        <ChevronRight size={50} onClick={nextSlide} />
      </button>
    </div>
  );
};

export default ImageCarousel;
