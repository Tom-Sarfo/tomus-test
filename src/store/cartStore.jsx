import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      AddCartItem: (payload) =>
        set((state) => ({
          cart: [
            ...state.cart,
            {
              id: state.cart.length + 1,
              prod_id: payload.prod_id,
              productName: payload.productName,
              productPrice: payload.productPrice,
              size: payload.size,
              qty: payload.qty,
              imgUrl: payload.imgUrl,
            },
          ],
        })),
      RemoveCartItem: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((data) => data.id !== itemId),
        })),
      //this block give a wrong output
      EditCartItem: (itemToEdit, newSize) =>
        set((state) => ({
          cart: state.cart.map((item) => {
            item.id === itemToEdit.id ? { ...item, size: 3} : item;
          }),
          
        })),
    }),
    {
      name: "cart-item",
      Storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
