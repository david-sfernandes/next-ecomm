import formatPrice from "@/utils/formatPrice";
import { getProductById } from "@/utils/products";
import useCart from "@/utils/store";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CartItem({
  item,
  hideControls,
}: {
  item: CartItem;
  hideControls?: boolean;
}) {
  const { addToCart, removeFromCart } = useCart((state) => state);
  let product = getProductById(item.id);

  if (!product) return null;

  return (
    <li className="py-6 sm:py-4">
      <div className="h-36 sm:h-48 flex gap-6 items-center w-full max-w-3xl mx-auto text-left">
        <Link href={`../product/${item.id}`} className="relative w-40 h-full">
          <img src={product.img} className="productImg" />
        </Link>
        <div className="w-full flex flex-col items-start">
          <div className="flex justify-between items-center w-full">
            <h3 className="capitalize font-semibold text-xl sm:text-3xl">
              {product.name}
            </h3>
            {!hideControls && (
              <button onClick={() => removeFromCart(item.id)} className="ml-auto">
                <TrashIcon className="h-5 text-zinc-500 hover:text-red-500 pl-3" />
              </button>
            )}
          </div>
          <p className="text-zinc-600 text-sm pb-3">{product.description}</p>
          <div className="flex justify-between items-center w-full flex-wrap">
            <p className="font-medium text-lg sm:text-2xl">
              {formatPrice(product.price * item.qty)}
            </p>
            <div className="my-3 flex items-center">
              {!hideControls && (
                <button
                  className="qtyBtn px-[10px] py-1 text-sm"
                  disabled={item.qty < 2}
                  onClick={() => addToCart(item.id, item.qty - 1)}
                >
                  -
                </button>
              )}
              <p className="px-2">{item.qty}</p>
              {!hideControls && (
                <button
                  className="qtyBtn  px-[10px] py-1 text-sm"
                  disabled={item.qty > 9}
                  onClick={() => addToCart(item.id, item.qty + 1)}
                >
                  +
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
