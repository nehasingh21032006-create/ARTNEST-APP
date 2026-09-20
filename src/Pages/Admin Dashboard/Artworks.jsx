import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Eye, Pencil, Check, X, Trash2, ImageIcon } from "lucide-react";
import SearchBar from "../../Components/Admin/SearchBar";
import FilterSelect from "../../Components/Admin/FilterSelect";
import StatusBadge from "../../Components/Admin/StatusBadge";
import Modal from "../../Components/Admin/Modal";
import { ARTWORKS } from "./adminData";
import { formatINR } from "./format";

const CATEGORIES = ["All categories", "Painting", "Digital Art", "Sculpture", "Abstract Art", "Photography"];
const PRICE_BANDS = ["Any price", "Under ₹20,000", "₹20,000 – ₹60,000", "Above ₹60,000"];
const STATUSES = ["All statuses", "Approved", "Pending", "Rejected"];

function inBand(price, band) {
  if (band === PRICE_BANDS[1]) return price < 20000;
  if (band === PRICE_BANDS[2]) return price >= 20000 && price <= 60000;
  if (band === PRICE_BANDS[3]) return price > 60000;
  return true;
}

export default function Artworks() {
  const [artworks, setArtworks] = useState(ARTWORKS);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [priceBand, setPriceBand] = useState(PRICE_BANDS[0]);
  const [status, setStatus] = useState(STATUSES[0]);
  const [addOpen, setAddOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const filtered = useMemo(() => {
    return artworks.filter((a) => {
      if (!a.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (category !== CATEGORIES[0] && a.category !== category) return false;
      if (status !== STATUSES[0] && a.status !== status) return false;
      if (!inBand(a.price, priceBand)) return false;
      return true;
    });
  }, [artworks, search, category, priceBand, status]);

  function setArtStatus(id, s) {
    setArtworks((prev) => prev.map((a) => (a.id === id ? { ...a, status: s } : a)));
  }
  function removeArt(id) {
    setArtworks((prev) => prev.filter((a) => a.id !== id));
  }
  function onAdd(data) {
    setArtworks((prev) => [
      {
        id: `AW-${prev.length + 1}`,
        title: data.title,
        artist: data.artist,
        category: data.category,
        medium: data.medium,
        price: Number(data.price) || 0,
        stock: "1 of 1",
        status: "Pending",
        color: "#A28F7D",
      },
      ...prev,
    ]);
    reset();
    setAddOpen(false);
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2.5">
        <SearchBar value={search} onChange={setSearch} placeholder="Search artworks…" className="flex-1 min-w-[200px]" />
        <FilterSelect value={category} onChange={setCategory} options={CATEGORIES} label="Category" />
        <FilterSelect value={priceBand} onChange={setPriceBand} options={PRICE_BANDS} label="Price" />
        <FilterSelect value={status} onChange={setStatus} options={STATUSES} label="Status" />
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          className="ml-auto inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Plus size={15} /> Add artwork
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {filtered.map((a) => (
          <div key={a.id} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-hidden">
            <div className="h-28 flex items-center justify-center" style={{ backgroundColor: a.color }}>
              <ImageIcon size={22} className="text-white/70" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[13.5px] font-medium text-[var(--color-neutral)] truncate">{a.title}</p>
                  <p className="text-[12px] text-[var(--color-secondary)] truncate">{a.artist} · {a.medium}</p>
                </div>
                <StatusBadge status={a.status} />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[12px] text-[var(--color-secondary)]">
                <span className="font-semibold text-[var(--color-neutral)] text-[13px]">{formatINR(a.price)}</span>
                <span>{a.stock}</span>
              </div>
              <div className="mt-3 flex items-center gap-1 border-t border-[var(--color-outline)] pt-3">
                <button title="View" className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                  <Eye size={13} />
                </button>
                <button title="Edit" className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                  <Pencil size={13} />
                </button>
                <button
                  title="Approve"
                  onClick={() => setArtStatus(a.id, "Approved")}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#4C6B3F] hover:bg-[#E7EEDD]"
                >
                  <Check size={13} />
                </button>
                <button
                  title="Reject"
                  onClick={() => setArtStatus(a.id, "Rejected")}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#9B3B2E] hover:bg-[#F6DFDA]"
                >
                  <X size={13} />
                </button>
                <button
                  title="Delete"
                  onClick={() => removeArt(a.id)}
                  className="ml-auto w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-[13px] text-[var(--color-secondary)] py-8">
            No artworks match these filters.
          </p>
        )}
      </div>

      <Modal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Add new artwork"
        footer={
          <>
            <button type="button" onClick={() => setAddOpen(false)} className="h-10 px-4 rounded-full text-[13px] font-medium text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
              Cancel
            </button>
            <button type="submit" form="add-artwork-form" className="h-10 px-5 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)]">
              Add artwork
            </button>
          </>
        }
      >
        <form id="add-artwork-form" onSubmit={handleSubmit(onAdd)} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <F label="Title" {...register("title", { required: true })} placeholder="e.g. Golden Silence" />
          <F label="Artist" {...register("artist", { required: true })} placeholder="e.g. Aarav Mehta" />
          <S label="Category" options={CATEGORIES.slice(1)} {...register("category")} />
          <F label="Medium" {...register("medium")} placeholder="e.g. Acrylic on Canvas" />
          <F label="Price (₹)" type="number" {...register("price", { required: true })} placeholder="18500" />
          <F label="Image URL" {...register("image")} placeholder="https://…" />
        </form>
      </Modal>
    </div>
  );
}

function F({ label, ...props }) {
  return (
    <div>
      <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">{label}</label>
      <input {...props} className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]" />
    </div>
  );
}
function S({ label, options, ...props }) {
  return (
    <div>
      <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">{label}</label>
      <select {...props} className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
