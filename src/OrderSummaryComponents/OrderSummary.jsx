import Divider from "@mui/material/Divider";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function OrderSummary() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const os = {
    inlineText: "flex justify-between text-gray-700",
  };

  return (
    <div className="flex flex-col py-7 lg:py-0 px-2 text-xl gap-4">
      <Divider />
      <h1 className="text-2xl font-bold text-black">Order summary</h1>
      <div>
        <p className="text-black font-bold mb-2">Shipping details</p>
        <div className={os.inlineText}>
          <p className="mr-2">Location: </p>{" "}
          <span>Dansoman Nsuobri st. Ghana</span>
        </div>
        <div className={os.inlineText}>
          <p className="mr-2">Email:</p>
          <span>tomsarfodavis@gmail.com</span>
        </div>
        <div className={os.inlineText}>
          <p className="mr-2">Phone:</p>
          <span>0549649770</span>
        </div>
      </div>
      <div className={os.inlineText}>
        <p>Subtotal:</p>
        <span>$453</span>
      </div>
      <div className={os.inlineText}>
        <p>Shipping fee:</p>
        <span>$20</span>
      </div>
      <div className={os.inlineText}>
        <h2 className="font-bold">Total</h2>
        <span className="font-bold">$493</span>
      </div>
      <Link to="https://flutterwave.com/pay/tomusbirkndsq">
        <button className="btn">Make Paymennt</button>
      </Link>
    </div>
  );
}
