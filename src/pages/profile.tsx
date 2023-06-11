import HeadImg from "@/components/HeadImg";
import Layout from "@/components/Layout";
import OrderList from "@/components/profile/OrderList";
import useRole from "@/utils/authStore";
import useCookies from "@/utils/cookies";
import cookieCutter from "cookie-cutter";
import orders from "@/utils/orders";
import { useEffect, useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const {role, setRole} = useRole((state) => state);
  const [orderList, setOrderList] = useState<OrderProps[]>([]);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getOrders() {
      const token = cookieCutter.get("token");
      console.log("token: ", token);
      const res = await orders.get(token).catch(() => setHasError(true));
      setOrderList(res);
    }
    getOrders();
  }, []);

  const signOut = () => {
    useCookies().clean();
    setRole("")
    router.push("/signin");
  };

  return (
    <Layout>
      <HeadImg img="/pexels-ken-tomita-389818.jpg" text="Perfil" />
      <main className="defaultMain max-w-3xl">
        {hasError ? (
          <p className="border-l-2 border-red-600 rounded bg-red-300 p-2 my-2 flex items-center">
            <ExclamationTriangleIcon className="text-red-600 h-6 mr-1" /> Houve
            um erro ao buscar os pedidos. Tente recarregar!
          </p>
        ) : (
          <OrderList role={role} orderList={orderList} />
        )}
        <button className="redBtn mt-3" onClick={() => signOut()}>
          Sair
        </button>
      </main>
    </Layout>
  );
}
