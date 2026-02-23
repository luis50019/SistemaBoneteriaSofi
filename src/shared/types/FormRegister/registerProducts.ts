export type registerProduct = {
  category: string;
  gender: string;
  size: string;
  promotion: TypePromotions;
  color: "generico" | "unisex";
  price: string;
  cost: string;
  min_stock: string;
  barcode?: string;
  description: string;
  url_producto: string;
};

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
