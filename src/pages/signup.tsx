import AuthForm from "@/components/AuthForm";
import Layout from "@/components/Layout";

export default function SigUpPage() {
  return (
    <Layout color="black">
      <AuthForm mode="signup" />
    </Layout>
  )
}