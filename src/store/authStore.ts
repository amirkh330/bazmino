import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      login: () => {
        set({
          isAuth: true,
        });
      },

      logout: () => {
        set({
          isAuth: false,
        });
      },
    }),
    {
      name: "auth-storage",
      // getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
