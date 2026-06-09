"use client";

import { ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-center">Secure Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-tight mb-4 pb-2 border-b border-border">1. Contact Information</h2>
            <div className="space-y-4">
              <input type="email" placeholder="Email Address" className="w-full bg-zinc-950 border border-border px-4 py-3 outline-none focus:border-white transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-zinc-950 border border-border px-4 py-3 outline-none focus:border-white transition-colors" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-tight mb-4 pb-2 border-b border-border">2. Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="col-span-1 bg-zinc-950 border border-border px-4 py-3 outline-none focus:border-white transition-colors" />
              <input type="text" placeholder="Last Name" className="col-span-1 bg-zinc-950 border border-border px-4 py-3 outline-none focus:border-white transition-colors" />
              <input type="text" placeholder="Address Line 1" className="col-span-2 bg-zinc-950 border border-border px-4 py-3 outline-none focus:border-white transition-colors" />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="col-span-2 bg-zinc-950 border border-border px-4 py-3 outline-none focus:border-white transition-colors" />
              <input type="text" placeholder="City" className="col-span-1 bg-zinc-950 border border-border px-4 py-3 outline-none focus:border-white transition-colors" />
              <input type="text" placeholder="State" className="col-span-1 bg-zinc-950 border border-border px-4 py-3 outline-none focus:border-white transition-colors" />
              <input type="text" placeholder="PIN Code" className="col-span-1 bg-zinc-950 border border-border px-4 py-3 outline-none focus:border-white transition-colors" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-tight mb-4 pb-2 border-b border-border">3. Payment</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded text-center">
              <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
              <p className="text-sm text-zinc-300">You will be redirected to Cashfree Payments to complete your purchase securely.</p>
            </div>
          </div>

          <button className="w-full bg-white text-black py-4 uppercase tracking-widest font-bold hover:bg-zinc-200 transition-colors">
            Pay Now (₹4,498)
          </button>
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-zinc-950 border border-border p-6 h-fit lg:sticky lg:top-24">
          <h2 className="text-xl font-bold uppercase tracking-tight mb-6">In Your Bag</h2>
          
          <div className="space-y-4 mb-6 pb-6 border-b border-border">
            {/* Mock Items */}
            <div className="flex gap-4">
              <div className="w-16 h-20 bg-zinc-900 flex-shrink-0" />
              <div className="flex-1 flex justify-between">
                <div>
                  <h4 className="font-bold text-sm">Premium Heavyweight Tee</h4>
                  <p className="text-xs text-zinc-500">Size: L • Qty: 1</p>
                </div>
                <p className="font-medium text-sm">₹1,499</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-20 bg-zinc-900 flex-shrink-0" />
              <div className="flex-1 flex justify-between">
                <div>
                  <h4 className="font-bold text-sm">Cargo Pants</h4>
                  <p className="text-xs text-zinc-500">Size: M • Qty: 1</p>
                </div>
                <p className="font-medium text-sm">₹2,999</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-zinc-400">Subtotal</span>
              <span>₹4,498</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Shipping</span>
              <span>Free</span>
            </div>
          </div>

          <div className="flex justify-between font-bold text-xl pt-4 border-t border-border">
            <span>Total</span>
            <span>₹4,498</span>
          </div>
        </div>
      </div>
    </div>
  );
}
