import Header from "./Header";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = PropsWithChildren & HeaderColor;

export default function Layout({ children, color }: LayoutProps) {
  return (
    <div
      className={`w-full min-h-screen bg-gray-50 text-slate-950 ${inter.className}`}
    >
      <Header color={color} />
      {children}
      <Footer />
    </div>
  );
}
