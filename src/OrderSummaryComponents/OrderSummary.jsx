import Divider from "@mui/material/Divider";
import React from "react";

export default function OrderSummary() {
  const os = {
    inlineText: "flex justify-between text-gray-700",
  }

  return (
    <div className="flex flex-col py-7 px-2 text-xl gap-4">
      <Divider />
      <h1 className="text-2xl font-bold">Order summary</h1>
      <div className={os.inlineText}>
        <p>Subtotal</p>
        <span>$453</span>
      </div>
      <div className={os.inlineText}>
        <p>Shipping</p>
        <span>$20</span>
      </div>
      <div className={os.inlineText}>
        <h2 className="font-bold">Total</h2>
        <span className="font-bold">$493</span>
      </div>
      <button className="btn">Make Paymennt</button>
    </div>
  );
}
