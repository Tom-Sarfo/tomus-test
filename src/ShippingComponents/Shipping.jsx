import React, { useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShippingDetails from "./ShippingDetails";
export default function Shipping() {
  const [shippingMethod, setShippingMethod] = useState("Deliver to my location");

  function handleChangeMethod (e){
    setShippingMethod(e.target.value);
  }
  
  console.log(shippingMethod);

  return (
    <div className="">
      <h1 className="text-xl py-5 px-7 text-black">Select your preffered shipping method</h1>
      {/* use radio buttons */}
      <form className="flex justify-around py-3">
        <input
          type="radio"
          name="shippingMethod"
          id="myLocation"
          className="radioCardBtn"
          value="Deliver to my location"
          onChange={handleChangeMethod}
          checked={shippingMethod === "Deliver to my location"}
        />
        <label
          htmlFor="myLocation"
          id="radioCardlabel"
          className="myLocation"
        >
          <LocalShippingIcon /> <span>Ship to me</span>
        </label>
        <input
          type="radio"
          name="shippingMethod"
          id="pickUp"
          className="radioCardBtn"
          value="I'll pick it up"
          onChange={handleChangeMethod}
          checked={shippingMethod === "I'll pick it up"}
        />
        <label htmlFor="pickUp" id="radioCardlabel" className="pickUp">
          <ShoppingBagIcon /> <span>I'll pick it up</span>
        </label>
      </form>
      <ShippingDetails shippingMethod={shippingMethod}/>
    </div>
  );
}
