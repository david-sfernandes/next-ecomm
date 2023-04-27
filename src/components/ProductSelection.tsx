import products from "@/utils/products";
import Card from "./Card";

export default function ProductSelection({
  start,
  end,
  text,
  alignCenter
}: ProductSelectionProps) {
  return (
    <section>
      <h2 className={`sectionTitle  ${alignCenter && "text-center"}`}>{text}</h2>
      <div className="flex gap-8 my-3 flex-wrap justify-center">
        {products.slice(start, end).map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
