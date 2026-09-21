/**
 * ArtNest — Artist Dashboard mock data layer.
 *
 * If/when real APIs exist, replace `loadState` / `persistState` with fetch calls.
 * Every page reads through ArtistDataProvider, so nothing else needs to change.
 */

export const STORAGE_KEY = 'artnest.artist.dashboard.v1';

/* ------------------------------------------------------------------ *
 * Inline placeholder artwork thumbnails (no external requests needed)
 * ------------------------------------------------------------------ */
const SWATCHES = [
  ['#9F5639', '#F6E7D0'],
  ['#A28F7D', '#F1EFE9'],
  ['#362F26', '#FCEFE1'],
  ['#4C6B3F', '#E7EEDD'],
  ['#8A5A22', '#F9F8F5'],
  ['#9B3B2E', '#F6DFDA'],
];

export function artPlaceholder(seed = 0, label = '') {
  const [ink, paper] = SWATCHES[Math.abs(seed) % SWATCHES.length];
  const initials = (label || 'Art')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <rect width="400" height="400" fill="${paper}"/>
    <circle cx="${120 + (seed % 5) * 30}" cy="${150 + (seed % 3) * 40}" r="${70 + (seed % 4) * 12}" fill="${ink}" opacity="0.18"/>
    <path d="M40 320 L150 ${180 + (seed % 5) * 14} L240 300 L320 ${210 + (seed % 3) * 20} L360 320 Z" fill="${ink}" opacity="0.42"/>
    <text x="200" y="215" font-family="Georgia, serif" font-size="92" fill="${ink}" opacity="0.75"
      text-anchor="middle" dominant-baseline="middle">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/* ------------------------------------------------------------------ *
 * Reference lists used by forms and filters
 * ------------------------------------------------------------------ */
export const CATEGORIES = [
  'Painting',
  'Digital Art',
  'Sculpture',
  'Photography',
  'Printmaking',
  'Mixed Media',
];

export const SUBCATEGORIES = {
  Painting: ['Oil', 'Acrylic', 'Watercolour', 'Gouache'],
  'Digital Art': ['Illustration', '3D Render', 'Generative', 'Concept Art'],
  Sculpture: ['Bronze', 'Clay', 'Wood', 'Stone'],
  Photography: ['Portrait', 'Landscape', 'Street', 'Fine Art'],
  Printmaking: ['Etching', 'Linocut', 'Screen Print', 'Lithograph'],
  'Mixed Media': ['Collage', 'Assemblage', 'Textile', 'Resin'],
};

export const MEDIUMS = [
  'Oil on canvas',
  'Acrylic on canvas',
  'Watercolour on paper',
  'Digital print',
  'Bronze cast',
  'Terracotta',
  'Archival pigment print',
  'Mixed media on board',
];

export const STYLES = [
  'Abstract',
  'Realism',
  'Impressionist',
  'Minimal',
  'Folk',
  'Contemporary',
  'Surreal',
];

export const ORIENTATIONS = ['Portrait', 'Landscape', 'Square'];

export const ARTWORK_STATUSES = [
  'Published',
  'Draft',
  'Out of Stock',
  'Pending Approval',
];

export const ORDER_STATUSES = [
  'Pending',
  'Processing',
  'Shipped',
  'Delivered',
  'Cancelled',
];

export const REQUEST_STATUSES = [
  'New',
  'Reviewing',
  'Accepted',
  'In Progress',
  'Completed',
  'Rejected',
];

/* ------------------------------------------------------------------ *
 * Seed data
 * ------------------------------------------------------------------ */
const daysAgo = (n) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(9, 30, 0, 0);
  return d.toISOString();
};

