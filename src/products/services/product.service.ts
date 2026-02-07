import { supabase } from '../../core/supabase/supabase.client';
import { Product } from '../../core/supabase/supabase.types';

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .limit(5);

  if (error) {
    console.error('Supabase error:', error);
    throw error;
  }

  return data ?? [];
};
