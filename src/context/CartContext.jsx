import { createContext, useContext, useEffect, useReducer, useState } from "react";

const CartCtx = createContext();
export const useCart = () => useContext(CartCtx);

function reducer(items, a) {
  switch (a.type) {
    case "add": {
      const f = items.find((i) => i.id === a.p.id);
      return f ? items.map((i) => (i.id === a.p.id ? { ...i, qty: i.qty + 1 } : i)) : [...items, { ...a.p, qty: 1 }];
    }
    case "dec":
      return items.map((i) => (i.id === a.id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0);
    case "remove":
      return items.filter((i) => i.id !== a.id);
    case "clear":
      return [];
    default:
      return items;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], () => {
    try { return JSON.parse(localStorage.getItem("cart-v3")) || []; } catch { return []; }
  });
  const [open, setOpen] = useState(false);
  useEffect(() => localStorage.setItem("cart-v3", JSON.stringify(items)), [items]);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);
  return (
    <CartCtx.Provider value={{ items, dispatch, count, total, open, setOpen }}>{children}</CartCtx.Provider>
  );
}