const seedArtworks = [
  {
    id: 'ART-1041',
    title: 'Monsoon Over Kumaon',
    category: 'Painting',
    subcategory: 'Oil',
    medium: 'Oil on canvas',
    style: 'Impressionist',
    tags: ['landscape', 'himalaya', 'rain'],
    description:
      'A wide valley caught in the first hour of rain, painted on location over three mornings.',
    price: 48000,
    discount: 10,
    dimensions: '36 x 48 in',
    weight: '4.2 kg',
    year: 2025,
    material: 'Linen canvas, pine stretcher',
    orientation: 'Landscape',
    quantity: 1,
    availability: 'In Stock',
    shippingAvailable: true,
    shippingPrice: 1200,
    deliveryTime: '7–10 days',
    status: 'Published',
    views: 4820,
    likes: 612,
    sales: 6,
    createdAt: daysAgo(96),
    images: [artPlaceholder(0, 'Monsoon Kumaon')],
  },
  {
    id: 'ART-1042',
    title: 'Brass Hour',
    category: 'Sculpture',
    subcategory: 'Bronze',
    medium: 'Bronze cast',
    style: 'Contemporary',
    tags: ['figure', 'bronze'],
    description: 'Lost-wax cast figure, hand-finished with a warm patina.',
    price: 92000,
    discount: 0,
    dimensions: '14 x 9 x 9 in',
    weight: '11 kg',
    year: 2024,
    material: 'Bronze, teak base',
    orientation: 'Portrait',
    quantity: 2,
    availability: 'In Stock',
    shippingAvailable: true,
    shippingPrice: 2600,
    deliveryTime: '10–14 days',
    status: 'Published',
    views: 3140,
    likes: 388,
    sales: 3,
    createdAt: daysAgo(74),
    images: [artPlaceholder(1, 'Brass Hour')],
  },
  {
    id: 'ART-1043',
    title: 'Chandni Chowk, 6 AM',
    category: 'Photography',
    subcategory: 'Street',
    medium: 'Archival pigment print',
    style: 'Realism',
    tags: ['delhi', 'street', 'morning'],
    description: 'Edition of 15, printed on cotton rag with a 2-inch border.',
    price: 14500,
    discount: 15,
    dimensions: '18 x 24 in',
    weight: '0.9 kg',
    year: 2026,
    material: 'Hahnemühle cotton rag',
    orientation: 'Landscape',
    quantity: 15,
    availability: 'In Stock',
    shippingAvailable: true,
    shippingPrice: 400,
    deliveryTime: '4–6 days',
    status: 'Published',
    views: 6210,
    likes: 941,
    sales: 11,
    createdAt: daysAgo(51),
    images: [artPlaceholder(2, 'Chandni Chowk')],
  },
  {
    id: 'ART-1044',
    title: 'Indigo Study No. 7',
    category: 'Digital Art',
    subcategory: 'Generative',
    medium: 'Digital print',
    style: 'Abstract',
    tags: ['indigo', 'generative'],
    description: 'Plotted curves layered into an indigo field, printed to order.',
    price: 9800,
    discount: 0,
    dimensions: '20 x 20 in',
    weight: '0.6 kg',
    year: 2026,
    material: 'Giclée on matte paper',
    orientation: 'Square',
    quantity: 30,
    availability: 'In Stock',
    shippingAvailable: true,
    shippingPrice: 350,
    deliveryTime: '3–5 days',
    status: 'Pending Approval',
    views: 1180,
    likes: 143,
    sales: 0,
    createdAt: daysAgo(12),
    images: [artPlaceholder(3, 'Indigo Study')],
  },
  {
    id: 'ART-1045',
    title: 'Terracotta Mother',
    category: 'Sculpture',
    subcategory: 'Clay',
    medium: 'Terracotta',
    style: 'Folk',
    tags: ['terracotta', 'folk'],
    description: 'Hand-coiled and pit-fired in the studio kiln.',
    price: 26000,
    discount: 5,
    dimensions: '11 x 7 x 7 in',
    weight: '3.4 kg',
    year: 2025,
    material: 'Red terracotta',
    orientation: 'Portrait',
    quantity: 0,
    availability: 'Sold Out',
    shippingAvailable: true,
    shippingPrice: 900,
    deliveryTime: '7–9 days',
    status: 'Out of Stock',
    views: 2740,
    likes: 410,
    sales: 4,
    createdAt: daysAgo(140),
    images: [artPlaceholder(4, 'Terracotta Mother')],
  },
  {
    id: 'ART-1046',
    title: 'Letters I Never Sent',
    category: 'Mixed Media',
    subcategory: 'Collage',
    medium: 'Mixed media on board',
    style: 'Surreal',
    tags: ['collage', 'paper'],
    description: 'Vintage postal paper, ink and wax on birch board.',
    price: 31000,
    discount: 0,
    dimensions: '24 x 30 in',
    weight: '2.8 kg',
    year: 2026,
    material: 'Paper, ink, wax, birch',
    orientation: 'Portrait',
    quantity: 1,
    availability: 'In Stock',
    shippingAvailable: false,
    shippingPrice: 0,
    deliveryTime: 'Local pickup only',
    status: 'Draft',
    views: 340,
    likes: 28,
    sales: 0,
    createdAt: daysAgo(5),
    images: [artPlaceholder(5, 'Letters Never Sent')],
  },
  {
    id: 'ART-1047',
    title: 'Salt Flat, Rann',
    category: 'Photography',
    subcategory: 'Landscape',
    medium: 'Archival pigment print',
    style: 'Minimal',
    tags: ['rann', 'white', 'minimal'],
    description: 'Edition of 10. Shot ninety minutes before sunrise.',
    price: 18500,
    discount: 0,
    dimensions: '24 x 36 in',
    weight: '1.1 kg',
    year: 2025,
    material: 'Cotton rag, museum mount',
    orientation: 'Landscape',
    quantity: 10,
    availability: 'In Stock',
    shippingAvailable: true,
    shippingPrice: 500,
    deliveryTime: '4–6 days',
    status: 'Published',
    views: 5090,
    likes: 726,
    sales: 8,
    createdAt: daysAgo(63),
    images: [artPlaceholder(6, 'Salt Flat')],
  },
  {
    id: 'ART-1048',
    title: 'Courtyard in Winter',
    category: 'Painting',
    subcategory: 'Watercolour',
    medium: 'Watercolour on paper',
    style: 'Realism',
    tags: ['architecture', 'winter'],
    description: 'Painted from a haveli courtyard in Shekhawati.',
    price: 21000,
    discount: 8,
    dimensions: '16 x 20 in',
    weight: '0.8 kg',
    year: 2026,
    material: 'Arches 300gsm',
    orientation: 'Portrait',
    quantity: 1,
    availability: 'In Stock',
    shippingAvailable: true,
    shippingPrice: 450,
    deliveryTime: '5–7 days',
    status: 'Published',
    views: 2980,
    likes: 355,
    sales: 5,
    createdAt: daysAgo(38),
    images: [artPlaceholder(7, 'Courtyard Winter')],
  },
];

