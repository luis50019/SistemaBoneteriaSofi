import { supabase } from "../core/supabase/supabase.client";

export async function signIn(email: string, password: string) {
  if (!supabase) {
    throw new Error(
      "Supabase no está configurado. Define EXPO_PUBLIC_SUPABASE_URL y EXPO_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}