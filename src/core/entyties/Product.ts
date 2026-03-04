export type Product = {
  category: string;
  gender: "Masculino" | "Femenino";
  size: "infantil" | "Adulto";
  barcode?: string;
  color: "generico" | "unisex";
  url_producto: string;
  description: string;
  price: number;
  cost: number;
  min_stock: number;
  active: boolean;
};