const seedCustomers = [
  { id: 'CUS-201', name: 'Ananya Rao', email: 'ananya.rao@example.com', city: 'Bengaluru', orders: 4, spent: 148500, lastOrder: daysAgo(3), status: 'Active' },
  { id: 'CUS-202', name: 'Vikram Sethi', email: 'v.sethi@example.com', city: 'Mumbai', orders: 2, spent: 92000, lastOrder: daysAgo(11), status: 'Active' },
  { id: 'CUS-203', name: 'Meera Joshi', email: 'meera.j@example.com', city: 'Pune', orders: 6, spent: 211400, lastOrder: daysAgo(1), status: 'VIP' },
  { id: 'CUS-204', name: 'Rahul Nair', email: 'rahul.nair@example.com', city: 'Kochi', orders: 1, spent: 18500, lastOrder: daysAgo(27), status: 'Active' },
  { id: 'CUS-205', name: 'Sara Qureshi', email: 'sara.q@example.com', city: 'Delhi', orders: 3, spent: 76300, lastOrder: daysAgo(6), status: 'Active' },
  { id: 'CUS-206', name: 'Devika Menon', email: 'devika.m@example.com', city: 'Chennai', orders: 1, spent: 14500, lastOrder: daysAgo(44), status: 'Dormant' },
];

