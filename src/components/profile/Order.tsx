import useCookies from "@/utils/cookies";
import formatPrice from "@/utils/formatPrice";
import orders from "@/utils/orders";
import { OrderStatus } from "../../../typings/OrderStatus";
import { useState, useEffect } from "react";

export default function Order({ order }: { order: OrderProps }) {
  console.log(order)
  const [total, setTotal] = useState(0);
  const orderDate = new Date(order.orderDate);
  const token = useCookies().getByKey("token");

  useEffect(() => {
    setTotal(order.orderProducts.reduce((sum, op) => sum += op.price, 0))
  }, []);
  
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
            <td>{orderDate.toUTCString()}</td>
            <td>{formatPrice(total)}</td>
            <td className="text-sm">Status: {order.status}</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
      <button
        className="outlineRedBtn my-auto"
        onClick={() => orders.updateStatus(OrderStatus.CANCELED, order.id, token)}
      >
        Cancelar
      </button>
    </div>
  );
}
