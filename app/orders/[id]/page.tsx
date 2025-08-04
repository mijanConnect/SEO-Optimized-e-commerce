"use client";

import { RootState } from "@/app/redux/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function OrderDetailsPage() {
  const { id } = useParams();
  const order = useSelector((state: RootState) =>
    state.orders.find((o) => o.id === id)
  );

  if (!order) {
    return <p className="text-center mt-10">Order not found.</p>;
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-slate-900 py-8 px-8 mb-6 rounded">
        <h1 className="text-2xl font-bold mb-4">Order Details</h1>
        <div className="flex flex-col gap-2">
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>Name:</strong> {order.name}
          </p>
          <p>
            <strong>Address:</strong> {order.address}
          </p>
          <p>
            <strong>Phone:</strong> {order.phone}
          </p>
          <p>
            <strong>Date:</strong> {new Date(order.date).toLocaleString()}
          </p>
          <p>
            <strong>Total Amount:</strong> ${order.total.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="bg-slate-900 py-8 px-8 mb-6 rounded">
        <h2 className="text-xl font-semibold mb-3">Order Items</h2>
        <ul className="space-y-2">
          {order.items.map((item, index) => (
            <li key={index} className="bg-gray-500 p-3 rounded">
              <p>
                <strong>{item.title}</strong> × {item.quantity}
              </p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
