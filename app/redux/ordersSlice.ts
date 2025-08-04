import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./types";

interface Order {
  id: string;
  name: string;
  address: string;
  phone: string;
  items: CartItem[];
  total: number;
  date: string;
}

const initialState: Order[] = [];

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload);
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
