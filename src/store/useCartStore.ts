import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';

export type CartItem = {
  id: string;
  product_id: string;
  size: string;
  quantity: number;
  product: {
    name: string;
    price: number;
    images: string[];
  }
};

interface CartState {
  items: CartItem[];
  isLoading: boolean;
  fetchCart: () => Promise<void>;
  addToCart: (productId: string, size: string, quantity: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isLoading: false,
  fetchCart: async () => {
    set({ isLoading: true });
    const supabase = createClient();
    const { data: userData } = await supabase.auth.getUser();
    
    if (!userData.user) {
      set({ items: [], isLoading: false });
      return;
    }

    const { data } = await supabase
      .from('cart_items')
      .select('*, product:products(name, price, images)')
      .eq('user_id', userData.user.id);
      
    if (data) {
      set({ items: data as any, isLoading: false });
    } else {
      set({ isLoading: false });
    }
  },
  addToCart: async (productId, size, quantity) => {
    const supabase = createClient();
    const { data: userData } = await supabase.auth.getUser();
    
    if (!userData.user) return; // Prompt login in real app
    
    await supabase.from('cart_items').upsert({
      user_id: userData.user.id,
      product_id: productId,
      size,
      quantity
    }, { onConflict: 'user_id, product_id, size' });
    
    get().fetchCart();
  },
  removeFromCart: async (itemId) => {
    const supabase = createClient();
    await supabase.from('cart_items').delete().eq('id', itemId);
    get().fetchCart();
  },
  updateQuantity: async (itemId, quantity) => {
    const supabase = createClient();
    await supabase.from('cart_items').update({ quantity }).eq('id', itemId);
    get().fetchCart();
  }
}));
