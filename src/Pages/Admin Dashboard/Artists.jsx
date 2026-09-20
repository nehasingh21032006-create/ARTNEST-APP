import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Eye, Pencil, ShieldCheck, Ban, BadgeCheck } from "lucide-react";
import SearchBar from "../../Components/Admin/SearchBar";
import FilterSelect from "../../Components/Admin/FilterSelect";
import StatusBadge from "../../Components/Admin/StatusBadge";
import Modal from "../../Components/Admin/Modal";
import { ARTISTS } from "./adminData";
import { formatINR } from "./format";

const CATEGORIES = ["All specialties", "Paintings", "Digital Art", "Sculpture", "Abstract Art", "Photography"];
const VERIFICATION = ["All artists", "Verified", "Unverified"];
const SORTS = ["Sort: Sales (high to low)", "Sort: Rating (high to low)", "Sort: Name (A–Z)"];

export default function Artists() {
  const [artists, setArtists] = useState(ARTISTS);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [verification, setVerification] = useState(VERIFICATION[0]);
  const [sort, setSort] = useState(SORTS[0]);
  const [addOpen, setAddOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const filtered = useMemo(() => {
    let rows = artists.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()));
    if (category !== CATEGORIES[0]) rows = rows.filter((a) => a.specialty === category);
    if (verification === "Verified") rows = rows.filter((a) => a.verified);
    if (verification === "Unverified") rows = rows.filter((a) => !a.verified);

    rows = [...rows];
    if (sort === SORTS[0]) rows.sort((a, b) => b.sales - a.sales);
    if (sort === SORTS[1]) rows.sort((a, b) => b.rating - a.rating);
    if (sort === SORTS[2]) rows.sort((a, b) => a.name.localeCompare(b.name));
    return rows;
  }, [artists, search, category, verification, sort]);

  function setStatus(id, status) {
    setArtists((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  }
  function toggleVerify(id) {
    setArtists((prev) => prev.map((a) => (a.id === id ? { ...a, verified: !a.verified } : a)));
  }

  function onAddArtist(data) {
    setArtists((prev) => [
      {
        id: `ART-${prev.length + 1}`,
        name: data.name,
        specialty: data.specialty,
        location: data.location,
        artworks: 0,
        sales: 0,
        rating: 0,
        verified: false,
        status: "Under review",
      },
      ...prev,
    ]);
    reset();
    setAddOpen(false);
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2.5">
        <SearchBar value={search} onChange={setSearch} placeholder="Search artists…" className="flex-1 min-w-[200px]" />
        <FilterSelect value={category} onChange={setCategory} options={CATEGORIES} label="Specialty" />
        <FilterSelect value={verification} onChange={setVerification} options={VERIFICATION} label="Verification" />
        <FilterSelect value={sort} onChange={setSort} options={SORTS} label="Sort" />
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          className="ml-auto inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Plus size={15} /> Add artist
        </button>
      </div>

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-x-auto">
        <table className="w-full text-left min-w-[860px]">
          <thead>
            <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)]">
              <th className="px-5 py-3 font-medium">Artist</th>
              <th className="px-5 py-3 font-medium">Location</th>
              <th className="px-5 py-3 font-medium">Artworks</th>
              <th className="px-5 py-3 font-medium">Sales</th>
              <th className="px-5 py-3 font-medium">Rating</th>
              <th className="px-5 py-3 font-medium">Verification</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="border-t border-[var(--color-outline)]/70 hover:bg-[var(--color-section)]/60">
                <td className="px-5 py-3">
                  <p className="text-[13px] font-medium text-[var(--color-neutral)]">{a.name}</p>
                  <p className="text-[12px] text-[var(--color-secondary)]">{a.specialty}</p>
                </td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{a.location}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{a.artworks}</td>
                <td className="px-5 py-3 text-[13px] font-medium text-[var(--color-neutral)]">{formatINR(a.sales)}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{a.rating || "—"}</td>
                <td className="px-5 py-3">
                  {a.verified ? (
                    <span className="inline-flex items-center gap-1 text-[12px] text-[#4C6B3F]">
                      <BadgeCheck size={14} /> Verified
                    </span>
                  ) : (
                    <span className="text-[12px] text-[var(--color-secondary)]">Unverified</span>
                  )}
                </td>
                <td className="px-5 py-3">
                  <StatusBadge status={a.status} />
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1">
                    <button title="View" className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                      <Eye size={14} />
                    </button>
                    <button title="Edit" className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                      <Pencil size={14} />
                    </button>
                    <button
                      title={a.verified ? "Unverify" : "Verify"}
                      onClick={() => toggleVerify(a.id)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[#4C6B3F] hover:bg-[#E7EEDD]"
                    >
                      <ShieldCheck size={14} />
                    </button>
                    <button
                      title="Suspend"
                      onClick={() => setStatus(a.id, "Suspended")}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[#9B3B2E] hover:bg-[#F6DFDA]"
                    >
                      <Ban size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-5 py-8 text-center text-[13px] text-[var(--color-secondary)]">
                  No artists match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Add new artist"
        footer={
          <>
            <button
              type="button"
              onClick={() => setAddOpen(false)}
              className="h-10 px-4 rounded-full text-[13px] font-medium text-[var(--color-secondary)] hover:bg-[var(--color-section)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="add-artist-form"
              className="h-10 px-5 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)]"
            >
              Add artist
            </button>
          </>
        }
      >
        <form id="add-artist-form" onSubmit={handleSubmit(onAddArtist)} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Field label="Full name" {...register("name", { required: true })} placeholder="e.g. Devika Rao" />
            <Field label="Email" type="email" {...register("email", { required: true })} placeholder="artist@email.com" />
            <Field label="Phone" {...register("phone")} placeholder="+91 98765 43210" />
            <SelectField label="Specialty" {...register("specialty")} options={CATEGORIES.slice(1)} />
            <Field label="Location" {...register("location")} placeholder="City, IN" />
            <Field label="Profile image URL" {...register("image")} placeholder="https://…" />
          </div>
          <Field label="Instagram / portfolio link" {...register("social")} placeholder="https://…" />
          <div>
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Biography</label>
            <textarea
              {...register("bio")}
              rows={3}
              className="w-full rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 py-2 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
              placeholder="Short artist bio…"
            />
          </div>
        </form>
      </Modal>
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

function SelectField({ label, options, ...props }) {
  return (
    <div>
      <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">{label}</label>
      <select
        {...props}
        className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
