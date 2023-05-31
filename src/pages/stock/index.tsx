import HeadImg from "@/components/HeadImg";
import Layout from "@/components/Layout";
import StockForm from "@/components/StockForm";
import StockProduct from "@/components/StockProduct";
import products from "@/utils/products";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function StockPage() {
  const [currentProduct, setCurrentProduct] = useState<ProductProps|undefined>();
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (product: ProductProps) => {
    setCurrentProduct(product)
    setShowForm(true);
  }

  const handleOnCloseForm = () => {
    setShowForm(false);
  }

  const handleAddNew = () => {
    setCurrentProduct(undefined);
    setShowForm(true);
  }

  return (
    <Layout>
      <HeadImg img="/pexels-ben-mack-6775268.jpg" text="Gestão de Produtos" />
      <main className="defaultMain">
        <div className="flex justify-between items-center my-3">
          <h2 className="">{products.length} Produtos cadastrados</h2>
          <button className="submitBtn flex" onClick={() => handleAddNew()}><PlusIcon className="h-5 mr-1"/> Adicionar novo</button>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {products.map((product) => (
            <StockProduct {...product} key={product.id} onEdit={handleEdit} />
          ))}
        </section>
        {showForm && <StockForm product={currentProduct} onClose={handleOnCloseForm}/>}
      </main>
    </Layout>
  );
}
