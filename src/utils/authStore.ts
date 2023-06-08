import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRole = create<RoleState>()(
  persist(
    (set) => ({
      role: "",
      setRole: (role) => {
        set((state) => {
          state.role = role;
          return state;
        });
      },
    }),
    {
      name: "role-storage",
    }
  )
);

export default useRole;
