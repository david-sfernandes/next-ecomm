import FormInput from "@/components/FormInput";
import HeadImg from "@/components/HeadImg";
import Layout from "@/components/Layout";
import { FormEvent, useState } from "react";
import products from "@/utils/products";
import { PencilIcon } from "@heroicons/react/24/outline";

export default function EditProductPage() {
  const [data, setData] = useState<ProductProps>(products[0]);

  const handleInput = (e: FormEvent<HTMLInputElement>, key: string) => {};

  return (
    <Layout>
      <HeadImg img="/pexels-ken-tomita-389818.jpg" text="Editar Produto" />
      <main className="defaultMain">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full h-80 relative bg-zinc-300 max-w-[240px] mx-auto group">
            <img className="productImg" src={data.img} alt={`Image ${data.name}`} />
            <button className="hiddenEditImgBtn">
              <PencilIcon className="h-8" />
              <p>Editar</p>
            </button>
          </div>
          <div>
            <FormInput
              formKey="name"
              type="text"
              label="Nome"
              name="name"
              onInput={handleInput}
            />
            <FormInput
              formKey="price"
              type="text"
              label="Preço"
              name="price"
              onInput={handleInput}
            />
            <FormInput
              formKey="quantity"
              type="number"
              label="Quantidade disponível"
              name="quantity"
              onInput={handleInput}
            />
            <FormInput
              formKey="description"
              type="number"
              label="Descrição do produto"
              name="description"
              onInput={handleInput}
            />
          </div>
        </form>
      </main>
    </Layout>
  );
}
