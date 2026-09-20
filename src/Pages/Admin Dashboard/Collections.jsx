import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Pencil, Trash2, LayoutGrid } from "lucide-react";
import Modal from "../../Components/Admin/Modal";
import StatusBadge from "../../Components/Admin/StatusBadge";
import { COLLECTIONS } from "./adminData";

export default function Collections() {
  const [collections, setCollections] = useState(COLLECTIONS);
  const [addOpen, setAddOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  function togglePublish(id) {
    setCollections((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: c.status === "Published" ? "Draft" : "Published" } : c))
    );
  }
  function remove(id) {
    setCollections((prev) => prev.filter((c) => c.id !== id));
  }
  function onAdd(data) {
    setCollections((prev) => [
      { id: `COL-${prev.length + 1}`, name: data.name, curator: data.curator, artworks: 0, artists: 0, status: "Draft", color: "#A28F7D" },
      ...prev,
    ]);
    reset();
    setAddOpen(false);
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Plus size={15} /> Create collection
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {collections.map((c) => (
          <div key={c.id} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-hidden">
            <div className="h-28 flex items-center justify-center" style={{ backgroundColor: c.color }}>
              <LayoutGrid size={22} className="text-white/70" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="font-['Playfair_Display'] text-[16px] text-[var(--color-neutral)]">{c.name}</p>
                <StatusBadge status={c.status} />
              </div>
              <p className="text-[12px] text-[var(--color-secondary)] mt-1">Curated by {c.curator}</p>
              <div className="mt-2.5 flex items-center gap-4 text-[12px] text-[var(--color-secondary)]">
                <span>{c.artworks} artworks</span>
                <span>{c.artists} artists</span>
              </div>
              <div className="mt-3 flex items-center gap-2 border-t border-[var(--color-outline)] pt-3">
                <button
                  onClick={() => togglePublish(c.id)}
                  className="text-[12px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
                >
                  {c.status === "Published" ? "Unpublish" : "Publish"}
                </button>
                <button title="Edit" className="ml-auto w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                  <Pencil size={13} />
                </button>
                <button
                  title="Delete"
                  onClick={() => remove(c.id)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Create collection"
        footer={
          <>
            <button type="button" onClick={() => setAddOpen(false)} className="h-10 px-4 rounded-full text-[13px] font-medium text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
              Cancel
            </button>
            <button type="submit" form="add-collection-form" className="h-10 px-5 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)]">
              Create
            </button>
          </>
        }
      >
        <form id="add-collection-form" onSubmit={handleSubmit(onAdd)} className="space-y-3.5">
          <div>
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Collection name</label>
            <input {...register("name", { required: true })} className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]" placeholder="e.g. Coastal Light" />
          </div>
          <div>
            <label className="text-[12px] text-[var(--color-secondary)] mb-1 block">Curator</label>
            <input {...register("curator", { required: true })} className="w-full h-10 rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]" placeholder="e.g. Aarav Mehta" />
          </div>
        </form>
      </Modal>
    </div>
  );
}
