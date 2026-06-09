import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-xl tracking-tighter uppercase">ESCAPE</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Premium streetwear crafted for the modern individual. Redefining everyday fashion with quality and bold aesthetics.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-widest uppercase">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/shop" className="hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=new" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop?category=best" className="hover:text-foreground transition-colors">Best Sellers</Link></li>
              <li><Link href="/shop?category=accessories" className="hover:text-foreground transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-widest uppercase">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/tracking" className="hover:text-foreground transition-colors">Track Order</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-widest uppercase">Connect</h4>
            <p className="text-sm text-muted-foreground mt-4">Subscribe to our newsletter for exclusive drops.</p>
            <form className="flex mt-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-muted px-4 py-2 text-sm flex-1 outline-none focus:ring-1 focus:ring-foreground rounded-l-md"
              />
              <button className="bg-foreground text-background px-4 py-2 text-sm font-medium rounded-r-md hover:bg-foreground/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ESCAPE CLOTHING. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
