import React, { useState } from "react";
import { BadgeCheck, Star, Users as UsersIcon } from "lucide-react";
import { ARTIST_PROFILE } from "./artistData";

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">{label}</label>
      <input {...props} className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]" />
    </div>
  );
}

export default function Profile() {
  const [saved, setSaved] = useState(false);

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="space-y-5">
      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5 flex flex-wrap items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d6c4ae] to-[#b99a78] flex items-center justify-center text-white text-[20px] font-semibold shrink-0">
          {ARTIST_PROFILE.initials}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <p className="font-['Playfair_Display'] text-[19px] text-[var(--color-neutral)]">{ARTIST_PROFILE.name}</p>
            {ARTIST_PROFILE.verified && <BadgeCheck size={16} className="text-[#4C6B3F]" />}
          </div>
          <p className="text-[13px] text-[var(--color-secondary)]">{ARTIST_PROFILE.specialty} · {ARTIST_PROFILE.location}</p>
          <div className="mt-1.5 flex items-center gap-4 text-[12.5px] text-[var(--color-secondary)]">
            <span className="flex items-center gap-1"><Star size={12} className="fill-[#9F5639] text-[#9F5639]" /> {ARTIST_PROFILE.rating}</span>
            <span className="flex items-center gap-1"><UsersIcon size={12} /> {ARTIST_PROFILE.followers.toLocaleString("en-IN")} followers</span>
            <span>Joined {ARTIST_PROFILE.joined}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSave} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5 space-y-4">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)] mb-1">Edit profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Full name" defaultValue={ARTIST_PROFILE.name} />
          <Field label="Specialty" defaultValue={ARTIST_PROFILE.specialty} />
          <Field label="Location" defaultValue={ARTIST_PROFILE.location} />
          <Field label="Email" type="email" defaultValue={ARTIST_PROFILE.email} />
          <Field label="Phone" defaultValue={ARTIST_PROFILE.phone} />
          <Field label="Instagram / portfolio" defaultValue={ARTIST_PROFILE.instagram} />
        </div>
        <div>
          <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Biography</label>
          <textarea
            rows={3}
            defaultValue={ARTIST_PROFILE.bio}
            className="w-full rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 py-2 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="h-10 px-6 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors">
            {saved ? "Saved ✓" : "Save changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
