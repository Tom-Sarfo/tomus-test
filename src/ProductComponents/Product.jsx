import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ProductShowcase from "../ProductShowcase";

const sizes = [
  { name: "thirty-six", value: 36 },
  { name: "thirty-seven", value: 37 },
  { name: "thirty-eight", value: 38 },
  { name: "thirty-nine", value: 39 },
  { name: "forty", value: 40 },
  { name: "forty-one", value: 41 },
  { name: "forty-two", value: 42 },
  { name: "forty-three", value: 43 },
  { name: "forty-four", value: 44 },
  { name: "forty-five", value: 45 },
];

function Product() {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const styles = {
    productContainer: "flex flex-col h-screen text-2xl ",
    productImage: "bg-gray-500 w-full h-2/4 flex justify-center items-center",
    productDetail: "bg-white w-full h-56 flex p-3 flex-col",
    descPriceContainer: "flex justify-between",
    imageIcon: "text-white",
    selectSize: "flex justify-between mt-10 text-black",
    sizesContainer: "grid grid-cols-5 gap-0.5",
    qty: "flex justify-between text-2xl my-4 ml-2 text-black",
    callToActionContainer: "mt-3 flex w-full justify-evenly",
    IncDecContainer: "flex items-baseline mx-10",
  };
  //  console.log(size)

  const handleQtyIncrement = () => {
    if (quantity >= 0) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecIncrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <ProductShowcase />
      </div>
      <div className={styles.productDetail}>
        <div className={styles.descPriceContainer}>
          <p className="typo">
            This is the description of the product being displayed here.
          </p>
          <p className="price">$100</p>
        </div>
        <div className={styles.selectSize}>
          <p className="text-2xl ml-2">Size: </p>
          <form className={styles.sizesContainer}>
            {sizes.map((size, index) => (
              <>
                <input
                  type="radio"
                  name="sizes"
                  id={size.name}
                  className="size-radio"
                  key={index}
                  value={size.value}
                />
                <label htmlFor={size.name} id="size-box" className={size.name}>
                  {size.value}
                </label>
              </>
            ))}
          </form>
        </div>
        <div className={styles.qty}>
          <p>Quantity: </p>
          <div className={styles.IncDecContainer}>
            <button className="circle" onClick={handleQtyIncrement}>
              +
            </button>
            <p>{quantity}</p>
            <button className="circle" onClick={handleDecIncrement}>
              -
            </button>
          </div>
        </div>
        <div className={styles.callToActionContainer}>
          <Link to="/cart" className="w-full">
            <button className="btn">Buy now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
