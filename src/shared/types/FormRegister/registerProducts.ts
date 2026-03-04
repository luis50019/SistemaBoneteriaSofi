import { Product } from "../../../core/supabase/supabase.types";

export type registerProduct = Product;

export type TypePromotions = {
  name: string;
  price: number;
  quantity: number;
};

export type registerEntry = {
  product_id: string;
  quantity: number;
  reference: "estock incial" | "salida";
};
