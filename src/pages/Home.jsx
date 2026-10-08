import { useRef , useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products, PLACEHOLDER } from "../data/products.js";



const marquee = ["Samsung", "Apple", "Google", "Xiaomi", "Infinix", "Tecno", "Oppo", "Vivo", "Realme"];

const arrowBtn =
  "absolute top-[38%] z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-night/80 backdrop-blur active:scale-90 lg:hidden";

/* Mobile/tablet par slider (left/right buttons), bari screen (lg) par sirf 4 boxes ka grid */
function Trending() {
  const rail = useRef(null);
  const go = (dir) =>
    rail.current?.scrollBy({ left: dir * rail.current.clientWidth * 0.8, behavior: "smooth" });
  const list = products.slice(0, 6);






  return (
    <div className="relative">
      <div
        ref={rail}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:overflow-visible"
      >
        {list.map((p, i) => (
          <ProductCard
            key={p.id}
            p={p}
            className={`w-[62vw] max-w-60 shrink-0 snap-start sm:w-[44vw] lg:w-auto lg:max-w-none ${i >= 4 ? "lg:hidden" : ""}`}
          />
        ))}
      </div>
      <button onClick={() => go(-1)} aria-label="Previous phones" className={`${arrowBtn} left-1`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button onClick={() => go(1)} aria-label="Next phones" className={`${arrowBtn} right-1`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m9 18 6-6-6-6" /></svg>
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero: left = text + buttons, right = sirf image */}
      <section className="mx-auto grid max-w-[1120px] items-center gap-8 px-5 pb-6 pt-9 md:grid-cols-2 md:py-16">
        <div>
          <h1 className="text-[2.6rem] font-extrabold leading-[1.05] tracking-tighter sm:text-6xl">
            <span className="block animate-rise">Next-gen phones.</span>
            <span className="block animate-rise text-grad [animation-delay:.14s]">Sharper prices.</span>
          </h1>
          <p className="mb-6 mt-4 max-w-[34ch] animate-rise text-muted [animation-delay:.3s]">
            Original smartphones from every top brand, with official warranty and fast delivery.
          </p>
          <div className="flex animate-rise flex-wrap gap-3 [animation-delay:.42s]">
            <Link to="/shop" className="btn">Shop phones</Link>
            <Link to="/about" className="btn btn-ghost">Why Mobilix</Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          {/* yahan apni hero image ka path daalo, e.g. src="/img/hero.png" */}
          <img
            src='./img/Icy_Blue_Smartphone_Duo-removebg-preview.png'
            alt="Featured smartphone"
            className="h-80 w-auto animate-float object-contain drop-shadow-[0_30px_50px_rgba(124,58,237,.45)] md:h-[26rem]"
          />
        </div>
      </section>

      {/* brand strip */}
      <div className="my-3.5 overflow-hidden border-y border-white/12 py-3.5" aria-hidden>
        <div className="flex w-max animate-marquee gap-10">
          {[...marquee, ...marquee].map((b, i) => (
            <span key={i} className="whitespace-nowrap font-display text-xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.45)]">{b}</span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1120px] px-4 py-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Trending now</h2>
          <Link to="/shop" className="text-sm font-bold text-neon-cyan">View all</Link>
        </div>
        <Trending />
      </section>

      <section className="mx-auto max-w-[1120px] px-4 py-6">
        <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-[28px] bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 p-6 md:flex-row md:items-center md:justify-between md:p-9">
          <div className="absolute -right-14 -top-16 size-52 rounded-full bg-white/18" />
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight">Exchange your old phone</h2>
            <p className="mt-1 max-w-[36ch] opacity-90">Get up to Rs 25,000 off on any flagship when you trade in.</p>
          </div>
          <Link to="/contact" className="btn btn-light relative">Get a quote</Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-4 py-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Latest arrivals</h2>
          <Link to="/shop" className="text-sm font-bold text-neon-cyan">Shop all</Link>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(5, 9).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
  

<div className="hidden lg:grid lg:grid-cols-4 gap-3">
  {products.slice(5, 9).map((p) => (
    <ProductCard key={p.id} p={p} />
  ))}
</div>
      </section>

      <section className="mx-auto grid max-w-[1120px] gap-2.5 px-4 pb-9 pt-2.5 md:grid-cols-3">
        {[
          ["100% original", "Sealed box, PTA approved"],
          ["Official warranty", "Claim at any service centre"],
          ["Cash on delivery", "Pay when it reaches you"],
        ].map(([t, s]) => (
          <div key={t} className="flex flex-col rounded-[20px] border border-white/12 bg-white/6 p-4">
            <b className="font-display">{t}</b>
            <span className="text-[.88rem] text-muted">{s}</span>
          </div>
        ))}
      </section>
    </>
  );
}
