import formatPrice from "@/utils/formatPrice";

type onEditProp = {
  onEdit: (product: ProductProps) => void;
}

export default function StockProduct(product: ProductProps & onEditProp) {
  return (
    <div className="roundedCard flex my-0 items-center">
      <div className="w-28 h-40 relative bg-zinc-300 flex-shrink-0">
        <img src={product.img} alt={product.name} className="productImg" />
      </div>
      <div className="mx-2 w-full">
        <h3 className="capitalize font-medium text-xl">{product.name}</h3>
        <h4 className="text-lg">{formatPrice(product.price)}</h4>
        <p>Qtd: {product.quantity}</p>
      </div>
      <button onClick={() => product.onEdit(product)} className="submitBtn h-fit ml-auto">
        Editar
      </button>
    </div>
  );
}
