import Image from "next/image";

export default function HeadImg({img, text}: {img: string, text: string}) {
  return (
    <section className="relative h-[45vh] w-full">
      <Image
        src={img}
        alt="Head img"
        fill
        className="object-cover brightness-75"
      />
      <div className="max-w-6xl w-full px-10 flex mx-auto h-full z-10 relative text-white justify-center items-center">
        <h1 className="font-bold text-5xl w-full">
          {text}
        </h1>
      </div>
    </section>
  )
}