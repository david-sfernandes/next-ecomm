import useCart from "@/utils/store";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ColorOption from "./ColorOption";

export default function ProductDetails({ product }: { product: ProductProps }) {
  const [qty, setQty] = useState(1);
  const [addedToCard, setAddedToCard] = useState(false);
  const addToCart = useCart((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product.id, qty);
    setAddedToCard(true);
  };

  const handlePlus = () => {
    if (qty < product.quantity) setQty((qty) => qty + 1);
  };

  const handleMinus = () => {
    if (qty > 1) setQty((qty) => qty - 1);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <div className="relative w-full bg-gray-300 min-h-fit h-[85vh]">
        <img className="productImg" src={product.image} alt="Product image" />
      </div>
      <div>
        <h1 className="font-semibold text-3xl capitalize">{product.name}</h1>
        <h2 className="font-medium text-zinc-500 text-xs mt-1">
          {product.description}
        </h2>
        <h3 className="text-2xl font-semibold my-3">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
        <p className="text-zinc-700 text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi
          harum excepturi vero provident ipsum quae eius ex ad cupiditate
          veritatis, molestiae deserunt! Tempora, sapiente. Nostrum eius ullam
          ipsa sequi?
        </p>
        <ColorOption />
        {product.quantity == 0 ? (
          <p className="mt-2 flex">
            <XCircleIcon className="h-6 text-gray-950 mr-2" />
            Produto não está disponivel no momento.
          </p>
        ) : (
          <div className="my-3 flex items-center">
            <p className="font-medium mr-4">Quantidade</p>
            <button
              className="qtyBtn"
              disabled={qty < 2}
              onClick={() => handleMinus()}
            >
              -
            </button>
            <input
              type="number"
              name="qty"
              id="qty"
              min={1}
              max={product.quantity}
              value={qty}
              readOnly
              className="mx-1 rounded-full border px-4 py-2 bg-gray-50 text-center"
            />
            <button
              className="qtyBtn"
              disabled={qty > 9}
              onClick={() => handlePlus()}
            >
              +
            </button>
          </div>
        )}
        {product.quantity == 0 && (
          <button
            onClick={() => handleAddToCart()}
            className="px-4 py-2 my-4 bg-green-500 disabled:bg-zinc-500
              text-white transition-all duration-150 hover:bg-green-700 
              hover:shadow-lg"
            disabled={addedToCard}
          >
            {addedToCard ? "Adicionado no carrinho" : "Adicionar ao carrinho"}
          </button>
        )}
      </div>
    </section>
  );
}
