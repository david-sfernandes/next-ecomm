type ProductProps = {
  img: string;
  name: string;
  price: number;
  id: number;
  description: string;
};

type HeaderColor = {
  color?: "white" | "black";
};

type ProductSelectionProps = {
  start: number;
  end: number;
  text: string;
  alignCenter?: boolean;
};

type CartItem = {
  id: number;
  qty: number;
};

interface CartState {
  cart: CartItem[];
  historyCart: CartItem[];
  discount: number;
  historyDiscount: number;
  validateCupom: (cupom: string) => void;
  addToCart: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
  comfirmOrder: () => void;
}
