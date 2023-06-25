import formatPrice from "@/utils/formatPrice";
import { updateOrderStatus } from "@/utils/orders";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { OrderStatus } from "../../../typings/OrderStatus";

export default function AdminOrder({ order }: { order: OrderProps }) {
  const [disable, setDisable] = useState(true);
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);
  const orderDate = new Date(order.orderDate);
  const router = useRouter();
  const totalValue = order.orderProducts.reduce(
    (sum, op) => (sum += op.price),
    0
  );

  const handleInput = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisable(false);
    setStatus(e.target.value as OrderStatus);
  };

  const handleSave = () => {
    setLoading(true);
    setDisable(true);
    updateOrderStatus(status, order.id);
    router.reload();
  };

  return (
    <div className="roundedCard flex flex-col sm:flex-row w-full gap-1 flex-wrap">
      <div className="orderData">
        <h5>PEDIDO REALIZADO</h5>
        <p>{orderDate.toLocaleString("pt-br")}</p>
      </div>
      <div className="orderData">
        <h5>TOTAL</h5>
        <p>{formatPrice(totalValue)}</p>
      </div>
      <div className="orderData">
        <h5>PEDIDO nº{order.id}</h5>
        <select name="status" onChange={(e) => handleInput(e)} value={status}>
          <option value={OrderStatus.CONFIRMED}>COMFIRMADO</option>
          <option value={OrderStatus.SHIPPING}>EM TRANSITO</option>
          <option value={OrderStatus.DELIVERED}>EMTREGUE</option>
          <option value={OrderStatus.CANCELED}>CANCELADO</option>
        </select>
      </div>
      <button
        className="submitBtn sm:my-auto mt-2"
        disabled={disable}
        onClick={() => handleSave()}
      >
        {loading ? <div className="loadingSpin" /> : "Salvar"}
      </button>
    </div>
  );
}
