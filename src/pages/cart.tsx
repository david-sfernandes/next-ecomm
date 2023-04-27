import Layout from "@/components/Layout";
import useCart from "@/utils/store";
import TotalSection from "../components/TotalSection";
import CartItem from "@/components/CartItem";
import { useEffect } from "react";
import Head from "next/head";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function Cart() {
  const { cart, discount } = useCart((state) => state);
  
  return (
    <Layout color="black">
      <Head>
        <title>Carrinho | MoveStore</title>
      </Head>
      <main className="pt-24 max-w-6xl w-full mx-auto min-h-screen p-4">
        <h1 className="font-bold text-4xl text-center mb-8">Carrinho</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3">
          <ul className="m-auto">
            {cart.length == 0 && (
              <li className="text-gray-400 flex gap-4">
                <FaceFrownIcon className="h-8" />
                <p>Ainda não há nenhum item no seu carrinho</p>
              </li>
            )}
            {cart.map((item) => (
              <CartItem item={item} />
            ))}
          </ul>
          {cart && <TotalSection cart={cart} discount={discount}/>}
        </div>
      </main>
    </Layout>
  );
}
