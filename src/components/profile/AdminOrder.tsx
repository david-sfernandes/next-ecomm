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
    <div className="roundedCard">
      <table className="w-full">
        <tbody>
          <tr>
            <td>PEDIDO REALIZADO</td>
            <td>TOTAL</td>
            <td>PEDIDO nº{order.id}</td>
          </tr>
          <tr>
            <td>{orderDate.toLocaleString("pt-br")}</td>
            <td>{formatPrice(totalValue)}</td>
            <td>
              <select
                name="status"
                onChange={(e) => handleInput(e)}
                value={status}
              >
                <option value={OrderStatus.CONFIRMED}>COMFIRMADO</option>
                <option value={OrderStatus.SHIPPING}>EM TRANSITO</option>
                <option value={OrderStatus.DELIVERED}>EMTREGUE</option>
                <option value={OrderStatus.CANCELED}>CANCELADO</option>
              </select>
            </td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
      <button
        className="submitBtn my-auto"
        disabled={disable}
        onClick={() => handleSave()}
      >
        {loading ? <div className="loadingSpin" /> : "Salvar"}
      </button>
    </div>
  );
}
