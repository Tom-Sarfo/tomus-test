import PropTypes from "prop-types";
/*Image component: Takes an object of media resources and display them 
  @param: object - media resources

  Author: Thomas Davis Sarfo
  
  *** Data structure required ***
  * An object of mediaSet array, img, imgDesc and style properties *
  * mediaSet array should have the media and srcSet properties *
  * Example below *
  const data = {
  mediaSet: [
    {
      media: "(max-width: 320px)",
      srcSet: "imgUrl imgPixelWide, imgUrl imgPixelWide",
    },
    {
      media: "(max-width: 320px)",
      srcSet: "imgUrl imgPixelWide, imgUrl imgPixelWide",
    },
  ],
  img: "img/tom.jpg",
  imgDesc: "A name of a person",
  style: {},
};

*/


function Image({ mediaObject }) {
  return (
    <picture>
      {mediaObject.mediaSet.map((source, index) => (
        <source key={index} media={source.media} srcSet={source.srcSet} />
      ))}
      <img
        src={mediaObject.img}
        alt={mediaObject.imgDesc}
        style={mediaObject.style}
      />
    </picture>
  );
}

Image.propTypes = {
  mediaObject: PropTypes.object.isRequired,
};

export default Image;
