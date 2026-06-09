"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { LogOut, Package, Heart, MapPin, User as UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('orders');
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (!user) return <div className="min-h-screen bg-background" />;

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <div className="w-full md:w-64 space-y-2 flex-shrink-0">
        <div className="mb-8">
          <h2 className="text-xl font-bold uppercase tracking-tight">My Account</h2>
          <p className="text-zinc-400 text-sm">{user.email}</p>
        </div>
        
        <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center gap-3 px-4 py-3 text-left font-medium transition-colors ${activeTab === 'orders' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-white'}`}>
          <Package className="w-5 h-5" /> Orders
        </button>
        <button onClick={() => setActiveTab('wishlist')} className={`w-full flex items-center gap-3 px-4 py-3 text-left font-medium transition-colors ${activeTab === 'wishlist' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-white'}`}>
          <Heart className="w-5 h-5" /> Wishlist
        </button>
        <button onClick={() => setActiveTab('addresses')} className={`w-full flex items-center gap-3 px-4 py-3 text-left font-medium transition-colors ${activeTab === 'addresses' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-white'}`}>
          <MapPin className="w-5 h-5" /> Addresses
        </button>
        <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-3 px-4 py-3 text-left font-medium transition-colors ${activeTab === 'profile' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-white'}`}>
          <UserIcon className="w-5 h-5" /> Profile
        </button>
        
        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-left font-medium text-red-500 hover:bg-zinc-900 transition-colors mt-8">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 bg-zinc-950 border border-border p-8">
        {activeTab === 'orders' && (
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Order History</h3>
            <div className="text-center py-12 border border-border border-dashed">
              <p className="text-zinc-400">You haven't placed any orders yet.</p>
            </div>
          </div>
        )}
        {activeTab === 'wishlist' && (
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Wishlist</h3>
            <div className="text-center py-12 border border-border border-dashed">
              <p className="text-zinc-400">Your wishlist is empty.</p>
            </div>
          </div>
        )}
        {activeTab === 'addresses' && (
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Saved Addresses</h3>
            <button className="bg-white text-black px-6 py-3 uppercase tracking-widest font-bold text-sm hover:bg-zinc-200 transition-colors">
              Add New Address
            </button>
          </div>
        )}
        {activeTab === 'profile' && (
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Profile Settings</h3>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                <input type="text" value={user.email} disabled className="w-full bg-zinc-900 border border-border px-4 py-3 text-zinc-500 cursor-not-allowed" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
