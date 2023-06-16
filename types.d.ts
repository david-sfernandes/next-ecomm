declare module 'cookie-cutter';

type ProductProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
};

type HeaderColor = {
  color?: "white" | "black";
};

type ProductSelectionProps = {
  text: string;
  ids: number[];
  alignCenter?: boolean;
};

type CartItem = {
  id: number;
  qty: number;
};

type FormInputProps = {
  type: string;
  name: string;
  label: string;
  value?: any;
  formKey: string;
  required?: boolean;
  onInput: (e: ChangeEvent<HTMLInputElement>, key: string) => void;
};

type ProductFormData = {
  id: number;
  name: string;
  file: string;
  price: number;
  quantity: number;
  isImage: boolean;
  isVideo: boolean;
  description: string;

  // void args
  url: string;
  type: string;
  format: string;
  version: number;
  publicId: string;
  signature: string;
  resourceType: string;
  preloadedFile: string;
  computedSignature: string;
};

type AuthFormData = {
  email: string;
  lastname: string;
  password: string;
  firstname: string;
};

type AuthMode = "signin" | "signup";

type AuthPayload = {
  role: Role;
  access_token: string;
  refresh_token: string;
};

type CookiesKeys = "token" | "refreshToken" | "role";

type AuthBody = {
  email: string;
  role?: string;
  password: string;
  lastname?: string;
  firstname?: string;
};

type OrderProps = {
  id: number;
  userEmail: string;
  orderDate: string;
  lastUpdate: string;
  status: OrderStatus;
  orderProducts: OrderProduct[];
};

type OrderProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  productId: number;
};

interface CartState {
  cart: CartItem[];
  discount: number;
  historyCart: CartItem[];
  historyDiscount: number;
  comfirmOrder: () => void;
  removeFromCart: (id: number) => void;
  validateCupom: (cupom: string) => void;
  addToCart: (id: number, qty: number) => void;
}

type Role = "USER" | "ADMIN" | "MANAGER" | "";

interface RoleState {
  role: Role;
  setRole: (role: Role) => void;
}

interface IAuthForm {
  mode: AuthMode;
}
