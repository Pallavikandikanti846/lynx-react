const RAW = import.meta.env.VITE_API_BASE_URL || "";
const BASE_URL = RAW.replace(/\/+$/, "");
const join = p => `${BASE_URL}${p.startsWith("/") ? p : `/${p}`}`;

export async function fetchProducts() {
  const r = await fetch(join("/api/products"));
  if (!r.ok) throw new Error(`Failed to load products: ${r.status}`);
  return r.json();
}
export async function fetchCategories() {
  const r = await fetch(join("/api/categories"));
  if (!r.ok) throw new Error(`Failed to load categories: ${r.status}`);
  return r.json();
}
export function resolveImage(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return join(url.startsWith("/") ? url : `/${url}`);
}
