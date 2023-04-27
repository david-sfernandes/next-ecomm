import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      discount: 0,
      historyCart: [],
      historyDiscount: 0,
      comfirmOrder: () =>
        set((state) => ({
          historyCart: state.cart,
          historyDiscount: state.discount,
          discount: 0,
          cart: [] as CartItem[],
        })),
      validateCupom: (cupom: string) =>
        set((_) => {
          if (cupom.toLowerCase() == "casa10") return { discount: 0.1 };
          return { discount: 0 };
        }),
      addToCart: (id: number, qty: number) =>
        set((state) => {
          let itemIndex = state.cart.findIndex((p) => p.id == id);

          if (itemIndex == -1) return { cart: [...state.cart, { id, qty }] };
          state.cart[itemIndex].qty = qty;
          return { cart: state.cart };
        }),
      removeFromCart: (id: number) =>
        set((state) => {
          let itemIndex = state.cart.findIndex((p) => p.id == id);
          if (itemIndex > -1) {
            // only splice array when item is found
            state.cart.splice(itemIndex, 1); // 2nd parameter means remove one item only
          }
          return { cart: state.cart };
        }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCart;
