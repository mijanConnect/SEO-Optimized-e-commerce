"use client";

import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function OrdersPage() {
  const orders = useSelector((state: RootState) => state.orders);

  if (orders.length === 0) {
    return <p className="text-center mt-8">No orders placed yet.</p>;
  }
  return (
    <div className="w-full mx-auto pt-6">
      <h1 className="text-2xl font-bold mb-4">Order List</h1>
      <table className="w-full border-collapse bg-slate-800 shadow-md">
        <thead>
          <tr className="bg-slate-900 text-left">
            <th className="p-3 border">Order ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Total Items</th>
            <th className="p-3 border">Amount</th>
            <th className="p-3 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-slate-700 transition">
              <td className="p-3 border">
                <Link
                  href={`/orders/${order.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {order.id}
                </Link>
              </td>
              <td className="p-3 border">{order.name}</td>
              <td className="p-3 border">{order.items.length}</td>
              <td className="p-3 border">${order.total.toFixed(2)}</td>
              <td className="p-3 border">
                {new Date(order.date).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
