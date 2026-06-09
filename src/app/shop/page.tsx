"use client";

import Link from "next/link";
import { Filter, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Shop() {
  const stagger = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { staggerChildren: 0.1 }
  };

  const itemAnim = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
      >
        <h1 className="text-4xl font-black uppercase tracking-tighter">Shop Collection</h1>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="flex items-center gap-2 border border-border px-4 py-2 text-sm font-medium hover:bg-zinc-900 transition-colors flex-1 md:flex-none justify-center">
            <Filter className="w-4 h-4" /> Filters
          </button>
          <div className="relative flex-1 md:flex-none">
            <select className="appearance-none border border-border bg-background px-4 py-2 pr-10 text-sm font-medium focus:outline-none focus:border-white w-full">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters (Desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block w-64 space-y-8 flex-shrink-0"
        >
          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Categories</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><label className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" className="accent-white" /> T-Shirts</label></li>
              <li><label className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" className="accent-white" /> Hoodies & Sweatshirts</label></li>
              <li><label className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" className="accent-white" /> Bottoms</label></li>
              <li><label className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" className="accent-white" /> Accessories</label></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button key={size} className="border border-border py-2 text-xs font-bold hover:border-white transition-colors">
                  {size}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="flex-1">
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div variants={itemAnim} key={item}>
                <Link href={`/shop/product-${item}`} className="group cursor-pointer block">
                  <div className="relative aspect-[3/4] bg-zinc-900 mb-4 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 transition-transform duration-700 group-hover:scale-105">
                      Product Image
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg group-hover:text-zinc-300 transition-colors">Premium Blank Tee</h3>
                    <p className="text-zinc-400">₹1,299</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
