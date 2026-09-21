// Mock data for the Artist Dashboard — scoped to the signed-in artist
// (here, "Aarav Mehta"). Swap for real API calls once endpoints exist.
// Money fields are raw numbers in rupees; format with formatINR().

export const ARTIST_PROFILE = {
  name: "Aarav Mehta",
  initials: "AM",
  specialty: "Paintings",
  location: "Jaipur, IN",
  rating: 4.9,
  followers: 3200,
  verified: true,
  joined: "Jan 2024",
  bio: "Contemporary painter working primarily in acrylic and oil, drawing on Rajasthan's light and colour.",
  email: "aarav.mehta@artnest.com",
  phone: "+91 98765 12345",
  instagram: "instagram.com/aarav.mehta.art",
};

export const STATS = [
  { id: "earnings", label: "Total earnings", value: 612000, isCurrency: true, delta: "+9.8%", trend: "up", note: "from last month" },
  { id: "orders", label: "Orders this month", value: 14, isCurrency: false, delta: "+3", trend: "up", note: "vs last month" },
  { id: "artworks", label: "Artworks listed", value: 42, isCurrency: false, delta: "+4", trend: "up", note: "this month" },
  { id: "pending", label: "Awaiting approval", value: 2, isCurrency: false, delta: "In review", trend: "down", note: "" },
];

export const EARNINGS_SERIES = [
  { month: "Apr", earnings: 38000, orders: 6 },
  { month: "May", earnings: 46500, orders: 8 },
  { month: "Jun", earnings: 41000, orders: 7 },
  { month: "Jul", earnings: 58200, orders: 11 },
  { month: "Aug", earnings: 61800, orders: 12 },
  { month: "Sep", earnings: 67900, orders: 14 },
];

export const MY_ARTWORKS = [
  { id: "AW-1", title: "Golden Silence", category: "Painting", medium: "Acrylic on Canvas", price: 18500, stock: "1 of 1", status: "Approved", color: "#C98A68" },
  { id: "AW-2", title: "Still Water Study", category: "Painting", medium: "Oil on Canvas", price: 27900, stock: "1 of 1", status: "Approved", color: "#9F5639" },
  { id: "AW-3", title: "Backwater Nocturne", category: "Painting", medium: "Acrylic on Canvas", price: 96000, stock: "1 of 1", status: "Pending", color: "#A28F7D" },
  { id: "AW-4", title: "Desert Bloom", category: "Painting", medium: "Watercolour", price: 22400, stock: "1 of 1", status: "Approved", color: "#D9C7B2" },
  { id: "AW-5", title: "Portrait in Ochre", category: "Painting", medium: "Oil on Linen", price: 41200, stock: "1 of 1", status: "Pending", color: "#736153" },
  { id: "AW-6", title: "Fading Bazaar", category: "Painting", medium: "Acrylic on Canvas", price: 15600, stock: "1 of 1", status: "Rejected", color: "#E8E1DB" },
];

export const MY_ORDERS = [
  { id: "ORD-10245", buyer: "Priya Sharma", piece: "Golden Silence", amount: 18500, status: "Completed", date: "18 Sep 2026" },
  { id: "ORD-10240", buyer: "Ananya Rao", piece: "Still Water Study", amount: 27900, status: "Completed", date: "16 Sep 2026" },
  { id: "ORD-10231", buyer: "Kunal Bose", piece: "Desert Bloom", amount: 22400, status: "Processing", date: "12 Sep 2026" },
  { id: "ORD-10219", buyer: "Ishaan Joshi", piece: "Golden Silence", amount: 18500, status: "Pending", date: "05 Sep 2026" },
  { id: "ORD-10203", buyer: "Divya Menon", piece: "Fading Bazaar", amount: 15600, status: "Cancelled", date: "28 Aug 2026" },
];

export const MY_CUSTOM_REQUESTS = [
  { id: "CR-501", customer: "Priya Sharma", type: "Portrait Commission", budget: 45000, deadline: "05 Oct 2026", requested: "18 Sep 2026", status: "New" },
  { id: "CR-497", customer: "Ishaan Joshi", type: "Family Portrait", budget: 52000, deadline: "01 Oct 2026", requested: "10 Sep 2026", status: "In Progress" },
  { id: "CR-489", customer: "Rohit Malhotra", type: "Landscape Commission", budget: 34000, deadline: "15 Sep 2026", requested: "30 Aug 2026", status: "Completed" },
];

export const PAYOUTS = [
  { id: "PAY-901", order: "ORD-10245", amount: 18500, method: "Bank transfer", date: "18 Sep 2026", status: "Paid" },
  { id: "PAY-890", order: "ORD-10240", amount: 27900, method: "Bank transfer", date: "16 Sep 2026", status: "Paid" },
  { id: "PAY-881", order: "ORD-10231", amount: 22400, method: "UPI", date: "12 Sep 2026", status: "Processing" },
  { id: "PAY-870", order: "ORD-10219", amount: 18500, method: "Bank transfer", date: "05 Sep 2026", status: "On hold" },
];

export const MY_REVIEWS = [
  { id: "REV-1", customer: "Priya Sharma", piece: "Golden Silence", rating: 5, review: "Beautifully packed and even better in person.", date: "18 Sep 2026" },
  { id: "REV-2", customer: "Ananya Rao", piece: "Still Water Study", rating: 5, review: "Colours are richer than the photos showed. Loved it.", date: "16 Sep 2026" },
  { id: "REV-3", customer: "Kunal Bose", piece: "Desert Bloom", rating: 4, review: "Lovely piece, shipping took a little longer than expected.", date: "13 Sep 2026" },
];

export const MESSAGES = [
  {
    id: "MSG-1",
    from: "ArtNest Team",
    role: "Gallery admin",
    subject: "Backwater Nocturne is in review",
    preview: "Thanks for the submission — our curators are reviewing lighting on the reference photos...",
    time: "2 hr ago",
    unread: true,
  },
  {
    id: "MSG-2",
    from: "Priya Sharma",
    role: "Buyer",
    subject: "Question about Golden Silence framing",
    preview: "Does the piece come framed, or should I get it framed locally after delivery...",
    time: "Yesterday",
    unread: true,
  },
  {
    id: "MSG-3",
    from: "ArtNest Team",
    role: "Gallery admin",
    subject: "Payout for ORD-10240 processed",
    preview: "Your payout of ₹27,900 has been sent to your linked bank account...",
    time: "2 days ago",
    unread: false,
  },
];
