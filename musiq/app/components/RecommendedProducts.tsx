"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";

// Typ pre produkt
interface Product {
  id: string;
  name: string;
  images: string[];
  default_price: {
    unit_amount: number | null;
    currency: string;
  } | null; 
}

// Props pre komponent
interface Props {
  products: Product[];
}

// Komponent pre odporúčané produkty
export const RecommendedProducts: React.FC<Props> = ({ products }) => {
  return (
    <section id="recommended-products" className="py-8">
      <h2 className="text-2xl font-bold mb-6">Odporúčané produkty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Pre každý produkt sa vykreslí tento div */}
        {products
          .filter((product) => product.default_price !== null) // Filtruj produkty bez ceny
          .map((product) => (
            <div key={product.id} className="border rounded p-4 relative">
              {/* Obrázok produktu */}
              <Image
                src={product.images[0]}
                alt={product.name}
                width={250}
                height={250}
                className="object-cover rounded"
              />
              <div className="mt-4">
                {/* Názov produktu */}
                <h5 className="font-semibold text-lg">{product.name}</h5>
                
                {/* Hviezdy */}
                <div className="text-yellow-400 flex space-x-1 mt-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
                
                {/* Cena produktu */}
                <h4 className="text-xl font-bold mb-2">
                  {product.default_price?.unit_amount
                    ? (product.default_price.unit_amount / 100).toFixed(2)
                    : "0.00"}{" "}
                  {product.default_price?.currency.toUpperCase() || "EUR"}
                </h4>
                
                {/* Sekcia pre detail a pridanie do košíka */}
                <div className="flex justify-between items-center mt-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Detail produktu
                  </Link>

                  {/* Tlačidlo pre pridanie do košíka */}
                  <button
                    type="button"
                    onClick={() => alert(`Pridané do košíka: ${product.name}`)}
                    className="text-black hover:text-blue-600 inline-flex items-center"
                    aria-label={`Pridať ${product.name} do košíka`}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};