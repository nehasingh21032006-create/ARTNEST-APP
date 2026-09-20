// Formats a plain number as Indian Rupees using the Indian digit-grouping
// convention (lakh/crore commas), e.g. formatINR(4826000) -> "₹48,26,000"
export function formatINR(amount, { decimals = 0 } = {}) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(amount);
}

// Compact form for chart axes etc: 4826000 -> "₹48.3L", 120000 -> "₹1.2L"
export function formatINRCompact(amount) {
  if (amount >= 1_00_00_000) return `₹${(amount / 1_00_00_000).toFixed(1)}Cr`;
  if (amount >= 1_00_000) return `₹${(amount / 1_00_000).toFixed(1)}L`;
  if (amount >= 1_000) return `₹${(amount / 1_000).toFixed(0)}k`;
  return `₹${amount}`;
}
