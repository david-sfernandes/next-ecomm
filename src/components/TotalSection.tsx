import formatPrice from "@/utils/formatPrice";
import { getProductById } from "@/utils/products";
import useCart from "@/utils/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TotalSection({
  cart,
  discount,
  hideControls,
}: {
  cart: CartItem[];
  discount: number;
  hideControls?: boolean;
}) {
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [cupom, setCupom] = useState("");
  const { comfirmOrder, validateCupom } = useCart((state) => state);
  const router = useRouter();

  useEffect(() => {
    setSubTotal(0);
    setTotal(0);
    cart.map((item) => {
      let product = getProductById(item.id);
      if (product) {
        let price = product.price;
        setSubTotal((value) => (value += price * item.qty));
      }
    });
    setTotal(subTotal * (1 - discount));
  });

  const handleConfirm = () => {
    comfirmOrder();
    router.push("/confirmation");
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-6">
      <ul className="bg-zinc-200 p-3">
        {!hideControls && (
          <li className="totalSectionLi">
            <p className="totalSectionText">
              Insira seu cupom
            </p>
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
      </ul>
    </section>
  );
}