const seedOrders = [
  { id: 'ORD-9051', artworkId: 'ART-1043', customerId: 'CUS-203', quantity: 2, amount: 24650, payment: 'Paid', method: 'UPI', status: 'Delivered', date: daysAgo(1), address: '14 Model Colony, Pune 411016' },
  { id: 'ORD-9050', artworkId: 'ART-1041', customerId: 'CUS-201', quantity: 1, amount: 43200, payment: 'Paid', method: 'Card', status: 'Shipped', date: daysAgo(3), address: '82 Indiranagar, Bengaluru 560038' },
  { id: 'ORD-9049', artworkId: 'ART-1047', customerId: 'CUS-205', quantity: 1, amount: 18500, payment: 'Paid', method: 'Netbanking', status: 'Processing', date: daysAgo(6), address: 'B-4 Hauz Khas, New Delhi 110016' },
  { id: 'ORD-9048', artworkId: 'ART-1042', customerId: 'CUS-202', quantity: 1, amount: 92000, payment: 'Pending', method: 'Bank transfer', status: 'Pending', date: daysAgo(8), address: '7 Bandra West, Mumbai 400050' },
  { id: 'ORD-9047', artworkId: 'ART-1048', customerId: 'CUS-203', quantity: 1, amount: 19320, payment: 'Paid', method: 'UPI', status: 'Delivered', date: daysAgo(14), address: '14 Model Colony, Pune 411016' },
  { id: 'ORD-9046', artworkId: 'ART-1045', customerId: 'CUS-204', quantity: 1, amount: 24700, payment: 'Refunded', method: 'Card', status: 'Cancelled', date: daysAgo(19), address: '22 Panampilly Nagar, Kochi 682036' },
  { id: 'ORD-9045', artworkId: 'ART-1041', customerId: 'CUS-206', quantity: 1, amount: 43200, payment: 'Paid', method: 'Card', status: 'Delivered', date: daysAgo(24), address: '9 Alwarpet, Chennai 600018' },
  { id: 'ORD-9044', artworkId: 'ART-1047', customerId: 'CUS-201', quantity: 1, amount: 18500, payment: 'Paid', method: 'UPI', status: 'Delivered', date: daysAgo(31), address: '82 Indiranagar, Bengaluru 560038' },
  { id: 'ORD-9043', artworkId: 'ART-1043', customerId: 'CUS-205', quantity: 3, amount: 36975, payment: 'Paid', method: 'Card', status: 'Delivered', date: daysAgo(40), address: 'B-4 Hauz Khas, New Delhi 110016' },
  { id: 'ORD-9042', artworkId: 'ART-1042', customerId: 'CUS-203', quantity: 1, amount: 92000, payment: 'Paid', method: 'Netbanking', status: 'Delivered', date: daysAgo(52), address: '14 Model Colony, Pune 411016' },
];

