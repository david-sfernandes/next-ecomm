import HeadImg from "@/components/HeadImg";
import Layout from "@/components/Layout";
import OrderList from "@/components/profile/OrderList";
import useRole from "@/utils/authStore";
import useCookies from "@/utils/cookies";
import cookieCutter from "cookie-cutter";
import orders from "@/utils/orders";
import { useEffect, useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function ProfilePage() {
  const role = useRole((state) => state.role);
  const [orderList, setOrderList] = useState<OrderProps[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getOrders() {
      const token = cookieCutter.get("token");
      const res = await orders.get(token).catch(() => setHasError(true));
      setOrderList(res);
    }
    getOrders();
  }, []);

  return (
    <Layout>
      <HeadImg img="/pexels-ken-tomita-389818.jpg" text="Perfil" />
      <main className="defaultMain max-w-3xl">
        {hasError ? (
          <p className="border-l-2 border-red-600 rounded bg-red-300 p-2 my-2 flex items-center">
            <ExclamationTriangleIcon className="text-red-600 h-6 mr-1" /> Houve um
            erro ao buscar os pedidos. Tente recarregar!
          </p>
        ) : (
          <OrderList role={role} orderList={orderList} />
        )}
        <button className="redBtn" onClick={() => useCookies().clean()}>
          Sair
        </button>
      </main>
    </Layout>
  );
}
