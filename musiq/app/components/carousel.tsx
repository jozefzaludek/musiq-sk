"use client";

import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { UIProduct } from "@/lib/supabase";

interface Props {
  products: UIProduct[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  return (
    <div 
      className="w-full flex justify-center items-center py-8"
      style={{ minHeight: '340px' }}
    >
      <Card 
        className="flex flex-col md:flex-row w-full max-w h-[300px] rounded-lg shadow-lg border border-gray-200 overflow-hidden bg-white"
      >
        {/* Left: Image */}
        <div className="flex items-center justify-center bg-white-100 md:w-[400px] w-full h-[200px] md:h-full">
          {currentProduct.images && currentProduct.images[0] && (
            <Image
              src={currentProduct.images[0]}
              alt={currentProduct.name}
              width={360}
              height={260}
              className="object-contain rounded-md"
              style={{ maxWidth: "360px", maxHeight: "260px" }}
            />
          )}
        </div>
        {/* Right: Text */}
        <div className="flex flex-col justify-center px-10 py-6 bg-white md:w-[500px] w-full h-full">
          <div className="text-3xl font-light text-black mb-3">
            {currentProduct.name}
          </div>
          {currentProduct.default_price?.unit_amount && (
            <div className="text-2xl text-black font-light mb-3">
              {(currentProduct.default_price.unit_amount / 100).toFixed(2)}{" "}
              {currentProduct.default_price.currency.toUpperCase()}
            </div>
          )}
          {currentProduct.description && (
            <div className="text-gray-700 text-base mt-2">
              {currentProduct.description}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};