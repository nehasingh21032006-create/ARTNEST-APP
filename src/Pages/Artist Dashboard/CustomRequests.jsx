import React, { useState } from "react";
import StatusBadge from "../../Components/Admin/StatusBadge";
import { MY_CUSTOM_REQUESTS } from "./artistData";
import { formatINR } from "../Admin Dashboard/format";

export default function CustomRequests() {
  const [requests, setRequests] = useState(MY_CUSTOM_REQUESTS);

  function advance(id, status) {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  return (
    <div className="space-y-4">
      {requests.map((r) => (
        <div key={r.id} className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-[13.5px] font-medium text-[var(--color-neutral)]">{r.type}</p>
              <p className="text-[12px] text-[var(--color-secondary)]">For {r.customer} · requested {r.requested}</p>
            </div>
            <StatusBadge status={r.status} />
          </div>
          <div className="mt-3 flex items-center gap-6 text-[12.5px] text-[var(--color-secondary)]">
            <span>Budget: <span className="text-[var(--color-neutral)] font-medium">{formatINR(r.budget)}</span></span>
            <span>Deadline: <span className="text-[var(--color-neutral)] font-medium">{r.deadline}</span></span>
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-[var(--color-outline)] pt-3">
            {r.status === "New" && (
              <>
                <button
                  onClick={() => advance(r.id, "In Progress")}
                  className="h-9 px-4 rounded-full bg-[var(--color-primary)] text-white text-[12.5px] font-medium hover:bg-[var(--color-primary-hover)]"
                >
                  Accept
                </button>
                <button
                  onClick={() => advance(r.id, "Rejected")}
                  className="h-9 px-4 rounded-full border border-[var(--color-outline)] text-[12.5px] font-medium text-[var(--color-neutral)] hover:bg-[var(--color-section)]"
                >
                  Decline
                </button>
              </>
            )}
            {r.status === "In Progress" && (
              <button
                onClick={() => advance(r.id, "Completed")}
                className="h-9 px-4 rounded-full bg-[var(--color-primary)] text-white text-[12.5px] font-medium hover:bg-[var(--color-primary-hover)]"
              >
                Mark completed
              </button>
            )}
          </div>
        </div>
      ))}
      {requests.length === 0 && (
        <p className="text-center text-[13px] text-[var(--color-secondary)] py-8">No custom requests yet.</p>
      )}
    </div>
  );
}
