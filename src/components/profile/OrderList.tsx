import Link from "next/link";
import AdminOrder from "./AdminOrder";
import Order from "./Order";

export default function OrderList({role}: {role: Role}) {
  return (
    <section>
      <div className="flex w-full justify-between h-fit items-center my-3">
        <h3 className="sectionTitle text-zinc-950 p-0 m-0">{role == "USER" ? "Meus pedidos" : "Gestão"}</h3>
        <Link href="produtos" className="submitBtn h-fit">Gestão de produtos</Link>
      </div>
      <p className="w-full text-sm py-1">3 pedidos realizados</p>
      <AdminOrder />
      <Order />
      <Order />
      <Order />
    </section>
  )
}