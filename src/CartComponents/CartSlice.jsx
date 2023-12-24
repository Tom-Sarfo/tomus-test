import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
} 

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddItem: (state, action) => {
            const item = {
                id: nanoid(),
                prod_id: action.payload.prod_id,
                productName: action.payload.productName,
                productPrice: action.payload.price,
                size: action.payload.size,
                qty: action.payload.qty,
                imgUrl: action.payload.imgUrl
            }
            state.cart.push(item);

        },
    }
})

console.log(initialState);

export const { AddItem, EditItem, RemoveItem } = CartSlice.actions;
export default CartSlice.reducer;

