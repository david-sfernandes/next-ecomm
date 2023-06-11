import Card from "@/components/Card";
import HeadImg from "@/components/HeadImg";
import Layout from "@/components/Layout";
import Subscribe from "@/components/banners/Subscribe";
import { getProducts } from "@/utils/products";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function AllPage() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  useEffect(() => {
    const fetchProducts = async () => setProducts(await getProducts());
    fetchProducts();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Todos os produtos | MoveStore</title>
      </Head>
      <HeadImg
        img="/pexels-ben-mack-6775268.jpg"
        text="Conheça todos os nossos produtos"
      />
      <main className="defaultMain">
        <section>
          <h2 className="sectionTitle text-center">Produtos</h2>
          <div className="flex gap-8 my-3 flex-wrap justify-center">
            {products.map((product) => (
              <Card {...product} key={product.id} />
            ))}
          </div>
        </section>
      </main>
      <Subscribe />
    </Layout>
  );
}
