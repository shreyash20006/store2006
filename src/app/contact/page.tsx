export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Contact Us</h1>
        <p className="text-zinc-400">We're here to help.</p>
      </div>

      <section className="space-y-6">
        <p className="text-zinc-300">
          Have a question about your order, a return, or just want to talk streetwear? Drop us an email and our team will get back to you within 24-48 hours.
        </p>

        <div className="bg-zinc-950 border border-border p-8 text-center space-y-4">
          <h3 className="font-bold uppercase tracking-widest text-lg">Email Support</h3>
          <p className="text-zinc-400">
            Reach out to us anytime at:
          </p>
          <a href="mailto:support@escapeclothing.shop" className="text-2xl font-black hover:text-zinc-300 transition-colors block">
            support@escapeclothing.shop
          </a>
        </div>
      </section>

      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Business Hours</h2>
        <ul className="text-zinc-300 space-y-2">
          <li>Monday - Friday: 10:00 AM - 6:00 PM (IST)</li>
          <li>Saturday - Sunday: Closed</li>
        </ul>
        <p className="text-sm text-zinc-500 mt-4">Emails received during weekends or public holidays will be processed on the next business day.</p>
      </section>
    </div>
  );
}
