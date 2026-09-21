import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Eye, Pencil, Trash2, ImageIcon } from "lucide-react";
import SearchBar from "../../Components/Admin/SearchBar";
import FilterSelect from "../../Components/Admin/FilterSelect";
import StatusBadge from "../../Components/Admin/StatusBadge";
import Modal from "../../Components/Admin/Modal";
import { MY_ARTWORKS } from "./artistData";
import { formatINR } from "../Admin Dashboard/format";

const STATUSES = ["All statuses", "Approved", "Pending", "Rejected"];

export default function MyArtworks() {
  const [artworks, setArtworks] = useState(MY_ARTWORKS);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(STATUSES[0]);
  const [addOpen, setAddOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const filtered = useMemo(() => {
    return artworks.filter((a) => {
      if (status !== STATUSES[0] && a.status !== status) return false;
      return a.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [artworks, search, status]);

  function remove(id) {
    setArtworks((prev) => prev.filter((a) => a.id !== id));
  }
  function onAdd(data) {
    setArtworks((prev) => [
      {
        id: `AW-${prev.length + 1}`,
        title: data.title,
        category: "Painting",
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
        <SearchBar value={search} onChange={setSearch} placeholder="Search my artworks…" className="flex-1 min-w-[200px]" />
        <FilterSelect value={status} onChange={setStatus} options={STATUSES} label="Status" />
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          className="ml-auto inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Plus size={15} /> Submit new artwork
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
                  <p className="text-[12px] text-[var(--color-secondary)] truncate">{a.medium}</p>
                </div>
                <StatusBadge status={a.status} />
              </div>
              <p className="mt-2.5 text-[13px] font-semibold text-[var(--color-neutral)]">{formatINR(a.price)}</p>
              <div className="mt-3 flex items-center gap-1 border-t border-[var(--color-outline)] pt-3">
                <button title="View" className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                  <Eye size={13} />
                </button>
                <button title="Edit" className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                  <Pencil size={13} />
                </button>
                <button
                  title="Remove"
                  onClick={() => remove(a.id)}
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
        title="Submit new artwork"
        footer={
          <>
            <button type="button" onClick={() => setAddOpen(false)} className="h-10 px-4 rounded-full text-[13px] font-medium text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
              Cancel
            </button>
            <button type="submit" form="submit-artwork-form" className="h-10 px-5 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)]">
              Submit for review
            </button>
          </>
        }
      >
        <form id="submit-artwork-form" onSubmit={handleSubmit(onAdd)} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="sm:col-span-2">
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Title</label>
            <input {...register("title", { required: true })} className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]" placeholder="e.g. Monsoon Light" />
          </div>
          <div>
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Medium</label>
            <input {...register("medium")} className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]" placeholder="e.g. Oil on Canvas" />
          </div>
          <div>
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Price (₹)</label>
            <input type="number" {...register("price", { required: true })} className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]" placeholder="24500" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Reference image URL</label>
            <input {...register("image")} className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]" placeholder="https://…" />
          </div>
        </form>
      </Modal>
    </div>
  );
}
