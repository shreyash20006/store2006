"use client";

import { Search, Eye } from "lucide-react";

export default function AdminOrders() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>

      <div className="bg-background border border-border">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="w-full bg-zinc-950 border border-border pl-10 pr-4 py-2 text-sm outline-none focus:border-white transition-colors"
            />
          </div>
          <select className="bg-zinc-950 border border-border px-4 py-2 text-sm outline-none focus:border-white">
            <option>All Statuses</option>
            <option>Processing</option>
            <option>Packed</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>

        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-zinc-900/50 text-zinc-400 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-medium">Order ID</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Total</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-zinc-900/20">
                <td className="px-6 py-4 font-medium">#ESC-{1042 + i}</td>
                <td className="px-6 py-4 text-zinc-400">Oct 24, 2026</td>
                <td className="px-6 py-4">user{i}@example.com</td>
                <td className="px-6 py-4 font-medium">₹{(1299 * i).toLocaleString()}</td>
                <td className="px-6 py-4">
                  <select className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-xs outline-none">
                    <option>Processing</option>
                    <option>Packed</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-zinc-400 hover:text-white"><Eye className="w-4 h-4 inline" /> View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
