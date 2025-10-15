import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Typy pre databázu
export interface SupabaseProduct {
  id: string;
  name: string;
  description: string | null;
  images: string[];
  price: number | null;
  currency: string;
  created_at: string;
  updated_at: string;
}

// Transformácia na UI typ
export interface UIProduct {
  id: string;
  name: string;
  description: string | null;
  images: string[];
  default_price: {
    unit_amount: number | null;
    currency: string;
  } | null;
}

export function mapSupabaseProductToUI(product: SupabaseProduct): UIProduct {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    images: product.images,
    default_price: product.price !== null ? {
      unit_amount: Math.round(product.price * 100), // Konverzia € na centy
      currency: product.currency.toLowerCase(),
    } : null,
  };
}