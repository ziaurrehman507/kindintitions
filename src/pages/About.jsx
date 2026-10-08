export default function About() {
  return (
    <section className="mx-auto max-w-[1120px] px-4 py-7">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tighter">About Mobilix</h1>
      <p className="mb-3.5 max-w-[60ch] text-lg font-semibold">We sell only original, sealed smartphones, with the warranty to prove it.</p>
      <p className="mb-3.5 max-w-[60ch] text-[#d9d8f5]">
        Mobilix started as a small counter shop and grew into an online store because customers kept asking one thing: is it really original? Every phone we ship comes with its box seal, invoice and official warranty.
      </p>
      <div className="my-6 grid max-w-xl grid-cols-3 gap-2.5">
        {[["15k+", "phones sold"], ["4.9", "customer rating"], ["48h", "delivery"]].map(([n, l]) => (
          <div key={l} className="rounded-[20px] border border-white/12 bg-white/6 px-2 py-4 text-center">
            <strong className="block text-2xl text-grad">{n}</strong>
            <span className="text-xs text-muted">{l}</span>
          </div>
        ))}
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight">What you can count on</h2>
      <p className="max-w-[60ch] text-[#d9d8f5]">Honest prices, clear specs and a team that picks up the phone. Replace this text with your client's real story.</p>
    </section>
  );
}
