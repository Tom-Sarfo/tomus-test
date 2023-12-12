import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Carousel({ slides }) {
  const [imageSlide, setImageSlide] = useState(slides);
  const [slideCount, setSlideCount] = useState(0);

  function prevSlide(index) {
    setSlideCount(index);
    if (index !== 0) {
      setSlideCount(index - 1);
    }
  }

  function nextSlide(index) {
    setSlideCount(index);
    if (index !== imageSlide.length - 1) {
      setSlideCount(index + 1);
    }
  }

  const indicator = {
    borderRadius: "5rem",
    border: "2px solid grey",
    width: "20px",
    height: "20px",
    backgroundColor: "",
  };

  const CarouselStyle = {
    container:
      "w-full h-1/2 bg-white absolute ease-out duration-300 translate-x-1",
    slide: "w-full h-1/2 flex justify-center items-center text-3xl",
    prevBtn: "flex justify-between relative top-1/2 px-2",
    slideIndicators: "flex justify-evenly relative",
    switchBtn:
      "w-11 h-11 border-2 border-white rounded-full pl-2 hover:bg-white hover:border-gray-500",
  };

  const activeIndicatorBgColor = { ...indicator, backgroundColor: "gray" };

  return (
    <div className={CarouselStyle.container}>
      <div className={CarouselStyle.prevBtn}>
        <button
          className={CarouselStyle.switchBtn}
          onClick={(e) => prevSlide(slideCount)}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className={CarouselStyle.switchBtn}
          onClick={(e) => nextSlide(slideCount)}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div className={CarouselStyle.slide}>
        <img
          className="max-h-1/2 w-full"
          src={imageSlide[slideCount]}
          alt="Beads slippers"
        />
      </div>
      <br />
      <div className={CarouselStyle.slideIndicators}>
        {imageSlide.map((slide, index) => (
          <div
            style={slideCount === index ? activeIndicatorBgColor : indicator}
          ></div>
        ))}
      </div>
    </div>
  );
}
