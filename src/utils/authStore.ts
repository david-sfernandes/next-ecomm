import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: "",
      refreshToken: "",
      role: "",
      isLogged: false,
      signIn: (payload) => {
        set((state) => {
          state.isLogged = true;
          state.role = "USER";
          state.token = payload.access_token;
          state.refreshToken = payload.refresh_token;
          return state;
        });
      },
      signOut: () => {
        set((state) => {
          state.role = "";
          state.token = "";
          state.isLogged = false;
          state.refreshToken = "";
          return state;
        })
      }
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuth;
