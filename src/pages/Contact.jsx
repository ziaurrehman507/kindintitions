import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); /* yahan API call lagao */ };
  return (
    <section className="mx-auto max-w-[1120px] px-4 py-7">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tighter">Contact us</h1>
      <p className="mb-3.5 max-w-[60ch] text-lg font-semibold">Need help choosing a phone or tracking an order? We reply within a few hours.</p>
      <div className="mb-6 mt-4 grid gap-1.5 font-bold">
        <a href="tel:+920000000000">+351922038910</a>
        <a href="mailto:hello@mobilix.pk">Kindintentions.lda@gmail.com</a>
        <span>Mon–Sat, 10am to 8pm</span>
      </div>
      {sent ? (
        <p className="rounded-2xl border border-neon-cyan bg-neon-cyan/15 p-4 font-bold">Thanks, your message is sent. We'll get back to you soon.</p>
      ) : (
        <form onSubmit={submit} className="grid max-w-[480px] gap-3.5">
          <label className="grid gap-1.5 text-sm font-bold">Name<input required placeholder="Your name" className="field font-normal" /></label>
          <label className="grid gap-1.5 text-sm font-bold">Email<input required type="email" placeholder="you@example.com" className="field font-normal" /></label>
          <label className="grid gap-1.5 text-sm font-bold">Message<textarea required rows="4" placeholder="How can we help?" className="field rounded-[18px] font-normal" /></label>
          <button className="btn block w-full">Send message</button>
        </form>
      )}
    </section>
  );
}
