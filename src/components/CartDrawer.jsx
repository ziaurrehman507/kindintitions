import { useCart } from "../context/CartContext.jsx";
import {  PLACEHOLDER } from "../data/products.js";

export default function CartDrawer() {
  const { items, dispatch, total, open, setOpen } = useCart();
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-[rgba(5,5,25,.65)] transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-hidden={!open}
        aria-label="Cart"
        className={`fixed inset-x-0 bottom-0 z-50 flex max-h-[88vh] flex-col rounded-t-[28px] border border-white/12 bg-panel px-4 pb-[calc(16px_+_env(safe-area-inset-bottom,0px))] pt-4 transition-transform duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)]
          md:inset-x-auto md:bottom-0 md:right-0 md:top-0 md:max-h-none md:w-[420px] md:rounded-l-[28px] md:rounded-tr-none
          ${open ? "translate-y-0 md:translate-x-0" : "translate-y-[105%] md:translate-x-[105%] md:translate-y-0"}`}
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-bold">Your cart</h2>
          <button onClick={() => setOpen(false)} aria-label="Close cart" className="size-9 rounded-full border border-white/12 bg-white/6">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="py-8 text-center text-muted">Your cart is empty. Pick a phone from the shop and it will show up here.</p>
        ) : (
          <>
            <ul className="overflow-y-auto">
              {items.map((i) => (
                <li key={i.id} className="grid grid-cols-[56px_1fr_auto] items-center gap-3 border-b border-white/12 py-3">
                  <img src={i.image || PLACEHOLDER} alt={i.name} className="h-16 w-14 rounded-xl bg-white/6 object-contain p-1" />
                  <div>
                    <b className="text-sm">{i.name}</b>
                    <small className="block text-muted">€{i.price}</small>
                    <div className="mt-1.5 inline-flex items-center gap-3 rounded-full bg-white/6 p-0.5">
                      <button onClick={() => dispatch({ type: "dec", id: i.id })} aria-label="Decrease" className="size-7 rounded-full bg-white/12 font-bold">−</button>
                      <span>{i.qty}</span>
                      <button onClick={() => dispatch({ type: "add", p: i })} aria-label="Increase" className="size-7 rounded-full bg-white/12 font-bold">+</button>
                    </div>
                  </div>
                  <button onClick={() => dispatch({ type: "remove", id: i.id })} className="text-sm font-bold text-neon-cyan">Remove</button>
                </li>
              ))}
            </ul>
            <div>
              <div className="my-3.5 flex items-center justify-between">
                <span>Total</span>
                <strong className="text-xl">€{total}</strong>
              </div>
              <button className="btn block w-full" >Checkout</button>
              <button onClick={() => dispatch({ type: "clear" })} className="mx-auto mt-3 block text-sm font-bold text-neon-cyan">Clear cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
