"use client";

import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Users, Settings, Tag, MessageSquare, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: ShoppingBag },
    { name: "Orders", href: "/admin/orders", icon: Tag },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Reviews", href: "/admin/reviews", icon: MessageSquare },
  ];

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-zinc-950">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-border bg-background p-6 flex flex-col hidden md:flex">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8">Admin Panel</h2>
        
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${isActive ? 'bg-zinc-900 text-white font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="pt-8 border-t border-border mt-auto">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-500 hover:bg-zinc-900 rounded-md transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
