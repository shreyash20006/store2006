import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Frequently Asked Questions</h1>
        <p className="text-zinc-400">Last Updated: June 2026</p>
      </div>

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="font-bold text-lg">How long does delivery take?</h3>
          <p className="text-zinc-300">Most orders are delivered within 3–8 business days.</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg">Do you offer Cash on Delivery?</h3>
          <p className="text-zinc-300">Cash on Delivery availability depends on your location.</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg">Can I return a product?</h3>
          <p className="text-zinc-300">Yes, eligible products can be returned within 7 days of delivery. Read more in our <Link href="/shipping" className="text-white underline">Return Policy</Link>.</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg">How do I track my order?</h3>
          <p className="text-zinc-300">Tracking information will be shared after dispatch. You can also view it in your <Link href="/account" className="text-white underline">Account Dashboard</Link>.</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg">How can I contact support?</h3>
          <p className="text-zinc-300">Email us at <a href="mailto:support@escapeclothing.shop" className="text-white underline">support@escapeclothing.shop</a>.</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg">Which payment methods are accepted?</h3>
          <p className="text-zinc-300">UPI, Debit Cards, Credit Cards, Net Banking, Wallets, and other supported payment methods through Cashfree.</p>
        </div>
      </section>
    </div>
  );
}
