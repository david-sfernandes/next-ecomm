import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetails";
import ProductSelection from "@/components/ProductSelection";
import Subscribe from "@/components/banners/Subscribe";
import products from "@/utils/products";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function ProductPage({ product }: { product: ProductProps }) {
  return (
    <Layout color="black">
      <Head>
        <title>{product.name} | MoveStore</title>
      </Head>
      <main className="max-w-6xl w-full min-h-screen mx-auto p-6 pt-24">
        <ProductDetails product={product} />
        <ProductSelection start={6} end={10} text="Selecionado para você" />
        <br />
        <Subscribe />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{
  product?: ProductProps;
}> = async (context) => {
  const { id } = context.params as unknown as { id: number };
  const product = products.find((p) => p.id == id);

  return {
    props: { product },
  };
};

export const getStaticPaths = () => {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};
