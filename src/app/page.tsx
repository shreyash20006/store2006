import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/80 z-10" />
        {/* Placeholder for hero image, will use a nice dark texture or image later. 
            For now, using a gradient for the premium feel. */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black z-0" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-8 mt-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white drop-shadow-lg">
            Define Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white">
              Own Reality
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light">
            Premium streetwear crafted for those who break the mold. Uncompromising quality, distinct aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/shop" 
              className="bg-white text-black px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              Shop Collection <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/shop?category=new-arrivals" 
              className="border border-white/30 text-white px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white/10 transition-all"
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold tracking-tight uppercase">Categories</h2>
          <Link href="/shop" className="text-sm font-medium uppercase tracking-widest hover:text-zinc-400 transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['T-Shirts', 'Hoodies', 'Accessories'].map((category, i) => (
            <Link href={`/shop?category=${category.toLowerCase()}`} key={i} className="group relative h-[400px] overflow-hidden bg-zinc-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <h3 className="relative z-10 text-2xl font-bold uppercase tracking-widest text-white">{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals (Placeholder for DB connection later) */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold tracking-tight uppercase">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-zinc-900 mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700">Image</div>
                <div className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">
                  New
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-lg">Oversized Heavyweight Tee</h3>
                <p className="text-zinc-400">₹1,499</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-zinc-900 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight uppercase mb-16">The Verdict</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <div key={review} className="bg-black p-8 border border-white/5 text-left">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-6">"The quality of the heavyweight tee is unmatched. Best oversized fit I've found in India so far."</p>
                <p className="font-bold uppercase tracking-widest text-sm">— Rahul K.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 max-w-2xl text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight uppercase">Join the Cult</h2>
        <p className="text-zinc-400 font-light">Sign up to get early access to drops and exclusive content.</p>
        <form className="flex max-w-md mx-auto mt-6">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-zinc-900 border border-zinc-800 px-4 py-3 outline-none focus:border-white transition-colors"
          />
          <button className="bg-white text-black px-6 font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
