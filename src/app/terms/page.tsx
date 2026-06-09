export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Terms & Conditions</h1>
        <p className="text-zinc-400">Last Updated: June 2026</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Acceptance of Terms</h2>
        <p className="text-zinc-300">
          By using Escape Clothing, you agree to these Terms & Conditions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Products</h2>
        <p className="text-zinc-300">
          We strive to display product information accurately. However, slight variations in color or appearance may occur.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Pricing</h2>
        <p className="text-zinc-300">
          All prices are displayed in Indian Rupees (INR) and are subject to change without notice.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Orders</h2>
        <p className="text-zinc-300">
          We reserve the right to cancel or refuse any order suspected of fraud or misuse.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Intellectual Property</h2>
        <p className="text-zinc-300">
          All content, branding, logos, designs, and website materials are the property of Escape Clothing and may not be copied or reproduced without permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Limitation of Liability</h2>
        <p className="text-zinc-300">
          Escape Clothing shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Changes to Terms</h2>
        <p className="text-zinc-300">
          We reserve the right to modify these terms at any time.
        </p>
      </section>

      <div className="pt-8 border-t border-border">
        <p className="text-zinc-400">For any queries, please contact us at: <a href="mailto:support@escapeclothing.shop" className="text-white hover:underline">support@escapeclothing.shop</a></p>
      </div>
    </div>
  );
}
