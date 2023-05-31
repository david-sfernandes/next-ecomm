import HeadImg from "@/components/HeadImg";
import Layout from "@/components/Layout";
import ProductSelection from "@/components/ProductSelection";
import Subscribe from "@/components/Subscribe";
import Head from "next/head";
import Image from "next/image";

export default function AllPage() {
  return (
    <Layout>
      <Head>
        <title>Todos os produtos | MoveStore</title>
      </Head>
      <HeadImg img="/pexels-ben-mack-6775268.jpg" text="Conheça todos os nossos produtos" />
      <main className="defaultMain">
        <ProductSelection start={0} end={10} text="Produtos"/>
      </main>
      <Subscribe />
    </Layout>
  )
}