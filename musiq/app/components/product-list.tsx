"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import type { UIProduct } from "@/lib/supabase";

interface Props {
  products: UIProduct[];
}

export const ProductList = ({ products }: Props) => {
  if (!products || products.length === 0) {
    return <div className="text-center py-8">Žiadne produkty</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h5 className="font-semibold text-lg mb-2">{product.name}</h5>

            <div className="text-yellow-400 flex space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold">
                {product.default_price?.unit_amount
                  ? (product.default_price.unit_amount / 100).toFixed(2)
                  : "0.00"}{" "}
                {product.default_price?.currency.toUpperCase() || "EUR"}
              </span>

              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
                onClick={() => alert(`Pridané do košíka: ${product.name}`)}
                aria-label="Pridať do košíka"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-gray-700 text-xl"
                />
              </button>
            </div>

            <Button
              asChild
              variant="default"
              className="bg-black text-white px-4 py-2 rounded w-full mt-2"
            >
              <Link href={`/products/${product.id}`}>Detail produktu</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;