import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-5 overflow-hidden rounded-t-[34px] bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 px-5 pb-[calc(110px_+_env(safe-area-inset-bottom,0px))] pt-10 text-white md:pb-10">
      <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-cyan-400/40 blur-[70px]" />
      <div className="relative mx-auto grid max-w-[1120px] gap-6 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <div className="font-display text-[1.45rem] font-extrabold tracking-tighter">kindintitions.</div>
          {/* <p className="mt-1.5 max-w-[32ch] opacity-90">Original smartphones with warranty, delivered across Pakistan.</p> */}
        </div>
        <div className="grid grid-cols-2 gap-5 text-[.92rem]">
          <div className="flex flex-col gap-1.5">
            <h4 className="mb-1 font-bold">Explore</h4>
            <Link to="/" className="opacity-90">Home</Link>
            <Link to="/shop" className="opacity-90">Shop</Link>
            <Link to="/about" className="opacity-90">About</Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <h4 className="mb-1 font-bold">Help</h4>
            <Link to="/contact" className="opacity-90">Contact</Link>
            <a href="tel:+920000000000" className="opacity-90">+351922038910</a>
            <a href="mailto:hello@mobilix.pk" className="opacity-90">Kindintentions.lda@gmail.com</a>
            <a href="mailto:hello@mobilix.pk" className="opacity-90"> <span className="text-[white] font-bold " >Adress :</span> RUA COSTA PINTO, 209 LOJA 122645-185 ALCABIDECHE(CASCAIS)PORTUGAL</a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 md:col-span-2">
          {["Official warranty", "Cash on delivery", "7-day returns"].map((t) => (
            <span key={t} className="rounded-full border border-white/30 bg-white/18 px-3.5 py-1.5 text-[.8rem] font-semibold">{t}</span>
          ))}
        </div>
        <small className="opacity-80 md:col-span-2">© {new Date().getFullYear()} Kindintentions. All rights reserved.</small>
      </div>
    </footer>
  );
}
