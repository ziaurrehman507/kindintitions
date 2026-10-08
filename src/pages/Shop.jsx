import { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { products, brands } from "../data/products.js";

export default function Shop() {
  const [brand, setBrand] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");
  let list = products.filter(
    (p) => (brand === "All" || p.brand === brand) && (p.name + p.brand).toLowerCase().includes(q.toLowerCase())
  );
  if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);

  return (
    <section className="mx-auto max-w-[1120px] px-4 py-7">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tighter">All phones</h1>
      <div className="mb-3 flex gap-2.5">
        <input className="field min-w-0 flex-1" placeholder="Search by name or brand" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="field w-auto" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
          <option className="text-black" value="featured">Featured</option>
          <option className="text-black" value="low">Price: low to high</option>
          <option className="text-black" value="high">Price: high to low</option>
        </select>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-3.5 [scrollbar-width:none]">
        {brands.map((b) => (
          <button
            key={b}
            onClick={() => setBrand(b)}
            className={`shrink-0 rounded-full border px-4.5 py-2 text-sm font-semibold transition ${
              b === brand ? "border-transparent bg-brand" : "border-white/12 bg-white/6"
            }`}
          >
            {b}
          </button>
        ))}
      </div>
      {list.length ? (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      ) : (
        <p className="py-8 text-center text-muted">No phones match that search. Try another name or choose All.</p>
      )}
    </section>
  );
}
