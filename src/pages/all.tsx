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
      <section className="relative h-[45vh] w-full">
      <Image
        src="/pexels-ben-mack-6775268.jpg"
        alt="by Ben Mark from pexels"
        fill
        className="object-cover brightness-75"
      />
      <div className="max-w-6xl w-full px-10 flex mx-auto h-full z-10 relative text-white justify-center items-center">
        <h1 className="font-bold text-5xl w-full">
          Conheça todos os nossos produtos
        </h1>
      </div>
    </section>
      <main className="max-w-6xl mx-auto p-4">
        <ProductSelection start={0} end={10} text="Produtos"/>
      </main>
      <Subscribe />
    </Layout>
  )
}