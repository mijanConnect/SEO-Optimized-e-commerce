"use client";

import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Product } from "./../redux/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const alreadyInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!alreadyInCart) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      );
    }
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={alreadyInCart}
      className={`mt-5 px-6 py-2 text-white rounded ${
        alreadyInCart
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gray-700 hover:bg-gray-500 transition cursor-pointer"
      }`}
    >
      {alreadyInCart ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
