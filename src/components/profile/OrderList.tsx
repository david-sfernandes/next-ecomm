import Link from "next/link";
import AdminOrder from "./AdminOrder";
import Order from "./Order";

export default function OrderList({
  role,
  orderList,
}: {
  role: Role;
  orderList: OrderProps[];
}) {
  const isAdmin = role && role == "ADMIN";

  return (
    <section>
      <div className="flex w-full justify-between h-fit items-center my-3">
        <h3 className="sectionTitle text-zinc-950 p-0 m-0">
          {!isAdmin ? "Meus pedidos" : "Gestão"}
        </h3>
        {isAdmin && (
          <Link href="/stock" className="submitBtn h-fit w-fit">
            Gestão de produtos
          </Link>
        )}
      </div>
      <p className="w-full text-sm py-1">
        {orderList.length} pedidos realizados
      </p>
      {orderList && orderList.length == 0 && (
        <h3>Você ainda não realizou nenhum pedido.</h3>
      )}
      {isAdmin
        ? orderList.map((order) => <AdminOrder order={order} key={order.id} />)
        : orderList.map((order) => <Order order={order} key={order.id} />)}
    </section>
  );
}
