import { useForm } from "react-hook-form";
import { registerProduct } from "../types/FormRegister/registerProducts";

export const useProductForm = () => {
  return useForm<registerProduct>({ defaultValues: {} });
};
