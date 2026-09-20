// Mock data for the Admin Dashboard.
// Swap these for real API calls once the backend endpoints exist.
// All money fields are raw numbers in rupees; format with formatINR().

export const STATS = [
  { id: "revenue", label: "Total revenue", value: 845600, isCurrency: true, delta: "+12.5%", trend: "up", note: "from last month" },
  { id: "orders", label: "Total orders", value: 1248, isCurrency: false, delta: "+8.2%", trend: "up", note: "from last month" },
  { id: "artists", label: "Total artists", value: 356, isCurrency: false, delta: "+14", trend: "up", note: "new this month" },
  { id: "artworks", label: "Total artworks", value: 2840, isCurrency: false, delta: "+126", trend: "up", note: "added this month" },
  { id: "pending", label: "Pending orders", value: 48, isCurrency: false, delta: "Requires attention", trend: "down", note: "" },
  { id: "custom", label: "Custom art requests", value: 76, isCurrency: false, delta: "23 pending", trend: "down", note: "" },
];

export const REVENUE_SERIES = [
  { month: "Jan", revenue: 42000, orders: 88, artists: 210 },
  { month: "Feb", revenue: 51000, orders: 96, artists: 218 },
  { month: "Mar", revenue: 48000, orders: 91, artists: 225 },
  { month: "Apr", revenue: 63000, orders: 112, artists: 241 },
  { month: "May", revenue: 72000, orders: 128, artists: 256 },
  { month: "Jun", revenue: 68000, orders: 121, artists: 268 },
  { month: "Jul", revenue: 81000, orders: 139, artists: 279 },
  { month: "Aug", revenue: 75000, orders: 132, artists: 291 },
  { month: "Sep", revenue: 89000, orders: 151, artists: 305 },
  { month: "Oct", revenue: 96000, orders: 163, artists: 318 },
  { month: "Nov", revenue: 105000, orders: 178, artists: 334 },
  { month: "Dec", revenue: 118000, orders: 196, artists: 356 },
];

export const CATEGORY_MIX = [
  { label: "Paintings", value: 35, color: "#9F5639" },
  { label: "Digital Art", value: 20, color: "#C98A68" },
  { label: "Sculptures", value: 18, color: "#A28F7D" },
  { label: "Photography", value: 12, color: "#D9C7B2" },
  { label: "Abstract Art", value: 10, color: "#736153" },
  { label: "Other", value: 5, color: "#E8E1DB" },
];

export const RECENT_ORDERS = [
  { id: "ORD-10245", buyer: "Priya Sharma", piece: "Golden Silence", artist: "Aarav Mehta", amount: 18500, status: "Completed", date: "18 Sep 2026" },
  { id: "ORD-10244", buyer: "Rahul Kapoor", piece: "Monsoon Reverie", artist: "Riya Sharma", amount: 32400, status: "Processing", date: "18 Sep 2026" },
  { id: "ORD-10243", buyer: "Sneha Iyer", piece: "Bronze Whisper", artist: "Kabir Verma", amount: 64200, status: "Pending", date: "17 Sep 2026" },
  { id: "ORD-10242", buyer: "Vikram Nair", piece: "City in Ochre", artist: "Ananya Kapoor", amount: 21800, status: "Completed", date: "17 Sep 2026" },
  { id: "ORD-10241", buyer: "Ishaan Joshi", piece: "Terracotta Dream", artist: "Meera Iyer", amount: 15600, status: "Cancelled", date: "16 Sep 2026" },
  { id: "ORD-10240", buyer: "Ananya Rao", piece: "Still Water Study", artist: "Aarav Mehta", amount: 27900, status: "Completed", date: "16 Sep 2026" },
  { id: "ORD-10239", buyer: "Kunal Bose", piece: "Marble Repose", artist: "Kabir Verma", amount: 98000, status: "Processing", date: "15 Sep 2026" },
  { id: "ORD-10238", buyer: "Divya Menon", piece: "Ink and Rust", artist: "Riya Sharma", amount: 12400, status: "Completed", date: "15 Sep 2026" },
];

