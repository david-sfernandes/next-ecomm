import CartItem from "@/components/CartItem";
import Layout from "@/components/Layout";
import TotalSection from "@/components/TotalSection";
import getOrderNumber from "@/utils/getOrderNumber";
import useCart from "@/utils/store";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function ConfirmationPage() {
  const {historyCart, historyDiscount} = useCart((state) => state);
  const orderNumber = getOrderNumber();

  return (
    <Layout color="black">
      <Head>
        <title>Pedido confirmado | MoveStore</title>
      </Head>
      <main className="pt-24 max-w-6xl w-full mx-auto min-h-screen p-4 text-center">
        <h1 className="font-bold text-4xl">Obrigado!</h1>
        <h2 className="text-2xl mb-8">Seu pedido foi realizado</h2>
        <div className="flex flex-col justify-center items-center p-4 border bg-white shadow-md m-4 max-w-sm mx-auto gap-1">
          <CheckCircleIcon className="h-10 text-green-500" />
          <p className="text-lg font-medium">Numero do pedido</p>
          <p># {orderNumber}</p>
        </div>
        {historyCart.length > 0 && (
          <>
            <h3 className="sectionTitle">Detalhes do seu pedido</h3>
            <ul>
              {historyCart.map(item => <CartItem item={item} hideControls/>)}
            </ul>
            <TotalSection cart={historyCart} discount={historyDiscount} hideControls />
          </>
        )}
      </main>
    </Layout>
  )
}