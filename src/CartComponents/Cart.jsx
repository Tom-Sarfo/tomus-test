import Stack from "@mui/material/Stack";
import CartCard from "./CartCard";
import { Outlet } from "react-router-dom";
import useCartStore from "../store/cartStore";
import { useEffect } from "react";

const cartSyles = {
  container:
    "flex flex-col lg:flex-row lg:justify-center py-5 h-full px-4 mt-16",
};

export default function Cart() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const cart = useCartStore((state) => state.cart);
  const addCartItem = useCartStore((state) => state.AddCartItem);

  return (
    <div className={cartSyles.container}>
      <div className="lg:mx-3">
        <Stack gap={0.5}>
          {cart?.map((data) => (
            <CartCard key={data.id} data={data} />
          ))}
        </Stack>
      </div>
      <Outlet />
    </div>
  );
}