export const TOP_ARTISTS = [
  { id: "ART-1", name: "Aarav Mehta", category: "Paintings", artworks: 42, sales: 612000, rating: 4.9, followers: 3200 },
  { id: "ART-2", name: "Riya Sharma", category: "Digital Art", artworks: 35, sales: 498000, rating: 4.8, followers: 2750 },
  { id: "ART-3", name: "Kabir Verma", category: "Sculpture", artworks: 21, sales: 741000, rating: 4.9, followers: 1980 },
  { id: "ART-4", name: "Ananya Kapoor", category: "Abstract Art", artworks: 29, sales: 356000, rating: 4.7, followers: 2140 },
  { id: "ART-5", name: "Meera Iyer", category: "Photography", artworks: 18, sales: 214000, rating: 4.6, followers: 1520 },
];

export const RECENT_ARTWORKS = [
  { id: "AW-1", title: "Golden Silence", artist: "Aarav Mehta", category: "Painting", medium: "Acrylic on Canvas", price: 18500, uploaded: "18 Sep 2026", status: "Approved", color: "#C98A68" },
  { id: "AW-2", title: "Monsoon Reverie", artist: "Riya Sharma", category: "Digital Art", medium: "Digital Print", price: 32400, uploaded: "17 Sep 2026", status: "Approved", color: "#9F5639" },
  { id: "AW-3", title: "Bronze Whisper", artist: "Kabir Verma", category: "Sculpture", medium: "Cast Bronze", price: 64200, uploaded: "17 Sep 2026", status: "Pending", color: "#A28F7D" },
  { id: "AW-4", title: "City in Ochre", artist: "Ananya Kapoor", category: "Abstract Art", medium: "Oil on Canvas", price: 21800, uploaded: "16 Sep 2026", status: "Approved", color: "#D9C7B2" },
  { id: "AW-5", title: "Still Water Study", artist: "Meera Iyer", category: "Photography", medium: "Archival Print", price: 15600, uploaded: "16 Sep 2026", status: "Pending", color: "#736153" },
  { id: "AW-6", title: "Ink and Rust", artist: "Riya Sharma", category: "Digital Art", medium: "Mixed Media", price: 12400, uploaded: "15 Sep 2026", status: "Rejected", color: "#E8E1DB" },
];

export const ARTISTS = [
  { id: "ART-1", name: "Aarav Mehta", specialty: "Paintings", location: "Jaipur, IN", artworks: 42, sales: 612000, rating: 4.9, verified: true, status: "Active" },
  { id: "ART-2", name: "Riya Sharma", specialty: "Digital Art", location: "Bengaluru, IN", artworks: 35, sales: 498000, rating: 4.8, verified: true, status: "Active" },
  { id: "ART-3", name: "Kabir Verma", specialty: "Sculpture", location: "Udaipur, IN", artworks: 21, sales: 741000, rating: 4.9, verified: true, status: "Active" },
  { id: "ART-4", name: "Ananya Kapoor", specialty: "Abstract Art", location: "Delhi, IN", artworks: 29, sales: 356000, rating: 4.7, verified: true, status: "Active" },
  { id: "ART-5", name: "Meera Iyer", specialty: "Photography", location: "Kochi, IN", artworks: 18, sales: 214000, rating: 4.6, verified: false, status: "Active" },
  { id: "ART-6", name: "Devika Rao", specialty: "Paintings", location: "Pune, IN", artworks: 9, sales: 96500, rating: 4.4, verified: false, status: "Under review" },
  { id: "ART-7", name: "Farhan Ali", specialty: "Sculpture", location: "Lucknow, IN", artworks: 6, sales: 58200, rating: 4.2, verified: false, status: "Suspended" },
];

