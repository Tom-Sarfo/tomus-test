import Box from "@mui/material/Box";
import PropTypes from "prop-types";
// import Img from 'react-optimized-image';

function ProductCard({ imgUrl, productName, price, instock, newArrival }) {
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <Box
        sx={{
          width: "190px",
          height: "190px",
          textAlign: "left",
          backgroundColor: "#D9D9D9",
        }}
      >
        {/* <Img src={imgUrl} /> */}
      </Box>
      <div className="product-caption">
        <p style={{ marginBlockStart: "0px", fontWeight: "bold" }}>
          {productName}
        </p>
        <p>{price}</p>
      </div>
    </Box>
  );
}

ProductCard.propTypes = {
  imgUrl: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  instock: PropTypes.bool,
  newArrival: PropTypes.bool,
};

export default ProductCard;
