import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Subscribe() {
  const [isSub, setIsSub] = useState(false);
  return (
    <section
      className="max-w-6xl mx-auto
    bg-[url('/pexels-ken-tomita-389818.jpg')] bg-cover bg-center m-2"
    >
      <div className="backdrop-brightness-75 w-full h-full px-6 py-8 flex flex-wrap items-center justify-between">
        <p className="text-xl sm:text-2xl text-white w-full sm:w-1/2">
          Se inscreva na nossa newsletter e receba ofertas exclusivas toda
          semana
        </p>
        <div className="flex flex-wrap gap-3 my-2 transition-all duration-100">
          {isSub ? (
            <p className="text-white text-xs flex items-center">
              <CheckIcon className="h-5 text-green-500 mr-1" /> Bem-vind@ a
              nossa newsletter!
            </p>
          ) : (
            <>
              <input
                type="email"
                className="textInput"
                placeholder="email@address.com"
              />
              <button className="confirmInput" onClick={() => setIsSub(true)}>
                Inscrever
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
