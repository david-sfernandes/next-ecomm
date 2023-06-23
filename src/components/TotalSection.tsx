import formatPrice from "@/utils/formatPrice";
import { postOrder } from "@/utils/orders";
import { getProductById } from "@/utils/products";
import useCart from "@/utils/store";
import cookieCutter from "cookie-cutter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TotalSection({
  cart,
  hideControls,
}: {
  cart: CartItem[];
  hideControls?: boolean;
}) {
  const router = useRouter();
  const [values, setValues] = useState<number[]>(
    new Array(cart.length).fill(0)
  );
  const [total, setTotal] = useState(0);
  const [cupom, setCupom] = useState("");
  const [error, setError] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  const { comfirmOrder, validateCupom, discount } = useCart((state) => state);
  useEffect(() => {
    setSubTotal(0);
    cart.forEach(async (item, i) => {
      await getProductById(item.id).then((product) => {
        setValues((values) => {
          values[i] = product.price * item.qty;
          setSubTotal(values.reduce((value, acc) => (acc += value), 0));
          return values;
        });
      });
    });
  }, [cart]);

  useEffect(() => {
    setTotal(0);
    setTotal(subTotal * (1 - discount));
  }, [subTotal]);

  const handleConfirm = async () => {
    postOrder(cart)
      .then((res: OrderProps) => {
        comfirmOrder();
        router.push(`/confirmation?order=${res.id}`);
      })
      .catch((e) => setError(e));
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-6">
      <ul className="bg-zinc-200 p-3">
        {!hideControls && (
          <li className="totalSectionLi">
            <p className="totalSectionText">Insira seu cupom</p>
            <div className="scale-85 text-end">
              <input
                type="text"
                name="cupom"
                id="cupom"
                className="textInput w-1/2"
                placeholder="Cupom..."
                value={cupom}
                onChange={(e) => setCupom(e.target.value)}
              />
              <button
                className="confirmInput ml-2"
                onClick={() => validateCupom(cupom)}
              >
                OK
              </button>
            </div>
          </li>
        )}
        <li className="totalSectionLi">
          <p className="totalSectionText">Sub Total</p>
          <h5 className="totalSectionText font-medium text-zinc-950">
            {formatPrice(subTotal)}
          </h5>
        </li>
        <li className="totalSectionLi">
          <p className="totalSectionText">Desconto</p>
          <h5 className="totalSectionText font-medium text-zinc-950">
            {formatPrice(subTotal * discount)}
          </h5>
        </li>
        <li className="totalSectionLi">
          <p className="totalSectionText text-xl">Total</p>
          <h4 className="font-medium text-xl text-zinc-950">
            {formatPrice(total)}
          </h4>
        </li>
        {!hideControls && (
          <li className="totalSectionLi border-b-0">
            <button
              onClick={() => handleConfirm()}
              className="confirmInput ml-auto"
            >
              Concluir compra
            </button>
          </li>
        )}
        {error && (
          <li>
            <p className="text-red-500 text-sm">{error}</p>
          </li>
        )}
      </ul>
    </section>
  );
}