const seedRequests = [
  {
    id: 'REQ-311',
    customerId: 'CUS-201',
    title: 'Family portrait in oil, 30 x 40 in',
    description:
      'Four figures, warm interior light, based on a photograph from our anniversary. Would like the same palette as Monsoon Over Kumaon.',
    budget: 65000,
    deadline: daysAgo(-34),
    date: daysAgo(2),
    status: 'New',
    reference: artPlaceholder(8, 'Family Portrait'),
    proposal: null,
  },
  {
    id: 'REQ-310',
    customerId: 'CUS-203',
    title: 'Two terracotta pieces for a café counter',
    description: 'Matching pair, roughly 10 inches, unglazed. Open to your interpretation.',
    budget: 40000,
    deadline: daysAgo(-52),
    date: daysAgo(7),
    status: 'Reviewing',
    reference: artPlaceholder(9, 'Terracotta Pair'),
    proposal: null,
  },
  {
    id: 'REQ-309',
    customerId: 'CUS-202',
    title: 'Large abstract for office lobby',
    description: 'Roughly 6 x 4 ft, indigo and rust. Installation help needed in Mumbai.',
    budget: 180000,
    deadline: daysAgo(-70),
    date: daysAgo(16),
    status: 'In Progress',
    reference: artPlaceholder(10, 'Lobby Abstract'),
    proposal: { amount: 175000, timeline: '8 weeks', note: 'Two-panel format, delivered stretched.' },
  },
  {
    id: 'REQ-308',
    customerId: 'CUS-205',
    title: 'Wedding invitation illustration',
    description: 'Line illustration of a Delhi rooftop, to be printed on invites.',
    budget: 15000,
    deadline: daysAgo(-9),
    date: daysAgo(29),
    status: 'Completed',
    reference: artPlaceholder(11, 'Wedding Illustration'),
    proposal: { amount: 14000, timeline: '2 weeks', note: 'Includes two revision rounds.' },
  },
  {
    id: 'REQ-307',
    customerId: 'CUS-204',
    title: 'Copy of an existing painting',
    description: 'Would like a near-identical version of a piece by another artist.',
    budget: 22000,
    deadline: daysAgo(-20),
    date: daysAgo(35),
    status: 'Rejected',
    reference: artPlaceholder(12, 'Copy Request'),
    proposal: null,
  },
];

const seedReviews = [
  { id: 'REV-88', customerId: 'CUS-203', artworkId: 'ART-1043', rating: 5, text: 'The print quality is better than the gallery copy I saw. Packed beautifully.', date: daysAgo(2), reply: null },
  { id: 'REV-87', customerId: 'CUS-201', artworkId: 'ART-1041', rating: 5, text: 'It changes completely depending on the light in the room. Worth every rupee.', date: daysAgo(9), reply: 'Thank you Ananya — that valley does the same thing in person.' },
  { id: 'REV-86', customerId: 'CUS-205', artworkId: 'ART-1047', rating: 4, text: 'Gorgeous piece. Shipping took a few days longer than estimated.', date: daysAgo(17), reply: null },
  { id: 'REV-85', customerId: 'CUS-206', artworkId: 'ART-1041', rating: 5, text: 'Bought it as a gift and now I want one for myself.', date: daysAgo(25), reply: null },
  { id: 'REV-84', customerId: 'CUS-202', artworkId: 'ART-1042', rating: 4, text: 'Beautiful patina. The base could be a little heavier.', date: daysAgo(33), reply: 'Noted — I can add a weighted base on request.' },
  { id: 'REV-83', customerId: 'CUS-204', artworkId: 'ART-1045', rating: 3, text: 'Lovely work but smaller than I pictured from the listing photos.', date: daysAgo(48), reply: null },
];

const seedConversations = [
  {
    id: 'CNV-01',
    customerId: 'CUS-203',
    unread: 2,
    messages: [
      { id: 'm1', from: 'customer', text: 'Hi! Is the Chandni Chowk print still available in the larger size?', at: daysAgo(1) },
      { id: 'm2', from: 'artist', text: 'Yes — 24 x 36 is available in the same edition.', at: daysAgo(1) },
      { id: 'm3', from: 'customer', text: 'Perfect. Can you ship it framed?', at: daysAgo(0) },
      { id: 'm4', from: 'customer', text: 'Also, what is the turnaround if I order today?', at: daysAgo(0) },
    ],
  },
  {
    id: 'CNV-02',
    customerId: 'CUS-201',
    unread: 1,
    messages: [
      { id: 'm1', from: 'customer', text: 'The painting arrived today. It is stunning.', at: daysAgo(3) },
      { id: 'm2', from: 'artist', text: 'So glad it reached safely. Send me a photo on the wall if you can!', at: daysAgo(3) },
      { id: 'm3', from: 'customer', text: 'Will do. I also sent a custom request for a family portrait.', at: daysAgo(2) },
    ],
  },
  {
    id: 'CNV-03',
    customerId: 'CUS-202',
    unread: 0,
    messages: [
      { id: 'm1', from: 'customer', text: 'Checking in on the lobby commission timeline.', at: daysAgo(6) },
      { id: 'm2', from: 'artist', text: 'Panel one is stretched and blocked in. Photos by Friday.', at: daysAgo(6) },
    ],
  },
  {
    id: 'CNV-04',
    customerId: 'CUS-205',
    unread: 0,
    messages: [
      { id: 'm1', from: 'customer', text: 'Thank you for the invitation artwork — everyone asked who made it.', at: daysAgo(12) },
      { id: 'm2', from: 'artist', text: 'That means a lot. Congratulations again.', at: daysAgo(12) },
    ],
  },
];

