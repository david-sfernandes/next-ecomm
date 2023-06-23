import { ProductRequest } from "@/utils/productRequest";
import { XMarkIcon } from "@heroicons/react/24/outline";
import cookieCutter from "cookie-cutter";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { addProduct } from "../utils/products";
import FormInput from "./FormInput";

export default function StockForm({
  product,
  onClose,
}: {
  product?: ProductProps;
  onClose: () => void;
}) {
  const [data, setData] = useState<ProductProps>({
    id: 0,
    image: "",
    name: "",
    price: 0,
    quantity: 0,
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (product) setData(product);
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setData((data) => ({ ...data, [key]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      data &&
      fileInput.current?.files &&
      fileInput.current?.files.length > 0
    ) {
      const requestBody = new ProductRequest(data, fileInput.current?.files[0]);
      addProduct(requestBody).then(() => {
        setIsLoading(false);
        router.reload();
      });
    }
  };

  return (
    <section
      className="fixed bg-slate-600 bg-opacity-40 h-screen w-screen flex 
    justify-center items-center top-0 left-0 right-0 bottom-0 z-20 scroll"
    >
      <div className="roundedCard block relative overflow-hidden w-5xl max-w-[98vw]">
        <div className="flex justify-between mb-1 text-gray-500">
          <h3>{data ? "Editar produto" : "Adicionar novo produto"}</h3>
          <button onClick={() => onClose()}>
            <XMarkIcon className="h-8 hover:text-gray-700" />
          </button>
        </div>
        <form className="" onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[80vh] overflow-auto pb-4">
            <div>
              {data.image && (
                <div className="w-full h-80 relative bg-zinc-300 max-w-[240px] mx-auto">
                  <img
                    className="productImg"
                    src={data.image}
                    alt={`Image ${data.name}`}
                  />
                </div>
              )}

              <label
                className="block my-2 text-sm font-medium text-gray-900"
                htmlFor="file"
              >
                Upload de imagem do produto
              </label>
              <input
                ref={fileInput}
                className="fileInput"
                aria-describedby="file_input_help"
                id="file"
                type="file"
                name="file"
              />
              <p className="mt-1 text-sm text-gray-500" id="file_input_help">
                Apenas uma imagem PNG ou JPG (MAX. 2MP).
              </p>
            </div>
            <div>
              <FormInput
                formKey="name"
                type="text"
                label="Nome"
                name="name"
                value={data.name}
                onInput={handleInput}
              />
              <FormInput
                formKey="price"
                type="number"
                label="Preço"
                name="price"
                value={data.price}
                onInput={handleInput}
              />
              <FormInput
                formKey="quantity"
                type="number"
                label="Quantidade disponível"
                name="quantity"
                value={data.quantity}
                onInput={handleInput}
              />
              <FormInput
                formKey="description"
                type="text"
                label="Descrição do produto"
                name="description"
                value={data.description}
                onInput={handleInput}
              />
            </div>
          </div>
          <div className="flex bottom-0 bg-white border-t py-2 w-full p-3 justify-end gap-2">
            <button
              className="redBtn"
              onClick={() => onClose()}
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button type="submit" className="submitBtn" disabled={isLoading}>
              {isLoading ? (
                <div className="border-2 border-blue-100 border-r-blue-500 h-4 w-4 animate-spin rounded-full mx-auto" />
              ) : (
                "Salvar"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
