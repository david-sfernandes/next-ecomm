import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetails";
import ProductSelection from "@/components/ProductSelection";
import Subscribe from "@/components/banners/Subscribe";
import { getProductById, getProducts } from "@/utils/products";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

export default function ProductPage({ product }: { product: ProductProps }) {
  if (!product || !product.name)
    return (
      <Layout color="black">
        <Head>
          <title>Produto não encontrado | MoveStore</title>
        </Head>
        <main className="max-w-6xl w-full min-h-screen mx-auto p-6 pt-24">
          <div className="w-full flex justify-center flex-col">
            <h1 className="text-center text-2xl font-bold">404</h1>
            <h2 className="text-center text-lg font-medium">
              Produto não encontrado!
            </h2>
            <Link href="../" className="blueBtn w-fit mx-auto my-3">
              Voltar para a tela inicial
            </Link>
          </div>
          <ProductSelection ids={[6, 7, 8, 9]} text="Selecionado para você" />
          <br />
          <Subscribe />
        </main>
      </Layout>
    );

  return (
    <Layout color="black">
      <Head>
        <title>{product.name} | MoveStore</title>
      </Head>
      <main className="max-w-6xl w-full min-h-screen mx-auto p-6 pt-24">
        <ProductDetails product={product} />
        <ProductSelection ids={[6, 7, 8, 9]} text="Selecionado para você" />
        <br />
        <Subscribe />
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetStaticProps<{
  product?: ProductProps;
}> = async (context) => {
  const { id } = context.params as unknown as { id: number };
  const product = await getProductById(id);

  return {
    props: { product },
  };
};

// export const getStaticPaths = async () => {
//   const products: ProductProps[] = await getProducts();
//   const paths = products.map((product) => ({
//     params: { id: product.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// };
