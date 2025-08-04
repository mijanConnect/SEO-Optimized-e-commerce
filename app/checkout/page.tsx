"use client";

import { RootState } from "@/app/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { placeOrder } from "../redux/ordersSlice";

export default function CheckoutPage() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const validate = () => {
    const errs = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      address: formData.address.trim() === "" ? "Address is required" : "",
      phone: /^\d{11}$/.test(formData.phone)
        ? ""
        : "Enter a valid 11-digit phone number",
    };
    setErrors(errs);
    return !Object.values(errs).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const order = {
      id: Date.now().toString(),
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date().toISOString(),
    };

    dispatch(placeOrder(order));
    dispatch(clearCart());

    router.push("/thank-you");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="bg-gray-500 mb-2 py-2 px-3 rounded flex gap-4 items-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={50}
              height={50}
              className="object-contain min-h-[50px] min-w-[50px] bg-slate-50 rounded p-2"
            />
            <div>
              {item.title} x {item.quantity}
            </div>
          </div>
        ))
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 mt-12 bg-slate-900 py-12 px-12 rounded"
      >
        <div>
          <label className="block font-medium mb-2">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block font-medium mb-2">Shipping Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>
        <div>
          <label className="block font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={cart.length === 0}
          className={`mt-2 px-2 py-2 w-full rounded ${
            cart.length === 0
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gray-700 hover:bg-gray-500 transition cursor-pointer"
          }`}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
