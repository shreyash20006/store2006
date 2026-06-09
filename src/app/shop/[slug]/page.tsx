"use client";

import { use } from "react";
import { Star, Minus, Plus, Heart, Truck, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  // Wait for params in Next.js 15
  const { slug } = use(params);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="aspect-[3/4] bg-zinc-900 w-full relative">
             <div className="absolute inset-0 flex items-center justify-center text-zinc-700">Main Product Image</div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((img) => (
              <div key={img} className="aspect-square bg-zinc-900 cursor-pointer border-2 border-transparent hover:border-white transition-all">
                <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs">Thumb</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col"
        >
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Premium Heavyweight Tee</h1>
          
          <div className="flex items-center gap-4 mt-4">
            <span className="text-2xl font-medium">₹1,499</span>
            <span className="text-lg text-zinc-500 line-through">₹2,499</span>
            <span className="bg-white text-black px-2 py-1 text-xs font-bold uppercase tracking-wider">Save 40%</span>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex text-white">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-zinc-400 text-sm">(128 Reviews)</span>
          </div>

          <p className="text-zinc-300 mt-8 font-light leading-relaxed">
            Crafted from 240 GSM French Terry cotton, this oversized tee offers a structured drape and unparalleled comfort. Pre-shrunk and garment dyed for a vintage look that gets better with every wash.
          </p>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold uppercase tracking-widest text-sm">Size</h3>
              <button className="text-xs text-zinc-400 hover:text-white underline underline-offset-4">Size Guide</button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button key={size} className="border border-border py-3 font-bold hover:border-white focus:border-white focus:bg-white focus:text-black transition-all">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="flex items-center border border-border h-14 w-32">
              <button className="w-10 h-full flex items-center justify-center hover:bg-zinc-900 transition-colors"><Minus className="w-4 h-4" /></button>
              <span className="flex-1 text-center font-medium">1</span>
              <button className="w-10 h-full flex items-center justify-center hover:bg-zinc-900 transition-colors"><Plus className="w-4 h-4" /></button>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors h-14"
            >
              Add to Cart
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 border border-border flex items-center justify-center hover:bg-zinc-900 transition-colors"
            >
              <Heart className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="mt-12 space-y-4 border-t border-border pt-8">
            <div className="flex items-start gap-4">
              <Truck className="w-5 h-5 mt-0.5" />
              <div>
                <h4 className="font-bold uppercase text-sm mb-1">Free Shipping</h4>
                <p className="text-zinc-400 text-sm font-light">On all orders over ₹2,000 within India.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-5 h-5 mt-0.5" />
              <div>
                <h4 className="font-bold uppercase text-sm mb-1">7-Day Returns</h4>
                <p className="text-zinc-400 text-sm font-light">Not satisfied? Return it within 7 days for a full refund.</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
