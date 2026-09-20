import React from "react";

// Shared status-pill styling for every admin table/card. Keep this list in
// sync whenever a new status string is introduced across the admin pages.
const STYLES = {
  // positive
  Completed: "text-[#4C6B3F] bg-[#E7EEDD]",
  Approved: "text-[#4C6B3F] bg-[#E7EEDD]",
  Published: "text-[#4C6B3F] bg-[#E7EEDD]",
  Active: "text-[#4C6B3F] bg-[#E7EEDD]",
  Paid: "text-[#4C6B3F] bg-[#E7EEDD]",
  Accepted: "text-[#4C6B3F] bg-[#E7EEDD]",
  // in-progress / neutral
  Processing: "text-[#8A5A22] bg-[#F6E7D0]",
  Pending: "text-[#8A5A22] bg-[#F6E7D0]",
  "Pending payment": "text-[#8A5A22] bg-[#F6E7D0]",
  "In review": "text-[#8A5A22] bg-[#F6E7D0]",
  "Under review": "text-[#8A5A22] bg-[#F6E7D0]",
  Reviewing: "text-[#8A5A22] bg-[#F6E7D0]",
  "In Progress": "text-[#8A5A22] bg-[#F6E7D0]",
  New: "text-[#8A5A22] bg-[#F6E7D0]",
  Draft: "text-[#6B6357] bg-[#EFE9E1]",
  "On hold": "text-[#8A5A22] bg-[#F6E7D0]",
  // negative
  Cancelled: "text-[#9B3B2E] bg-[#F6DFDA]",
  Rejected: "text-[#9B3B2E] bg-[#F6DFDA]",
  Suspended: "text-[#9B3B2E] bg-[#F6DFDA]",
  Blocked: "text-[#9B3B2E] bg-[#F6DFDA]",
  Hidden: "text-[#9B3B2E] bg-[#F6DFDA]",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
        STYLES[status] ?? "text-[var(--color-secondary)] bg-[var(--color-section)]"
      }`}
    >
      {status}
    </span>
  );
}
