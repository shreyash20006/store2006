"use client";

import { Plus, Search, Edit, Trash2 } from "lucide-react";

export default function AdminProducts() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <button className="bg-white text-black px-4 py-2 flex items-center gap-2 font-bold text-sm hover:bg-zinc-200 transition-colors">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-background border border-border">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-zinc-950 border border-border pl-10 pr-4 py-2 text-sm outline-none focus:border-white transition-colors"
            />
          </div>
          <select className="bg-zinc-950 border border-border px-4 py-2 text-sm outline-none focus:border-white">
            <option>All Categories</option>
            <option>T-Shirts</option>
            <option>Hoodies</option>
          </select>
        </div>

        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-zinc-900/50 text-zinc-400 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-medium">Product</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Price</th>
              <th className="px-6 py-4 font-medium">Stock</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-zinc-900/20">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-800" />
                    <span className="font-medium">Premium Heavyweight Tee {i}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-zinc-400">T-Shirts</td>
                <td className="px-6 py-4 font-medium">₹1,499</td>
                <td className="px-6 py-4">142</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Active</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-3">
                    <button className="text-zinc-400 hover:text-white"><Edit className="w-4 h-4" /></button>
                    <button className="text-zinc-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
