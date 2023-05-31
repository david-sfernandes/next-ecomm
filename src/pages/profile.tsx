import HeadImg from "@/components/HeadImg";
import Layout from "@/components/Layout";
import OrderList from "@/components/profile/OrderList";
import useAuth from "@/utils/authStore";

export default function ProfilePage() {
  const { signOut, role } = useAuth((state) => state);

  return (
    <Layout>
      <HeadImg img="/pexels-ken-tomita-389818.jpg" text="Perfil" />
      <main className="defaultMain max-w-3xl">
        <OrderList role={role} />
        <button className="redBtn" onClick={() => signOut()}>Sair</button>
      </main>
    </Layout>
  );
}
