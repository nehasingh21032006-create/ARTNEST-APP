import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Clock3 } from "lucide-react";
import PageHero from "../Components/PageHero";

const INFO = [
  { icon: Mail, title: "Email", value: "hello@athenura.com" },
  { icon: Phone, title: "Phone", value: "+91 80 4567 8900" },
  { icon: MapPin, title: "Studio", value: "14, MG Road, Bengaluru, Karnataka" },
  { icon: Clock3, title: "Hours", value: "Mon–Fri, 10am–6pm IST" },
];

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [sent, setSent] = useState(false);

  function onSubmit() {
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="bg-[var(--color-canvas)] font-['Plus_Jakarta_Sans']">
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Questions about an order, a commission, or joining as an artist — our team typically replies within one business day."
      />

      <section className="max-w-[980px] mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          {INFO.map((i) => {
            const Icon = i.icon;
            return (
              <div key={i.title} className="flex items-start gap-3 bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-4">
                <span className="w-9 h-9 rounded-full bg-[var(--color-section)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[12px] text-[var(--color-secondary)]">{i.title}</p>
                  <p className="text-[14px] text-[var(--color-neutral)] font-medium">{i.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-6 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
                placeholder="Your name"
              />
              {errors.name && <p className="text-[11px] text-[#9B3B2E] mt-1">Please enter your name.</p>}
            </div>
            <div>
              <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
                placeholder="you@email.com"
              />
              {errors.email && <p className="text-[11px] text-[#9B3B2E] mt-1">Please enter a valid email.</p>}
            </div>
          </div>

          <div>
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Subject</label>
            <select
              {...register("subject")}
              className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
            >
              <option>Order enquiry</option>
              <option>Custom commission</option>
              <option>Becoming an artist</option>
              <option>Press & partnerships</option>
              <option>Something else</option>
            </select>
          </div>

          <div>
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows={5}
              className="w-full rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 py-2 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
              placeholder="How can we help?"
            />
            {errors.message && <p className="text-[11px] text-[#9B3B2E] mt-1">Please add a short message.</p>}
          </div>

          <button
            type="submit"
            className="h-11 px-6 rounded-full bg-[var(--color-primary)] text-white text-[13.5px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            {sent ? "Message sent ✓" : "Send message"}
          </button>
        </form>
      </section>
    </div>
  );
}
