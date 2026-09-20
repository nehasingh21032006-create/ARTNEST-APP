import React, { useState } from "react";

function Toggle({ checked, onChange, label, hint }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[var(--color-outline)]/70 last:border-b-0">
      <div>
        <p className="text-[13.5px] text-[var(--color-neutral)]">{label}</p>
        {hint ? <p className="text-[12px] text-[var(--color-secondary)]">{hint}</p> : null}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
          checked ? "bg-[var(--color-primary)]" : "bg-[var(--color-outline)]"
        }`}
      >
        <span
          className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white transition-transform ${
            checked ? "translate-x-[22px]" : "translate-x-[3px]"
          }`}
        />
      </button>
    </div>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">{label}</label>
      <input
        {...props}
        className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
      />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
      <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)] mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default function Settings() {
  const [notifs, setNotifs] = useState({
    email: true,
    orders: true,
    artists: false,
    reviews: true,
  });
  const [saved, setSaved] = useState(false);

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <form onSubmit={handleSave} className="space-y-5">
      <Section title="General">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Website name" defaultValue="ArtNest" />
          <Field label="Website logo URL" defaultValue="/assets/artnest-logo.svg" />
          <Field label="Contact email" type="email" defaultValue="hello@artnest.com" />
          <Field label="Phone" defaultValue="+91 98765 43210" />
          <div className="sm:col-span-2">
            <Field label="Address" defaultValue="14, MG Road, Bengaluru, Karnataka" />
          </div>
        </div>
      </Section>

      <Section title="Admin profile">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Name" defaultValue="Amara Deshmukh" />
          <Field label="Email" type="email" defaultValue="amara@artnest.com" />
          <Field label="Profile image URL" defaultValue="/assets/admin-avatar.jpg" />
          <Field label="New password" type="password" placeholder="••••••••" />
        </div>
      </Section>

      <Section title="Notifications">
        <Toggle checked={notifs.email} onChange={(v) => setNotifs((n) => ({ ...n, email: v }))} label="Email notifications" hint="Receive a daily summary email" />
        <Toggle checked={notifs.orders} onChange={(v) => setNotifs((n) => ({ ...n, orders: v }))} label="Order notifications" hint="Alert on every new order" />
        <Toggle checked={notifs.artists} onChange={(v) => setNotifs((n) => ({ ...n, artists: v }))} label="Artist notifications" hint="New artist sign-ups and submissions" />
        <Toggle checked={notifs.reviews} onChange={(v) => setNotifs((n) => ({ ...n, reviews: v }))} label="Review notifications" hint="New review left on any artwork" />
      </Section>

      <Section title="Payment settings">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Currency</label>
            <select
              defaultValue="INR (₹)"
              className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
            >
              <option>INR (₹)</option>
              <option>USD ($)</option>
            </select>
          </div>
          <Field label="Tax (%)" type="number" defaultValue="18" />
          <div>
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Payment methods</label>
            <select
              defaultValue="UPI, Cards, Bank transfer"
              className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
            >
              <option>UPI, Cards, Bank transfer</option>
              <option>UPI only</option>
              <option>Cards only</option>
            </select>
          </div>
        </div>
      </Section>

      <div className="flex justify-end">
        <button
          type="submit"
          className="h-10 px-6 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          {saved ? "Saved ✓" : "Save changes"}
        </button>
      </div>
    </form>
  );
}
