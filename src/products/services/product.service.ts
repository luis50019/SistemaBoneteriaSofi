import { supabase } from '../../core/supabase/supabase.client';
import { Product } from '../../core/supabase/supabase.types';

export const getProducts = async (): Promise<Product[]> => {
  if (!supabase) {
    throw new Error(
      'Supabase no está configurado. Define EXPO_PUBLIC_SUPABASE_URL y EXPO_PUBLIC_SUPABASE_ANON_KEY.'
    );
  }

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
