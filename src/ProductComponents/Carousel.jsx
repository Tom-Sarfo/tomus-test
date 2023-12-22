import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

export default function Carousel() {
  const slider = (
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      <div data-src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/2935834961.jpg" />
      <div data-src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3346646609.jpg" />
      <div data-src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3346646609.jpg" />
    </AwesomeSlider>
  );

  return <div className="w-full h-1/2">{slider}</div>;
}