export const ARTWORKS = [
  { id: "AW-1", title: "Golden Silence", artist: "Aarav Mehta", category: "Painting", medium: "Acrylic on Canvas", price: 18500, stock: "1 of 1", status: "Approved", color: "#C98A68" },
  { id: "AW-2", title: "Monsoon Reverie", artist: "Riya Sharma", category: "Digital Art", medium: "Digital Print", price: 32400, stock: "3 of 5", status: "Approved", color: "#9F5639" },
  { id: "AW-3", title: "Bronze Whisper", artist: "Kabir Verma", category: "Sculpture", medium: "Cast Bronze", price: 64200, stock: "1 of 1", status: "Pending", color: "#A28F7D" },
  { id: "AW-4", title: "City in Ochre", artist: "Ananya Kapoor", category: "Abstract Art", medium: "Oil on Canvas", price: 21800, stock: "1 of 1", status: "Approved", color: "#D9C7B2" },
  { id: "AW-5", title: "Still Water Study", artist: "Meera Iyer", category: "Photography", medium: "Archival Print", price: 15600, stock: "5 of 10", status: "Pending", color: "#736153" },
  { id: "AW-6", title: "Ink and Rust", artist: "Riya Sharma", category: "Digital Art", medium: "Mixed Media", price: 12400, stock: "1 of 1", status: "Rejected", color: "#E8E1DB" },
  { id: "AW-7", title: "Terracotta Dream", artist: "Meera Iyer", category: "Sculpture", medium: "Terracotta", price: 27500, stock: "1 of 1", status: "Approved", color: "#C98A68" },
  { id: "AW-8", title: "Marble Repose", artist: "Kabir Verma", category: "Sculpture", medium: "White Marble", price: 98000, stock: "1 of 1", status: "Approved", color: "#9F5639" },
];

export const SCULPTURES = [
  { id: "SC-1", title: "Bronze Whisper", artist: "Kabir Verma", material: "Cast Bronze", height: "42 cm", price: 64200, status: "Pending", color: "#A28F7D" },
  { id: "SC-2", title: "Marble Repose", artist: "Kabir Verma", material: "White Marble", height: "58 cm", price: 98000, status: "Approved", color: "#9F5639" },
  { id: "SC-3", title: "Terracotta Dream", artist: "Meera Iyer", material: "Terracotta", height: "30 cm", price: 27500, status: "Approved", color: "#C98A68" },
  { id: "SC-4", title: "Standing Figure III", artist: "Farhan Ali", material: "Welded Steel", height: "76 cm", price: 112000, status: "Approved", color: "#736153" },
  { id: "SC-5", title: "Clay Vessel Study", artist: "Devika Rao", material: "Stoneware", height: "22 cm", price: 18900, status: "In review", color: "#D9C7B2" },
];

export const COLLECTIONS = [
  { id: "COL-1", name: "Modern Indian Expressions", curator: "Aarav Mehta", artworks: 24, artists: 9, status: "Published", color: "#9F5639" },
  { id: "COL-2", name: "Digital Dreams", curator: "Riya Sharma", artworks: 18, artists: 6, status: "Published", color: "#C98A68" },
  { id: "COL-3", name: "Sculptural Stories", curator: "Kabir Verma", artworks: 12, artists: 5, status: "Draft", color: "#A28F7D" },
  { id: "COL-4", name: "Masters of Portraiture", curator: "Ananya Kapoor", artworks: 15, artists: 7, status: "Published", color: "#736153" },
  { id: "COL-5", name: "Nature in Watercolor", curator: "Meera Iyer", artworks: 20, artists: 8, status: "Draft", color: "#D9C7B2" },
];

export const CUSTOM_REQUESTS = [
  { id: "CR-501", customer: "Priya Sharma", type: "Portrait Commission", artist: "Aarav Mehta", budget: 45000, deadline: "05 Oct 2026", requested: "18 Sep 2026", status: "New" },
  { id: "CR-500", customer: "Rahul Kapoor", type: "Custom Sculpture", artist: "Kabir Verma", budget: 120000, deadline: "20 Oct 2026", requested: "17 Sep 2026", status: "Reviewing" },
  { id: "CR-499", customer: "Sneha Iyer", type: "Digital Illustration", artist: "Riya Sharma", budget: 22000, deadline: "28 Sep 2026", requested: "16 Sep 2026", status: "Accepted" },
  { id: "CR-498", customer: "Vikram Nair", type: "Abstract Canvas", artist: "Ananya Kapoor", budget: 38000, deadline: "12 Oct 2026", requested: "14 Sep 2026", status: "In Progress" },
  { id: "CR-497", customer: "Ishaan Joshi", type: "Family Portrait", artist: "Aarav Mehta", budget: 52000, deadline: "01 Oct 2026", requested: "10 Sep 2026", status: "Completed" },
  { id: "CR-496", customer: "Divya Menon", type: "Pet Portrait", artist: "Devika Rao", budget: 15000, deadline: "22 Sep 2026", requested: "08 Sep 2026", status: "Rejected" },
];

