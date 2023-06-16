import formatPrice from "@/utils/formatPrice";

export default function Card({ image, name, price, id }: ProductProps) {
  return (
    <a href={`/product/${id}`} className="text-zinc-900 w-60 min-w-[240px] p-4">
      <div className="w-full h-80 relative bg-zinc-300">
        <img className="productImg" src={image} alt={`Image ${name}`} />
      </div>
      <p className="text-sm capitalize text-ellipsis h-5 overflow-hidden mt-2">
        {name}
      </p>
      <h4 className="text-xl font-medium">{formatPrice(price)}</h4>
    </a>
  );
}
