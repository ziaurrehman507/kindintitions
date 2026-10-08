import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { money, PLACEHOLDER } from "../data/products.js";

export default function ProductCard({ p, className = "" }) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);
  const add = () => {
    dispatch({ type: "add", p });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };
  return (
    <article className={`rounded-3xl border border-white/12 bg-white/6 p-2.5 pb-3 backdrop-blur-md ${className}`}>
      <div className="relative mb-2.5 grid h-52 place-items-center overflow-hidden rounded-[18px] bg-white/5 bg-[radial-gradient(circle_at_50%_70%,rgba(124,58,237,.35),transparent_70%)]">
        {p.tag && (
          <span className="absolute left-2 top-2 z-10 rounded-full bg-brand px-2.5 py-0.5 text-[.7rem] font-bold">{p.tag}</span>
        )}
        {/* yahan apni product image ka path daalo (products.js mein image field) */}
        <img src={p.image || PLACEHOLDER} alt={p.name} loading="lazy" className="h-full w-full object-contain p-3" />
      </div>
      <p className="px-1 text-xs font-bold text-neon-cyan">{p.brand}</p>
      <h3 className="mt-0.5 px-1 text-[.98rem] leading-tight">{p.name}</h3>
      <p className="mb-1.5 mt-0.5 px-1 text-[.8rem] text-muted">{p.ram} RAM · {p.rom}</p>
      <div className="flex flex-wrap items-baseline gap-2 px-1">
        <strong className="text-[.95rem]">€{p.price}</strong>
        {p.old && <s className="text-xs text-muted">€{p.old}</s>}
      </div>
      <button
        onClick={add}
        className={`mt-2.5 w-full rounded-full border py-2.5 text-sm font-bold transition active:bg-brand ${
          added ? "border-transparent bg-brand" : "border-white/12 bg-white/6"
        }`}
      >
        {added ? "Added to cart ✓" : "Add to cart"}
      </button>
    </article>
  );
}
