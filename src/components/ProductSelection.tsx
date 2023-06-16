import { getProductById } from "@/utils/products";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function ProductSelection({
  ids,
  text
}: ProductSelectionProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const promises = ids.map((id) => getProductById(id));
      Promise.all(promises).then((prods: ProductProps[]) => {
        console.log(prods);
        setProducts(prods);
      });
    }
    fetchProducts();
  }, []);

  return (
    <section>
      <h2 className="sectionTitle text-center">
        {text}
      </h2>
      <div className="flex gap-8 my-3 flex-wrap justify-center">
        {products.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
