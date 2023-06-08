import useCookies from "@/utils/cookies";
import formatPrice from "@/utils/formatPrice";
import orders from "@/utils/orders";

export default function Order({ order }: { order: OrderProps }) {
  const totalValue = order.orderProducts.reduce(
    (sum, op) => (sum += op.price),
    0
  );
  const orderDate = new Date(order.orderDate);
  const token = useCookies().getByKey("token")
  
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
            <td>{formatPrice(totalValue)}</td>
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
