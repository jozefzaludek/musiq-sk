import Image from "next/image";
import { Button } from "./components/ui/button";
import Link from "next/link";
import { RecommendedProducts } from "./components/RecommendedProducts";
import { Carousel } from "./components/carousel";
import { supabase, mapSupabaseProductToUI } from "@/lib/supabase";

export default async function Home() {
  // Načítaj produkty zo Supabase
  const { data: supabaseProducts, error } = await supabase
    .from('products')
    .select('*')
    .limit(8)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
  }

  // Transformuj produkty na UI formát
  const products = supabaseProducts 
    ? supabaseProducts.map(mapSupabaseProductToUI)
    : [];

  return (
    <div>
      <section className="relative rounded h-[350px] bg-cover bg-center bg-no-repeat py-8 sm:py-12" style={{backgroundImage: "url('https://lvpyhvoamylnlcveehaq.supabase.co/storage/v1/object/public/homepage/piano.webp')", }}>
        <div className="absolute inset-0 bg-white/15 m"></div>

        <div className="relative z-10 mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4 justify-self-start mt-5 bg-white/60 rounded-lg p-6">
            <h2 className="text-4xl font-light tracking-tight md:text-7xl yellow">MusiQ.sk</h2>
            <p className="text-neutral-800 font-light">
              Veľký výber a skvelé ceny<br /> Iba u nás
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white font-light"
            >
              <Link href="/products">Zobraziť všetky produkty</Link>
            </Button>
          </div>
        </div>
      </section>


      <section>
        <RecommendedProducts products={products} />
      </section>

      
      {/* Carousel section added here */}
      <section>
        <Carousel products={products} />
      </section>

      
    </div>
  );
}