const seedTransactions = [
  { id: 'TXN-5521', orderId: 'ORD-9051', date: daysAgo(1), amount: 24650, fee: 2465, status: 'Completed' },
  { id: 'TXN-5520', orderId: 'ORD-9050', date: daysAgo(3), amount: 43200, fee: 4320, status: 'Processing' },
  { id: 'TXN-5519', orderId: 'ORD-9049', date: daysAgo(6), amount: 18500, fee: 1850, status: 'Processing' },
  { id: 'TXN-5518', orderId: 'ORD-9047', date: daysAgo(14), amount: 19320, fee: 1932, status: 'Completed' },
  { id: 'TXN-5517', orderId: 'ORD-9046', date: daysAgo(19), amount: 24700, fee: 0, status: 'Cancelled' },
  { id: 'TXN-5516', orderId: 'ORD-9045', date: daysAgo(24), amount: 43200, fee: 4320, status: 'Completed' },
  { id: 'TXN-5515', orderId: 'ORD-9044', date: daysAgo(31), amount: 18500, fee: 1850, status: 'Completed' },
  { id: 'TXN-5514', orderId: 'ORD-9043', date: daysAgo(40), amount: 36975, fee: 3697, status: 'Completed' },
  { id: 'TXN-5513', orderId: 'ORD-9042', date: daysAgo(52), amount: 92000, fee: 9200, status: 'Completed' },
];

const seedNotifications = [
  { id: 'NTF-01', type: 'order', title: 'New order ORD-9051', body: 'Meera Joshi ordered 2 prints of Chandni Chowk, 6 AM.', at: daysAgo(1), read: false },
  { id: 'NTF-02', type: 'request', title: 'Custom request received', body: 'Ananya Rao asked for a family portrait in oil.', at: daysAgo(2), read: false },
  { id: 'NTF-03', type: 'review', title: 'New 5-star review', body: 'Meera Joshi reviewed Chandni Chowk, 6 AM.', at: daysAgo(2), read: false },
  { id: 'NTF-04', type: 'artwork', title: 'Indigo Study No. 7 is under review', body: 'The ArtNest team is checking your listing.', at: daysAgo(12), read: true },
  { id: 'NTF-05', type: 'payout', title: 'Payout released', body: '₹38,880 was sent to your registered bank account.', at: daysAgo(20), read: true },
];

const seedProfile = {
  name: 'Ira Sengupta',
  handle: 'irasengupta',
  email: 'ira@artnest.studio',
  phone: '+91 98110 44221',
  verified: true,
  status: 'Accepting commissions',
  bio: 'Painter and photographer working between Delhi and the Kumaon hills. I make slow work about weather, memory and the places in between.',
  location: 'New Delhi, India',
  website: 'https://irasengupta.art',
  instagram: '@ira.paints',
  facebook: 'irasenguptastudio',
  behance: 'irasengupta',
  specialization: 'Oil painting, fine-art photography',
  experience: '12 years',
  education: 'MFA, Faculty of Fine Arts, MSU Baroda',
  awards: 'Lalit Kala National Award (2023); Emerging Artist, India Art Fair (2019)',
  exhibitions: 'Weather Notes, Bikaner House (2026); Salt & Silence, Kochi (2024)',
  avatar: null,
  cover: null,
};

