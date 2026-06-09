"use client";

import Link from "next/link";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
// import { useCartStore } from "@/store/useCartStore";

export default function CartPage() {
  // Mock cart items for UI preview. In real app, use useCartStore
  const items = [
    { id: 1, name: "Premium Heavyweight Tee", size: "L", price: 1499, quantity: 1, image: "" },
    { id: 2, name: "Cargo Pants", size: "M", price: 2999, quantity: 1, image: "" }
  ];

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 150;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8">Your Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-zinc-400 mb-6">Your cart is currently empty.</p>
          <Link href="/shop" className="bg-white text-black px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-zinc-200 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 border border-border p-4 bg-zinc-950">
                <div className="w-24 h-32 bg-zinc-900 flex-shrink-0 flex items-center justify-center text-xs text-zinc-700">
                  Img
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-zinc-400 text-sm mt-1">Size: {item.size}</p>
                    </div>
                    <p className="font-medium">₹{item.price}</p>
                  </div>
                  
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-border h-10 w-28 bg-background">
                      <button className="w-8 h-full flex items-center justify-center hover:bg-zinc-900 transition-colors"><Minus className="w-3 h-3" /></button>
                      <span className="flex-1 text-center font-medium text-sm">{item.quantity}</span>
                      <button className="w-8 h-full flex items-center justify-center hover:bg-zinc-900 transition-colors"><Plus className="w-3 h-3" /></button>
                    </div>
                    <button className="text-zinc-500 hover:text-white transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-zinc-950 border border-border p-6 h-fit sticky top-24">
            <h2 className="text-xl font-bold uppercase tracking-tight mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm mb-6 pb-6 border-b border-border">
              <div className="flex justify-between">
                <span className="text-zinc-400">Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-lg mb-8">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Link href="/checkout" className="w-full bg-white text-black py-4 flex items-center justify-center gap-2 uppercase tracking-widest font-bold text-sm hover:bg-zinc-200 transition-colors">
              Checkout <ArrowRight className="w-4 h-4" />
            </Link>
            
            <p className="text-xs text-zinc-500 text-center mt-4">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
