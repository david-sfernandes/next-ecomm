import formatPrice from "@/utils/formatPrice";
import orders from "@/utils/orders";
import { FormEvent, useState } from "react";

export default function AdminOrder({ order }: { order: OrderProps }) {
  const [disable, setDisable] = useState(true);
  const [status, setStatus] = useState(order.status);
  const orderDate = new Date(order.orderDate);
  const totalValue = order.orderProducts.reduce(
    (sum, op) => (sum += op.price),
    0
  );

  const handleInput = (e: FormEvent<HTMLSelectElement>) => {
    setDisable(false);
    setStatus(e.currentTarget.value as OrderStatus);
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
                onInput={(e) => handleInput(e)}
                value={order.status}
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
        onClick={() => orders.updateStatus(status, order.id)}
      >
        Salvar
      </button>
    </div>
  );
}
