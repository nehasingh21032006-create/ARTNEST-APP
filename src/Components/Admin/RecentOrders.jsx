import React from "react";

const STATUS_STYLES = {
  Fulfilled: "text-[#4C6B3F] bg-[#E7EEDD]",
  Processing: "text-[#8A5A22] bg-[#F6E7D0]",
  "Pending payment": "text-[#9B3B2E] bg-[#F6DFDA]",
};

export default function RecentOrders({ orders }) {
  return (
    <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">
          Recent orders
        </h2>
        <a
          href="#"
          className="text-[13px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
        >
          View all →
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)] border-t border-[var(--color-outline)]">
              <th className="px-5 py-2.5 font-medium">Order</th>
              <th className="px-5 py-2.5 font-medium">Piece</th>
              <th className="px-5 py-2.5 font-medium">Buyer</th>
              <th className="px-5 py-2.5 font-medium">Amount</th>
              <th className="px-5 py-2.5 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-[var(--color-outline)]/70 hover:bg-[var(--color-section)]/60 transition-colors duration-150"
              >
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)]">{order.id}</td>
                <td className="px-5 py-3">
                  <p className="text-[13px] font-medium text-[var(--color-neutral)]">{order.piece}</p>
                  <p className="text-[12px] text-[var(--color-secondary)]">{order.artist}</p>
                </td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-neutral)]">{order.buyer}</td>
                <td className="px-5 py-3 text-[13px] font-medium text-[var(--color-neutral)]">
                  {order.amount}
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[order.status] ?? ""}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
