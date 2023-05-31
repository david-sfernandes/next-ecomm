import AuthForm from "@/components/AuthForm";
import Layout from "@/components/Layout";

export default function SignInPage() {
  return (
    <Layout color="black">
      <AuthForm mode="signin" />
    </Layout>
  )
}