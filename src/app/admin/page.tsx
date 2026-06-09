import { ArrowUpRight, IndianRupee, Package, ShoppingCart, Users } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <div className="text-sm text-zinc-400">Last 30 Days</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-background border border-border p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-zinc-900 rounded"><IndianRupee className="w-5 h-5" /></div>
            <span className="text-emerald-500 flex items-center text-sm font-medium"><ArrowUpRight className="w-4 h-4 mr-1"/> 12.5%</span>
          </div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Total Revenue</p>
          <h3 className="text-2xl font-bold">₹1,24,500</h3>
        </div>
        
        <div className="bg-background border border-border p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-zinc-900 rounded"><ShoppingCart className="w-5 h-5" /></div>
            <span className="text-emerald-500 flex items-center text-sm font-medium"><ArrowUpRight className="w-4 h-4 mr-1"/> 8.2%</span>
          </div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Total Orders</p>
          <h3 className="text-2xl font-bold">142</h3>
        </div>

        <div className="bg-background border border-border p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-zinc-900 rounded"><Users className="w-5 h-5" /></div>
            <span className="text-emerald-500 flex items-center text-sm font-medium"><ArrowUpRight className="w-4 h-4 mr-1"/> 18.1%</span>
          </div>
          <p className="text-zinc-400 text-sm font-medium mb-1">New Customers</p>
          <h3 className="text-2xl font-bold">89</h3>
        </div>

        <div className="bg-background border border-border p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-zinc-900 rounded"><Package className="w-5 h-5" /></div>
          </div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Low Stock Items</p>
          <h3 className="text-2xl font-bold text-amber-500">12</h3>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-background border border-border">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h2 className="font-bold text-lg">Recent Orders</h2>
          <button className="text-sm font-medium hover:text-zinc-300">View All</button>
        </div>
        <div className="p-0">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-zinc-900/50 text-zinc-400 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-zinc-900/20">
                  <td className="px-6 py-4 font-medium">#ESC-{1000 + i}</td>
                  <td className="px-6 py-4">Customer {i}</td>
                  <td className="px-6 py-4 text-zinc-400">Today, 10:00 AM</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">Processing</span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">₹2,499</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
