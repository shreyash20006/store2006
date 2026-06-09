export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-zinc-400">Last Updated: June 2026</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Information We Collect</h2>
        <p className="text-zinc-300 mb-2">We may collect:</p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Shipping Address</li>
          <li>Billing Information</li>
          <li>Order Details</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">How We Use Information</h2>
        <p className="text-zinc-300 mb-2">We use your information to:</p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>Process orders</li>
          <li>Deliver products</li>
          <li>Provide customer support</li>
          <li>Improve our services</li>
          <li>Send order updates</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Payment Information</h2>
        <p className="text-zinc-300">
          Payments are processed securely through trusted payment providers. We do not store card or banking details on our servers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Data Protection</h2>
        <p className="text-zinc-300">
          We implement reasonable security measures to protect customer information.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Third-Party Services</h2>
        <p className="text-zinc-300 mb-2">We may use:</p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>Google Authentication</li>
          <li>Cashfree Payments</li>
          <li>Analytics Services</li>
          <li>Cloud Hosting Services</li>
        </ul>
      </section>

      <div className="pt-8 border-t border-border">
        <p className="text-zinc-400">For any queries, please contact us at: <a href="mailto:support@escapeclothing.shop" className="text-white hover:underline">support@escapeclothing.shop</a></p>
      </div>
    </div>
  );
}
