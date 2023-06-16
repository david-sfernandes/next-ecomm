import Layout from "@/components/Layout";
import MediumBanner from "@/components/banners/MediumBanner";
import Guarantees from "@/components/banners/Guarantees";
import ProductSelection from "@/components/ProductSelection";
import { Metadata } from "next";
import Head from "next/head";
import Banner from "@/components/banners/Banner";
import Subscribe from "@/components/banners/Subscribe";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Transforme sua casa em um lar | MoveStore</title>
      </Head>
      <Banner />
      <main className="max-w-6xl mx-auto p-4">
        <MediumBanner />
        <ProductSelection ids={[1, 2, 3, 4]} text="Selecionado para você"/>
        <Guarantees />
        <ProductSelection ids={[4, 5, 6, 7]} text="Destaque de hoje"/>
      </main>
      <Subscribe />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "MoveStore | Transforme sua casa em um lar",
  description: "Sua melhor opção de compra online."
}
