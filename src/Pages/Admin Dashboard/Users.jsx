import React, { useMemo, useState } from "react";
import { Eye, Pencil, Ban, CheckCircle2 } from "lucide-react";
import SearchBar from "../../Components/Admin/SearchBar";
import StatusBadge from "../../Components/Admin/StatusBadge";
import { USERS } from "./adminData";
import { formatINR } from "./format";

function initials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function Users() {
  const [users, setUsers] = useState(USERS);
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () => users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())),
    [users, search]
  );

  function toggleBlock(id) {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status: u.status === "Blocked" ? "Active" : "Blocked" } : u)));
  }

  return (
    <div className="space-y-5">
      <SearchBar value={search} onChange={setSearch} placeholder="Search users…" className="max-w-[320px]" />

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-x-auto">
        <table className="w-full text-left min-w-[820px]">
          <thead>
            <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)]">
              <th className="px-5 py-3 font-medium">User</th>
              <th className="px-5 py-3 font-medium">Orders</th>
              <th className="px-5 py-3 font-medium">Wishlist</th>
              <th className="px-5 py-3 font-medium">Total spend</th>
              <th className="px-5 py-3 font-medium">Joined</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-t border-[var(--color-outline)]/70 hover:bg-[var(--color-section)]/60">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d6c4ae] to-[#b99a78] flex items-center justify-center text-white text-[11px] font-semibold shrink-0">
                      {initials(u.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-[var(--color-neutral)] truncate">{u.name}</p>
                      <p className="text-[12px] text-[var(--color-secondary)] truncate">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{u.orders}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{u.wishlist}</td>
                <td className="px-5 py-3 text-[13px] font-medium text-[var(--color-neutral)]">{formatINR(u.spend)}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)] whitespace-nowrap">{u.joined}</td>
                <td className="px-5 py-3"><StatusBadge status={u.status} /></td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1">
                    <button title="View" className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                      <Eye size={14} />
                    </button>
                    <button title="Edit" className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--color-secondary)] hover:bg-[var(--color-section)]">
                      <Pencil size={14} />
                    </button>
                    <button
                      title={u.status === "Blocked" ? "Unblock" : "Block"}
                      onClick={() => toggleBlock(u.id)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        u.status === "Blocked" ? "text-[#4C6B3F] hover:bg-[#E7EEDD]" : "text-[#9B3B2E] hover:bg-[#F6DFDA]"
                      }`}
                    >
                      {u.status === "Blocked" ? <CheckCircle2 size={14} /> : <Ban size={14} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