const seedSettings = {
  emailNotifications: true,
  orderNotifications: true,
  messageNotifications: true,
  reviewNotifications: false,
  twoFactor: false,
  storeVisible: true,
  acceptOrders: true,
  acceptCustomRequests: true,
  paymentMethod: 'Bank transfer',
  bankName: 'HDFC Bank',
  accountName: 'Ira Sengupta',
  accountLast4: '8841',
  upi: 'ira@okhdfcbank',
  accountActive: true,
};

export function createInitialState() {
  return {
    profile: seedProfile,
    settings: seedSettings,
    artworks: seedArtworks,
    orders: seedOrders,
    customers: seedCustomers,
    requests: seedRequests,
    reviews: seedReviews,
    conversations: seedConversations,
    transactions: seedTransactions,
    notifications: seedNotifications,
    withdrawn: 240000,
    profileViews: 18420,
    profileViewsChange: 12.4,
  };
}

/* ------------------------------------------------------------------ *
 * Persistence
 * ------------------------------------------------------------------ */
export function loadState() {
  if (typeof window === 'undefined') return createInitialState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    const parsed = JSON.parse(raw);
    // Merge so newly added keys survive an older saved payload.
    return { ...createInitialState(), ...parsed };
  } catch {
    return createInitialState();
  }
}

export function persistState(state) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage full or blocked — the dashboard still works in-memory */
  }
}

export function resetState() {
  if (typeof window !== 'undefined') window.localStorage.removeItem(STORAGE_KEY);
  return createInitialState();
}

/* ------------------------------------------------------------------ *
 * Derived series for charts
 * ------------------------------------------------------------------ */
export const RANGES = [
  { key: '7d', label: '7 days', days: 7, buckets: 7 },
  { key: '30d', label: '30 days', days: 30, buckets: 10 },
  { key: '3m', label: '3 months', days: 90, buckets: 12 },
  { key: '6m', label: '6 months', days: 180, buckets: 12 },
  { key: '1y', label: '1 year', days: 365, buckets: 12 },
];

const fmtBucket = (date, days) =>
  days <= 30
    ? date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
    : date.toLocaleDateString('en-IN', { month: 'short' });

/**
 * Builds a revenue/orders/views series from real order records, so the charts
 * move when orders change instead of showing hard-coded numbers.
 */
export function buildSeries(orders, rangeKey = '30d', totalViews = 0) {
  const range = RANGES.find((r) => r.key === rangeKey) || RANGES[1];
  const span = range.days / range.buckets;
  const now = Date.now();
  const points = [];

  for (let i = range.buckets - 1; i >= 0; i -= 1) {
    const end = now - i * span * 86400000;
    const start = end - span * 86400000;
    const inBucket = orders.filter((o) => {
      const t = new Date(o.date).getTime();
      return t > start && t <= end && o.status !== 'Cancelled';
    });
    const revenue = inBucket.reduce((sum, o) => sum + o.amount, 0);
    const bucketOrders = inBucket.length;
    // Views trend follows the same shape with a stable pseudo-random spread.
    const drift = 0.65 + ((i * 37) % 70) / 100;
    points.push({
      label: fmtBucket(new Date(end), range.days),
      revenue,
      orders: bucketOrders,
      views: Math.round(((totalViews / range.buckets) * drift) / 6),
    });
  }
  return points;
}

/* ------------------------------------------------------------------ *
 * Small shared formatters
 * ------------------------------------------------------------------ */
export const formatCurrency = (value, compact = false) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
    notation: compact ? 'compact' : 'standard',
  }).format(Number.isFinite(value) ? value : 0);

export const formatNumber = (value) =>
  new Intl.NumberFormat('en-IN').format(Number.isFinite(value) ? value : 0);

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const formatTime = (iso) =>
  new Date(iso).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' });

export const relativeTime = (iso) => {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  return formatDate(iso);
};

export const finalPrice = (price, discount) =>
  Math.round(Number(price || 0) * (1 - Number(discount || 0) / 100));
