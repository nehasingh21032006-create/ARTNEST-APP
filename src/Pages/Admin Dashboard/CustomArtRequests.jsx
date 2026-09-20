import React, { useMemo, useState } from "react";
import SearchBar from "../../Components/Admin/SearchBar";
import FilterSelect from "../../Components/Admin/FilterSelect";
import StatusBadge from "../../Components/Admin/StatusBadge";
import { CUSTOM_REQUESTS, ARTISTS } from "./adminData";
import { formatINR } from "./format";

const STATUSES = ["All statuses", "New", "Reviewing", "Accepted", "In Progress", "Completed", "Rejected"];

export default function CustomArtRequests() {
  const [requests, setRequests] = useState(CUSTOM_REQUESTS);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(STATUSES[0]);

  const filtered = useMemo(() => {
    return requests.filter((r) => {
      if (status !== STATUSES[0] && r.status !== status) return false;
      return r.customer.toLowerCase().includes(search.toLowerCase()) || r.id.toLowerCase().includes(search.toLowerCase());
    });
  }, [requests, search, status]);

  function assign(id, artist) {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, artist, status: r.status === "New" ? "Reviewing" : r.status } : r)));
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2.5">
        <SearchBar value={search} onChange={setSearch} placeholder="Search requests…" className="flex-1 min-w-[220px]" />
        <FilterSelect value={status} onChange={setStatus} options={STATUSES} label="Status" />
      </div>

      <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-x-auto">
        <table className="w-full text-left min-w-[900px]">
          <thead>
            <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)]">
              <th className="px-5 py-3 font-medium">Request</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Assigned artist</th>
              <th className="px-5 py-3 font-medium">Budget</th>
              <th className="px-5 py-3 font-medium">Deadline</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-[var(--color-outline)]/70 hover:bg-[var(--color-section)]/60">
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)]">{r.id}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{r.customer}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{r.type}</td>
                <td className="px-5 py-3">
                  <select
                    value={r.artist}
                    onChange={(e) => assign(r.id, e.target.value)}
                    className="h-8 rounded-full border border-[var(--color-outline)] bg-[var(--color-canvas)] px-2.5 text-[12.5px] text-[var(--color-neutral)] focus:outline-none"
                  >
                    {ARTISTS.map((a) => (
                      <option key={a.id} value={a.name}>{a.name}</option>
                    ))}
                  </select>
                </td>
                <td className="px-5 py-3 text-[13px] font-medium text-[var(--color-neutral)]">{formatINR(r.budget)}</td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)] whitespace-nowrap">{r.deadline}</td>
                <td className="px-5 py-3"><StatusBadge status={r.status} /></td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-8 text-center text-[13px] text-[var(--color-secondary)]">
                  No requests match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
