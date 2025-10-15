import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "./components/ui/button";
import Link from "next/link";
import { Carousel } from "./components/carousel";
import { RecommendedProducts } from "./components/RecommendedProducts";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <section className="relative rounded h-[350px] bg-cover bg-center bg-no-repeat py-8 sm:py-12" style={{backgroundImage: "url('/piano.webp')", }}>
        <div className="absolute inset-0 bg-white/15 m"></div>

        <div className="relative z-10 mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4 justify-self-start mt-5 bg-white/60 rounded-lg p-6">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-7xl yellow">MusiQ.sk</h2>
            <p className="text-neutral-800 font-bold">
              Veľký výber a skvelé ceny<br /> Iba u nás
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white font-bold"
            >
              <Link href="/products">Zobraziť všetky produkty</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <Carousel products={products.data} />
      </section>

      <section>
        <RecommendedProducts products={products.data} />
      </section>

    </div>
  );
}