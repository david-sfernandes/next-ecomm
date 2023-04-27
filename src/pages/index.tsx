import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import MediumBanner from "@/components/MediumBanner";
import Guarantees from "@/components/Guarantees";
import ProductSelection from "@/components/ProductSelection";
import { Metadata } from "next";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Transforme sua casa em um lar | MoveStore</title>
      </Head>
      <Banner />
      <main className="max-w-6xl mx-auto p-4">
        <MediumBanner />
        <ProductSelection start={0} end={4} text="Selecionado para você"/>
        <Guarantees />
        <ProductSelection start={2} end={6} text="Destaque de hoje" alignCenter/>
      </main>
      <Subscribe />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "MoveStore | Transforme sua casa em um lar",
  description: "Sua melhor opção de compra online."
}
