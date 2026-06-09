export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-16">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Shipping & Returns</h1>
        <p className="text-zinc-400">Last Updated: June 2026</p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Shipping Policy</h2>
        
        <div>
          <h3 className="font-bold mb-2">Processing Time</h3>
          <p className="text-zinc-300">Orders are typically processed within 1–3 business days after confirmation.</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Delivery Timeline</h3>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Metro Cities: 3–5 business days</li>
            <li>Other Locations: 5–8 business days</li>
            <li>Remote Areas: 7–10 business days</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Shipping Charges & Delays</h3>
          <p className="text-zinc-300 mb-2">Shipping charges, if applicable, will be displayed at checkout.</p>
          <p className="text-zinc-300">Delivery timelines may be affected by weather conditions, courier delays, public holidays, or unforeseen circumstances.</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Return Policy</h2>
        <p className="text-zinc-300">We offer a 7-day return policy from the date of delivery.</p>
        
        <div>
          <h3 className="font-bold mb-2">Return Conditions</h3>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Product must be unused and unworn.</li>
            <li>Product must be returned with all original tags and packaging intact.</li>
            <li>Any signs of use, washing, or damage may result in rejection of the return request.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Return Procedure & Shipping</h3>
          <ol className="list-decimal pl-5 space-y-2 text-zinc-300">
            <li>Contact our support team at support@escapeclothing.shop</li>
            <li>Provide your order number and reason for return.</li>
            <li>Follow the return instructions provided by our team.</li>
          </ol>
          <p className="text-zinc-300 mt-4">Customers may be responsible for return shipping charges unless the product received is defective or incorrect.</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Refund Policy</h2>
        <p className="text-zinc-300">At Escape Clothing, customer satisfaction is important to us. If you are not completely satisfied with your purchase, please review our refund policy below.</p>
        
        <div>
          <h3 className="font-bold mb-2">Eligibility for Refunds</h3>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Refund requests must be made within 7 days of receiving the order.</li>
            <li>The item must be unused, unwashed, and in its original condition.</li>
            <li>All original tags and packaging must be intact.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Non-Refundable Items</h3>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            <li>Items purchased during special sales or clearance events.</li>
            <li>Gift cards and promotional items.</li>
            <li>Products damaged due to misuse by the customer.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Refund Process</h3>
          <p className="text-zinc-300 mb-2">Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</p>
          <p className="text-zinc-300">Approved refunds will be processed to the original payment method within 5–10 business days.</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold uppercase tracking-tight pb-2 border-b border-border">Cancellation Policy</h2>
        
        <div>
          <h3 className="font-bold mb-2">Order Cancellation</h3>
          <p className="text-zinc-300 mb-2">Orders may be cancelled before they are shipped. Once an order has been dispatched, cancellation requests may not be accepted.</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Refund for Cancelled Orders</h3>
          <p className="text-zinc-300">If payment has already been made, eligible cancellations will be refunded to the original payment method.</p>
        </div>
      </section>

      <div className="pt-8 border-t border-border">
        <p className="text-zinc-400">For any queries, please contact us at: <a href="mailto:support@escapeclothing.shop" className="text-white hover:underline">support@escapeclothing.shop</a></p>
      </div>
    </div>
  );
}
