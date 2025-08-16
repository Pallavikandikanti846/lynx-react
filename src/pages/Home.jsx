import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories, resolveImage } from "../lib/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([p, c]) => { setProducts(p); setCategories(c); })
      .catch(console.error);
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="mainContent">
        <div id="mainDiv">
        <h1 id="contentHeader">Shop the Hottest Summer Styles!</h1>
        <p id="content">Get 30% off all products — limited time only!</p>
        </div>
        <a id="shopBtn" href="/products">Shop Now</a>
      </section>

      {/* CATEGORIES */}
      <section id="categories">
        <h2>Categories</h2>
        <div className="category-list">
          {categories.map(c => (
            <div className="category" key={c.id}>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products">
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
    </>
  );
}
