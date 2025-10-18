import { supabase, mapSupabaseProductToUI } from "@/lib/supabase";
import { ProductList } from "../components/product-list";

export default async function ProductsPage() {
  // Načítaj všetky produkty
  const { data: supabaseProducts, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
  }

  const products = supabaseProducts
    ? supabaseProducts.map(mapSupabaseProductToUI)
    : [];

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-light leading-none tracking-tight text-foreground text-center mb-8">
        Všetky produkty
      </h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductList products={products} />
      </div>
    </div>
  );
}