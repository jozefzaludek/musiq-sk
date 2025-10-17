"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import type { UIProduct } from "@/lib/supabase";

interface Props {
  products: UIProduct[];
}

export const RecommendedProducts = ({ products }: Props) => (
  <div className="py-16">
    <h2 className="text-4xl font-light mb-10 text-center">
      Odporúčané produkty
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-sm overflow-hidden bg-white flex flex-col"
        >
          {product.images && product.images[0] && (
            <div className="flex justify-center items-center bg-white h-[170px] mt-4 mb-2">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-contain max-w-[170px] max-h-[170px] w-auto h-auto cursor-pointer"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-grow">
            <h5 className="font-light text-lg mb-2">{product.name}</h5>
            <div className="text-yellow-400 flex space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
            {/* Price and Cart icon row */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-light">
                {product.default_price?.unit_amount
                  ? (product.default_price.unit_amount / 100).toFixed(2)
                  : "0.00"}{" "}
                {product.default_price?.currency.toUpperCase() || "€"}
              </span>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
                onClick={() => alert(`Pridané do košíka: ${product.name}`)}
                aria-label="Pridať do košíka"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700 text-xl" />
              </button>
            </div>
            {/* Detail button below */}
            <Button asChild variant="default" className="bg-black text-white px-4 py-2 rounded w-full mt-2 font-light">
              <Link href={`/products/${product.id}`}>
                Detail produktu
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);