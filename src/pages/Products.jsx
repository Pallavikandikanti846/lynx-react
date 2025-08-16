import { useEffect, useState } from "react";
import { fetchProducts, resolveImage } from "../lib/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => { fetchProducts().then(setProducts).catch(console.error); }, []);

  return (
    <section className="product-section">
      <h2>Products</h2>
      <div className="product-list">
        {products.map(p => (
          <div className="product" key={p.id}>
            <img src={resolveImage(p.image)} alt={p.title} />
            <h3>{p.title}</h3>
            <p>Price: ${Number(p.price).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
