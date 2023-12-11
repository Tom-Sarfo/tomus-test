import React from "react";
import Shipping from "../ShippingComponents/Shipping";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export default function ShippingOutlet() {
  const cartSyles = {
    container: "flex flex-col py-2 h-full px-2 ",
    totals:
      "flex justify-between w-full h-10 rounded bg-white text-purple-700 drop-shadow p-2 my-4 text-left text-xl",
  };
  return (
    <div>
      <div className={cartSyles.totals}>
        Subtotal
        <p>$543</p>
      </div>
      <Divider />
      <div className="my-4">
        <Shipping />
      </div>
      <Link to="/cart/summary">
        <button className="btn">Checkout</button>
      </Link>
    </div>
  );
}
