import Link from 'next/link';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Mobile Menu */}
        <div className="flex md:hidden items-center">
          <button className="p-2 -ml-2 text-foreground/80 hover:text-foreground">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tighter uppercase flex-1 md:flex-none text-center md:text-left">
          ESCAPE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <Link href="/shop" className="hover:text-foreground transition-colors">Shop All</Link>
          <Link href="/shop?category=new-arrivals" className="hover:text-foreground transition-colors">New Arrivals</Link>
          <Link href="/shop?category=best-sellers" className="hover:text-foreground transition-colors">Best Sellers</Link>
          <Link href="/shop?category=collections" className="hover:text-foreground transition-colors">Collections</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-foreground/80 hover:text-foreground hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/account" className="p-2 text-foreground/80 hover:text-foreground hidden sm:block">
            <User className="w-5 h-5" />
          </Link>
          <Link href="/cart" className="p-2 text-foreground/80 hover:text-foreground relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-foreground text-background text-[10px] font-bold flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
