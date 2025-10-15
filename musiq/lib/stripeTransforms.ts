import type Stripe from "stripe";

export type UIPrice = {
  unit_amount: number | null;
  currency: string;
};

export type UIProduct = {
  id: string;
  name: string;
  description?: string | null;
  images: string[];
  default_price: UIPrice | null;
};

export type UIProductPartial = UIProduct;

export function mapStripeProductToUI(p: Stripe.Product): UIProduct {
  const dp = p.default_price as Stripe.Price | string | null | undefined;

  const priceObj: UIPrice | null =
    dp && typeof dp !== "string"
      ? { unit_amount: dp.unit_amount, currency: dp.currency }
      : null;

  return {
    id: p.id,
    name: p.name,
    description: p.description ?? null,
    images: Array.isArray(p.images) ? p.images : [],
    default_price: priceObj,
  };
}
