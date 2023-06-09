import useCart from "@/utils/store";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./icons/Logo";

export default function Header({ color = "white" }: HeaderColor) {
  const cart = useCart((state) => state.cart);
  const [qty, setQty] = useState(0);
  useEffect(() => {
    setQty(cart.length);
  }, [cart.length]);

  return (
    <header
      className={`absolute top-0 right-0 left-0 w-full max-w-6xl flex 
    justify-between items-center z-20 mx-auto mt-6 px-4
    ${color == "white" ? "text-white" : "text-black"}`}
    >
      <Link href="/" className="flex items-center gap-2">
        <Logo color={color} />
        <p className="font-semibold text-lg">MoveStore</p>
      </Link>
      <div className="flex gap-4">
        <Link href="/all">
          <MagnifyingGlassIcon className="headerIcon" />
        </Link>
        <Link href="/profile">
          <UserIcon className="headerIcon" />
        </Link>
        <Link href="/cart" className="relative">
          <ShoppingCartIcon className="headerIcon" />
          {qty > 0 && (
            <span
              className="text-[10px] bg-red-500 py-[1px] px-[6px] text-white 
            rounded-full absolute -top-2 -right-2"
            >
              {qty}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
