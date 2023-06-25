import HeadImg from "@/components/HeadImg";
import Layout from "@/components/Layout";
import StockForm from "@/components/StockForm";
import StockProduct from "@/components/StockProduct";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";
import { getProducts } from "@/utils/products";
import Head from "next/head";

export default function StockPage() {
  const [currentProduct, setCurrentProduct] = useState<
    ProductProps | undefined
  >();
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);

  const handleEdit = (product: ProductProps) => {
    setCurrentProduct(product);
    setShowForm(true);
  };

  const handleOnCloseForm = () => {
    setShowForm(false);
  };

  const handleAddNew = () => {
    setCurrentProduct(undefined);
    setShowForm(true);
  };

  useEffect(() => {
    const fetchProducts = async () => setProducts(await getProducts());
    fetchProducts();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Gestão de produtos | MoveStore</title>
      </Head>
      <HeadImg img="/pexels-ben-mack-6775268.jpg" text="Gestão de Produtos" />
      <main className="defaultMain">
        <div className="flex justify-between items-center my-3">
          <h2 className="">{products.length} Produtos cadastrados</h2>
          <button
            className="blueBtn flex w-fit"
            onClick={() => handleAddNew()}
          >
            <PlusIcon className="h-5 mr-1" /> Adicionar novo
          </button>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {products.map((product) => (
            <StockProduct {...product} key={product.id} onEdit={handleEdit} />
          ))}
        </section>
        {showForm && (
          <StockForm product={currentProduct} onClose={handleOnCloseForm} />
        )}
      </main>
    </Layout>
  );
}
