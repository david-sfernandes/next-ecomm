import formatPrice from "@/utils/formatPrice";
import { updateOrderStatus } from "@/utils/orders";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { OrderStatus } from "../../../typings/OrderStatus";

export default function Order({ order }: { order: OrderProps }) {
  const [total, setTotal] = useState(0);
  const orderDate = new Date(order.orderDate);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTotal(order.orderProducts.reduce((sum, op) => (sum += op.price), 0));
  }, []);

  const handleCancel = () => {
    setLoading(true);
    updateOrderStatus(OrderStatus.CANCELED, order.id);
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
        <p>{formatPrice(total)}</p>
      </div>
      <div className="orderData">
        <h5>PEDIDO nº{order.id}</h5>
        <p>Status: {order.status}</p>
      </div>
      <button
        className="outlineRedBtn sm:my-auto mt-2"
        disabled={loading}
        onClick={() => handleCancel()}
      >
        {loading ? <div className="loadingSpin" /> : "Cancelar"}
      </button>
    </div>
  );
}
