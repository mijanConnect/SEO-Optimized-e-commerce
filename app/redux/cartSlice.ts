import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) item.quantity += action.payload.quantity;
      else state.push(action.payload);
    },
    clearCart: () => [],
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
