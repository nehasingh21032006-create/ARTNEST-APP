import React, { useState } from "react";
import { MESSAGES } from "./adminData";

export default function Messages() {
  const [messages, setMessages] = useState(MESSAGES);
  const [activeId, setActiveId] = useState(MESSAGES[0]?.id);
  const active = messages.find((m) => m.id === activeId);

  function open(id) {
    setActiveId(id);
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, unread: false } : m)));
  }

  return (
    <div className="bg-[var(--color-elevated)] border border-[var(--color-outline)] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[300px_1fr]">
      <ul className="border-b lg:border-b-0 lg:border-r border-[var(--color-outline)] max-h-[420px] lg:max-h-[560px] overflow-y-auto">
        {messages.map((m) => (
          <li key={m.id}>
            <button
              onClick={() => open(m.id)}
              className={`w-full text-left px-4 py-3.5 border-b border-[var(--color-outline)]/70 transition-colors ${
                m.id === activeId ? "bg-[var(--color-section)]" : "hover:bg-[var(--color-section)]/60"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-medium text-[var(--color-neutral)] truncate">{m.from}</p>
                <span className="text-[11px] text-[var(--color-secondary)] shrink-0">{m.time}</span>
              </div>
              <p className="text-[12px] text-[var(--color-secondary)] mt-0.5">{m.role}</p>
              <p className={`text-[12.5px] mt-1 truncate ${m.unread ? "font-semibold text-[var(--color-neutral)]" : "text-[var(--color-secondary)]"}`}>
                {m.subject}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <div className="p-6">
        {active ? (
          <div>
            <h2 className="font-['Playfair_Display'] text-[19px] text-[var(--color-neutral)]">{active.subject}</h2>
            <p className="text-[12.5px] text-[var(--color-secondary)] mt-1">
              {active.from} · {active.role} · {active.time}
            </p>
            <p className="text-[13.5px] text-[var(--color-neutral)] leading-relaxed mt-4">{active.preview}</p>
            <textarea
              rows={4}
              placeholder="Write a reply…"
              className="mt-6 w-full rounded-lg border border-[var(--color-outline)] bg-[var(--color-canvas)] px-3 py-2.5 text-[13px] text-[var(--color-neutral)] focus:outline-none focus:border-[var(--color-primary)]"
            />
            <button className="mt-3 h-10 px-5 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors">
              Send reply
            </button>
          </div>
        ) : (
          <p className="text-[13px] text-[var(--color-secondary)]">Select a conversation.</p>
        )}
      </div>
    </div>
  );
}
