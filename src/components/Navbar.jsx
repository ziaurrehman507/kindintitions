import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const links = [
  ["/", "Home", "⌂"],
  ["/shop", "Shop", "▦"],
  ["/about", "About", "✦"],
  ["/contact", "Contact", "✉"],
];

const deskLink = ({ isActive }) =>
  `font-semibold transition hover:text-white ${isActive ? "text-white" : "text-muted"}`;
const tabLink = ({ isActive }) =>
  `flex flex-col items-center gap-px rounded-[20px] px-4 py-1.5 text-[.7rem] font-semibold transition ${
    isActive ? "bg-brand text-white" : "text-muted"
  }`;

export default function Navbar() {
  const { count, setOpen } = useCart();
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/12 bg-night/70 pb-3 pt-[calc(12px_+_env(safe-area-inset-top,0px))] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4">
          <Link to="/" className="font-display text-[1.45rem] font-extrabold tracking-tighter">
            kindintitions<span className="text-grad">.</span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"} className={deskLink}>{label}</NavLink>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            aria-label={`Open cart, ${count} items`}
            className="relative grid size-11 place-items-center rounded-full border border-white/12 bg-white/6"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 7h12l-1 12H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            {count > 0 && (
              <b key={count} className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 animate-bump place-items-center rounded-full bg-brand px-1.5 text-[.72rem]">
                {count}
              </b>
            )}
          </button>
        </div>
      </header>

      {/* mobile bottom tab bar */}
      <nav
        aria-label="Main"
        className="fixed inset-x-3 bottom-[calc(12px_+_env(safe-area-inset-bottom,0px))] z-30 flex justify-around rounded-[26px] border border-white/12 bg-[rgba(22,20,70,.82)] p-1.5 backdrop-blur-xl md:hidden"
      >
        {links.map(([to, label, ic]) => (
          <NavLink key={to} to={to} end={to === "/"} className={tabLink}>
            <span className="text-[1.1rem]" aria-hidden>{ic}</span>{label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
