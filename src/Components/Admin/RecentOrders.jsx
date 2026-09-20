import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import { formatINR } from "../../Pages/Admin Dashboard/format";

export default function RecentOrders({ orders }) {
  return (
    <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <h2 className="font-['Playfair_Display'] text-[18px] text-[var(--color-neutral)]">Recent orders</h2>
        <Link
          to="/admin/orders"
          className="text-[13px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
        >
          View all →
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[720px]">
          <thead>
            <tr className="text-[11px] uppercase tracking-[0.06em] text-[var(--color-secondary)] border-t border-[var(--color-outline)]">
              <th className="px-5 py-2.5 font-medium">Order</th>
              <th className="px-5 py-2.5 font-medium">Artwork</th>
              <th className="px-5 py-2.5 font-medium">Customer</th>
              <th className="px-5 py-2.5 font-medium">Amount</th>
              <th className="px-5 py-2.5 font-medium">Date</th>
              <th className="px-5 py-2.5 font-medium">Status</th>
              <th className="px-5 py-2.5 font-medium"></th>
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
                  {formatINR(order.amount)}
                </td>
                <td className="px-5 py-3 text-[13px] text-[var(--color-secondary)] whitespace-nowrap">
                  {order.date}
                </td>
                <td className="px-5 py-3">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-5 py-3">
                  <Link
                    to="/admin/orders"
                    className="text-[12px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] whitespace-nowrap"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
