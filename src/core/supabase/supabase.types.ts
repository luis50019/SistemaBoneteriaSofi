export type Product = {
  id: string;
  name: string;
  category: string;
  color?: string;
  price: number;
  promo_type?: string | null;
  stock: number;
  is_active: boolean;
};
