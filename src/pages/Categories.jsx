import { useEffect, useState } from "react";
import { fetchCategories } from "../lib/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => { fetchCategories().then(setCategories).catch(console.error); }, []);

  return (
    <section className="category-section">
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
  );
}
