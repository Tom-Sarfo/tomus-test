import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import { ItemData } from "../Common/ItemCard/ItemCardData";

export default function Carousel() {
  const filterItem = ItemData.filter((data) => data.prod_id === 1);

  const slider = (
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      {filterItem[0].imgUrl.map((image) => (
        <div data-src={image} />
      ))}
    </AwesomeSlider>
  );

  return <div className="slider">{slider}</div>;
}
