import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import ProductShowcase from "../ProductShowcase";
import Carousel from "./Carousel";
import { ItemData } from "../Common/ItemCard/ItemCardData";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../CartComponents/CartSlice"

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
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const prod_id = useParams();
  const stuff = useSelector((state) => state.cart.value);
  console.log(stuff);
  const items = ItemData.filter((item) => item.prod_id === Number(prod_id.id));
  // console.log(items);
  // console.log(prod_id.id);

  const styles = {
    productContainer:
      "flex flex-col lg:justify-between h-screen overflow-y-scroll text-2xl lg:px-2 lg:py-5 mt-16",
    productImage: "bg-white w-full h-auto lg:h-96",
    productDetail:
      "bg-white w-full h-56 md:h-48 flex p-3 flex-col my-11 lg:my-1 md:my-auto md:mt-11",
    descPriceContainer: "flex justify-between md:mb-7",
    imageIcon: "text-white",
    selectSize: "flex justify-between mt-10 md:mt-1 text-black",
    sizesContainer: "grid grid-cols-5 gap-0.5",
    qty: "flex justify-between text-2xl md:text-3xl my-4 md:my-9 2xl:my-16 ml-2 lg:px-5 text-black",
    callToActionContainer: "mt-3 flex w-full justify-evenly",
    IncDecContainer: "flex items-baseline mx-10",
  };

  const cartItem = {
    prod_id: Number(prod_id.id),
    productName: items[0].productName,
    price: items[0].productPrice,
    size: size,
    qty: quantity,
    imgUrl: items[0].imgUrl[0],
  };

  function handleAddItemToCart() {
    dispatch(AddItem(cartItem));
  }

  function handleSizeChange(e) {
    setSize(e.target.value);
  }

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
    <div>
      <div className={styles.productContainer}>
        <div className="flex flex-col lg:flex-row lg:p-11">
          <div className={styles.productImage}>
            <Carousel data={items} />
          </div>
          <div className={styles.productDetail}>
            <div className={styles.descPriceContainer}>
              <p className="typo">
                This is the description of the product being displayed here.
              </p>
              <p className="price">${items[0].productPrice}</p>
            </div>
            <div className={styles.selectSize}>
              <p className="text-2xl md:text-3xl ml-2 lg:px-5">Size: </p>
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
                      onChange={handleSizeChange}
                    />
                    <label
                      htmlFor={size.name}
                      id="size-box"
                      className={size.name}
                    >
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
                <button className="btn" onClick={handleAddItemToCart}>
                  Buy now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Product;
