import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative h-[80vh] w-full">
      <Image
        src="/pexels-ben-mack-6775268.jpg"
        alt="by Ben Mark from pexels"
        fill
        className="object-cover brightness-75"
      />
      <div className="max-w-6xl w-full px-10 flex flex-col mx-auto h-full z-10 relative text-white justify-center">
        <h1 className="font-bold text-5xl sm:w-1/3">
          Transforme sua casa em um lar
        </h1>
        <p className="sm:w-2/3 lg:w-1/3 mt-2">
          Use o cupom CASA10 para 10% de desconto
        </p>
        <Link href="../all" className="flex text-sm items-center font-light mt-2 hover:underline">
          <ArrowRightCircleIcon className="h-5 text-blue-500 mr-2" />
          Veja todos os nossos produtos
        </Link>
      </div>
    </section>
  );
}
