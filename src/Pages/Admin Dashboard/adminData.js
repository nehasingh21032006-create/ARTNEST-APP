// Mock data for the Admin Dashboard.
// Swap these for real API calls once the backend endpoints exist —
// the shapes below are what every Admin component expects.

export const STATS = [
  {
    id: "revenue",
    label: "Revenue this month",
    value: "$48,260",
    delta: "+12.4%",
    trend: "up",
    note: "vs. $42,930 last month",
  },
  {
    id: "orders",
    label: "Orders placed",
    value: "312",
    delta: "+6.1%",
    trend: "up",
    note: "vs. 294 last month",
  },
  {
    id: "artists",
    label: "Active artists",
    value: "86",
    delta: "+3",
    trend: "up",
    note: "5 joined this week",
  },
  {
    id: "approvals",
    label: "Awaiting approval",
    value: "9",
    delta: "-4",
    trend: "down",
    note: "listings in review queue",
  },
];

export const REVENUE_TREND = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  values: [29800, 33150, 31200, 38460, 42930, 48260],
};

export const CATEGORY_MIX = [
  { label: "Paintings", value: 46, color: "#9F5639" },
  { label: "Sculpture", value: 24, color: "#C98A68" },
  { label: "Prints", value: 18, color: "#A28F7D" },
  { label: "Ceramics", value: 12, color: "#D9C7B2" },
];

export const RECENT_ORDERS = [
  {
    id: "AN-3391",
    buyer: "Priya Nair",
    piece: "Low Tide, Kochi",
    artist: "Rohan Verma",
    amount: "$1,240",
    status: "Fulfilled",
  },
  {
    id: "AN-3390",
    buyer: "Marcus Webb",
    piece: "Standing Figure III",
    artist: "Elena Sato",
    amount: "$3,600",
    status: "Processing",
  },
  {
    id: "AN-3389",
    buyer: "Amara Diallo",
    piece: "Terracotta Study No. 4",
    artist: "Femi Okoro",
    amount: "$860",
    status: "Fulfilled",
  },
  {
    id: "AN-3388",
    buyer: "Liu Wen",
    piece: "Quiet Harbour",
    artist: "Rohan Verma",
    amount: "$2,150",
    status: "Pending payment",
  },
  {
    id: "AN-3387",
    buyer: "Diego Ramos",
    piece: "Woven Clay Vessel",
    artist: "Ines Torres",
    amount: "$540",
    status: "Fulfilled",
  },
  {
    id: "AN-3386",
    buyer: "Sarah Klein",
    piece: "Nocturne in Ochre",
    artist: "Elena Sato",
    amount: "$1,980",
    status: "Processing",
  },
];

export const PENDING_APPROVALS = [
  {
    id: "SUB-2214",
    title: "Marble Torso, Unfinished",
    artist: "Ines Torres",
    medium: "Sculpture · Marble",
    submitted: "2 hours ago",
  },
  {
    id: "SUB-2213",
    title: "Fields After Rain",
    artist: "Noor Hassan",
    medium: "Painting · Oil on linen",
    submitted: "5 hours ago",
  },
  {
    id: "SUB-2212",
    title: "Vessel Series, No. 9",
    artist: "Femi Okoro",
    medium: "Ceramics · Stoneware",
    submitted: "Yesterday",
  },
  {
    id: "SUB-2211",
    title: "Study in Grey and Rust",
    artist: "Elena Sato",
    medium: "Print · Etching",
    submitted: "Yesterday",
  },
];

export const TOP_ARTISTS = [
  { name: "Rohan Verma", initials: "RV", sales: "$14,320", pieces: 21, rating: 4.9 },
  { name: "Elena Sato", initials: "ES", sales: "$11,840", pieces: 17, rating: 4.8 },
  { name: "Femi Okoro", initials: "FO", sales: "$8,960", pieces: 14, rating: 4.7 },
  { name: "Ines Torres", initials: "IT", sales: "$7,410", pieces: 11, rating: 4.9 },
];
