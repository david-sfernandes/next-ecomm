import { auth } from "@/utils/auth";
import useRole from "@/utils/authStore";
import cookies from "@/utils/cookies";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import FormInput from "./FormInput";
import Head from "next/head";
import Link from "next/link";

export default function AuthForm({ mode }: IAuthForm) {
  const router = useRouter();
  const setRole = useRole((state) => state.setRole);
  const [isPasswordValid, setIsPasswordValid] = useState(mode == "signin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<AuthFormData>({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  });

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!isPasswordValid) {
      setError("As senhas não são iguais");
      setLoading(false);
      return;
    }
    try {
      const res: AuthPayload = await auth(mode, data);
      cookies.save(res);
      setRole(res.role);
      router.push("/");
    } catch (er) {
      setError(`${er}`);
    }
    setLoading(false);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setData((data) => {
      data[key as keyof AuthFormData] = e.target.value.trim();
      return data;
    });
  };

  const handleCheckPassword = (
    e: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    let password = data[key as keyof AuthFormData];
    setIsPasswordValid(password == e.target.value.trim());
  };

  return (
    <main className="pt-24 transition-transform duration-75">
      <Head>
        <title>{mode == "signin" ? "Login" : "Cadastro"} | MoveStore</title>
      </Head>
      <form
        onSubmit={handleSubmit}
        className="px-5 py-5 rounded-md border border-gray-300 shadow mx-auto
        mb-5 max-w-lg "
      >
        <h2 className="sectionTitle text-zinc-950">
          {mode == "signin" ? "Login" : "Criar conta"}
        </h2>

        {mode == "signup" && (
          <>
            <FormInput
              type="text"
              name="firstname"
              formKey="firstname"
              onInput={handleInput}
              label="Seu primeiro nome"
            />
            <FormInput
              type="text"
              name="lastname"
              formKey="lastname"
              onInput={handleInput}
              label="Seu sobrenome"
            />
          </>
        )}
        <FormInput
          name="email"
          type="email"
          label="E-mail"
          formKey="email"
          onInput={handleInput}
        />
        <FormInput
          label="Senha"
          type="password"
          name="password"
          formKey="password"
          onInput={handleInput}
        />
        {mode == "signup" && (
          <FormInput
            type="password"
            formKey="password"
            name="checkPassword"
            label="Confirmar senha"
            onInput={handleCheckPassword}
          />
        )}
        <button type="submit" className="blueBtn" disabled={loading}>
          Confirmar
        </button>
        <br />
        {error && <span className="errorTxt">{error}</span>}
        {mode == "signin" ? (
          <p className="smText">► Ainda não possui cadastro? <Link href="../signup" className="textLink">Clique aqui.</Link></p>
        ) : (
          <p className="smText">► Já possui cadastro? <Link href="../signin" className="textLink">Clique aqui.</Link></p>
        )}
      </form>
    </main>
  );
}
