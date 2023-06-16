function BannerCard({
  img,
  text,
  color,
}: {
  img: string;
  text: string;
  color: string;
}) {
  return (
    <div
      className={`relative h-fukk w-full overflow-hidden flex justify-end items-center p-4 ${color}`}
    >
      <img
        src={img}
        className="h-[150%] my-auto -left-20 -bottom-16 absolute"
      />
      <p className="text-2xl text-white font-medium w-1/2 relative">{text}</p>
    </div>
  );
}

export default function MediumBanner() {
  return (
    <section className="h-96 sm:h-48 grid grid-cols-1 sm:grid-cols-2 my-14">
      <BannerCard
        img="/blue-chair.png"
        text="Redefinindo o design moderno"
        color="bg-blue-400"
      />
      <BannerCard
        img="/red-chair.png"
        text="Nova coleção disponivel agora"
        color="bg-red-400"
      />
    </section>
  );
}