export const USERS = [
  { id: "USR-1", name: "Priya Sharma", email: "priya.sharma@example.com", orders: 6, wishlist: 4, spend: 148200, joined: "Jan 2025", status: "Active" },
  { id: "USR-2", name: "Rahul Kapoor", email: "rahul.kapoor@example.com", orders: 3, wishlist: 2, spend: 96400, joined: "Mar 2025", status: "Active" },
  { id: "USR-3", name: "Sneha Iyer", email: "sneha.iyer@example.com", orders: 9, wishlist: 6, spend: 264500, joined: "Aug 2024", status: "Active" },
  { id: "USR-4", name: "Vikram Nair", email: "vikram.nair@example.com", orders: 1, wishlist: 3, spend: 21800, joined: "Jun 2025", status: "Active" },
  { id: "USR-5", name: "Ishaan Joshi", email: "ishaan.joshi@example.com", orders: 2, wishlist: 1, spend: 15600, joined: "Jul 2025", status: "Blocked" },
];

export const REVIEWS = [
  { id: "REV-1", customer: "Priya Sharma", piece: "Golden Silence", artist: "Aarav Mehta", rating: 5, review: "Beautifully packed and even better in person.", date: "18 Sep 2026", status: "Published" },
  { id: "REV-2", customer: "Rahul Kapoor", piece: "Monsoon Reverie", artist: "Riya Sharma", rating: 4, review: "Great print quality, shipping took a little long.", date: "17 Sep 2026", status: "Published" },
  { id: "REV-3", customer: "Sneha Iyer", piece: "Bronze Whisper", artist: "Kabir Verma", rating: 5, review: "Stunning craftsmanship, worth every rupee.", date: "16 Sep 2026", status: "Pending" },
  { id: "REV-4", customer: "Kunal Bose", piece: "Marble Repose", artist: "Kabir Verma", rating: 2, review: "Piece arrived with a small chip on the base.", date: "15 Sep 2026", status: "Hidden" },
];

export const PAYMENTS = [
  { id: "PAY-901", artist: "Aarav Mehta", order: "ORD-10245", amount: 18500, method: "Bank transfer", date: "18 Sep 2026", status: "Paid" },
  { id: "PAY-900", artist: "Kabir Verma", order: "ORD-10239", amount: 98000, method: "Bank transfer", date: "17 Sep 2026", status: "Processing" },
  { id: "PAY-899", artist: "Riya Sharma", order: "ORD-10244", amount: 32400, method: "UPI", date: "17 Sep 2026", status: "Paid" },
  { id: "PAY-898", artist: "Ananya Kapoor", order: "ORD-10242", amount: 21800, method: "UPI", date: "16 Sep 2026", status: "Paid" },
  { id: "PAY-897", artist: "Meera Iyer", order: "ORD-10241", amount: 15600, method: "Bank transfer", date: "16 Sep 2026", status: "On hold" },
];

export const NOTIFICATIONS = [
  { id: 1, text: "New artist registration: Devika Rao", time: "12 min ago", unread: true },
  { id: 2, text: "New artwork submitted: Still Water Study", time: "45 min ago", unread: true },
  { id: 3, text: "New order ORD-10245 placed", time: "1 hr ago", unread: true },
  { id: 4, text: "Custom art request from Rahul Kapoor", time: "3 hr ago", unread: false },
  { id: 5, text: "Payment received for ORD-10239", time: "5 hr ago", unread: false },
  { id: 6, text: "New review on Golden Silence", time: "Yesterday", unread: false },
];

export const MESSAGES = [
  { id: "MSG-901", from: "Aarav Mehta", role: "Artist", subject: "Question about payout schedule", preview: "Hi team, checking when the payout for Golden Silence will reflect in my account...", time: "10:42 AM", unread: true },
  { id: "MSG-900", from: "Priya Sharma", role: "Buyer", subject: "Delay in shipping for ORD-10245", preview: "The order page still shows processing, could you confirm the expected delivery date...", time: "9:15 AM", unread: true },
  { id: "MSG-899", from: "Meera Iyer", role: "Artist", subject: "Resubmitting Still Water Study", preview: "Uploaded better lighting for the piece under review, let me know if anything else is needed...", time: "Yesterday", unread: false },
];
