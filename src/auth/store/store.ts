// auth/store.ts
import { create } from "zustand";
import { Session, User } from "@supabase/supabase-js";

interface AuthState {
  session: Session | null;
  user: User | null;
  profile: any | null;

  setSession: (session: Session, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  user: null,
  profile: null,

  setSession: (session, user) =>
    set({
      session,
      user
    }),

  logout: () =>
    set({
      session: null,
      user: null,
    })
}));
