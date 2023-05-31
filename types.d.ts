type ProductProps = {
  img: string;
  name: string;
  price: number;
  id: number;
  description: string;
  quantity: number;
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

type FormInputProps = {
  type: string;
  name: string;
  value?: string;
  required?: boolean;
  label: string;
  onInput: (e: FormEvent<HTMLInputElement>, key: string) => void;
  formKey: string;
};

type ProductFormData = {
  id: number;
  name: string;
  file: string;
  price: number;
  quantity: number;
  description: string;
  isImage: boolean;
  isVideo: boolean;

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
  firstname: string;
  lastname: string;
  password: string;
  email: string;
};


type AuthMode = "signin" | "signup";

type AuthPayload = {
  access_token: string,
  refresh_token: string
}

type AuthBody = {
  firstname?: string;
  lastname?: string;
  password: string;
  email: string;
  role?: string
}

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

type Role = "USER" | "ADMIN" | "MANAGER" | "";

interface AuthState {
  token: string;
  role: Role;
  isLogged: boolean;
  refreshToken: string;
  signOut: () => void;
  signIn: (payload: AuthPayload) => void;
}

interface IAuthForm {
  mode: AuthMode;
}