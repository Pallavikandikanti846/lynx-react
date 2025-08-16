import { resolveImage } from "../lib/api";

export default function ProductCard({ product }){
  return (
    <div className="card">
      <img src={resolveImage(product.image)} alt={product.title} />
      <h3>{product.title}</h3>
      <div className="price">${Number(product.price).toFixed(2)}</div>
    </div>
  );
}
