import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ResponsiveContainer, ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line,
} from 'recharts';
import {
  IndianRupee, ShoppingBag, Palette, Eye, Clock, MessageSquare, ArrowUpRight,
  ArrowDown, ArrowUp, PlusCircle, Package,
} from 'lucide-react';
import StatCard from '../../Components/ArtistDashboard/StatCard';
import OrderTable from '../../Components/ArtistDashboard/OrderTable';
import { StatusBadge, ChartTooltip, EmptyState } from '../../Components/ArtistDashboard/UIKit';
import { useArtistData } from '../../data/ArtistDataContext';
import {
  RANGES, buildSeries, formatCurrency, formatNumber, finalPrice, ARTWORK_STATUSES, artPlaceholder,
} from '../../data/artistData';

const greeting = () => {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
};

const SORTS = [
  { key: 'revenue', label: 'Revenue' },
  { key: 'views', label: 'Views' },
  { key: 'likes', label: 'Likes' },
  { key: 'sales', label: 'Orders' },
];

export default function ArtistDashboard() {
  const { profile, artworks, orders, derived, lookup, profileViews, profileViewsChange } = useArtistData();
  const navigate = useNavigate();
  const [range, setRange] = useState('30d');
  const [sortKey, setSortKey] = useState('revenue');
  const [sortDir, setSortDir] = useState('desc');
  const [statusFilter, setStatusFilter] = useState('All');

  const series = useMemo(
    () => buildSeries(orders, range, derived.totalViews),
    [orders, range, derived.totalViews],
  );

  const topArtworks = useMemo(() => {
    const withRevenue = artworks.map((a) => ({
      ...a,
      revenue: finalPrice(a.price, a.discount) * a.sales,
    }));
    const filtered =
      statusFilter === 'All' ? withRevenue : withRevenue.filter((a) => a.status === statusFilter);
    return filtered
      .sort((a, b) => (sortDir === 'desc' ? b[sortKey] - a[sortKey] : a[sortKey] - b[sortKey]))
      .slice(0, 5);
  }, [artworks, sortKey, sortDir, statusFilter]);

  const recentOrders = useMemo(
    () => [...orders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5),
    [orders],
  );

  const toggleSort = (key) => {
    if (key === sortKey) setSortDir((d) => (d === 'desc' ? 'asc' : 'desc'));
    else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  return (
    <div className="ad-stack">
      <div className="ad-page-head">
        <div>
          <h1 className="ad-title">
            {greeting()}, {profile.name.split(' ')[0]} 👋
          </h1>
          <p className="ad-subtitle">Here's what's happening with your ArtNest store today.</p>
        </div>
        <div className="ad-btn-row">
          <Link to="/artist/orders" className="ad-btn ad-btn--ghost">
            <Package size={16} aria-hidden="true" /> Manage orders
          </Link>
          <Link to="/artist/add-artwork" className="ad-btn ad-btn--primary">
            <PlusCircle size={16} aria-hidden="true" /> Add artwork
          </Link>
        </div>
      </div>

      <div className="ad-grid ad-grid--stats">
        <StatCard
          label="Total sales"
          value={formatCurrency(derived.totalRevenue)}
          change={derived.revenueChange}
          caption="vs previous 30 days"
          icon={IndianRupee}
          to="/artist/earnings"
        />
        <StatCard
          label="Total orders"
          value={formatNumber(derived.totalOrders)}
          change={derived.ordersChange}
          caption="vs previous 30 days"
          icon={ShoppingBag}
          to="/artist/orders"
        />
        <StatCard
          label="Total artworks"
          value={formatNumber(derived.publishedCount)}
          caption={`${derived.draftCount} in drafts`}
          icon={Palette}
          to="/artist/artworks"
        />
        <StatCard
          label="Profile views"
          value={formatNumber(profileViews)}
          change={profileViewsChange}
          caption="visits to your store page"
          icon={Eye}
          to="/artist/analytics"
        />
        <StatCard
          label="Pending orders"
          value={formatNumber(derived.pendingOrders)}
          caption="waiting on you"
          icon={Clock}
          to="/artist/orders?status=Pending"
        />
        <StatCard
          label="Unread messages"
          value={formatNumber(derived.unreadMessages)}
          caption="from collectors"
          icon={MessageSquare}
          to="/artist/messages"
        />
      </div>

      <section className="ad-card">
        <div className="ad-card__head">
          <div>
            <h2 className="ad-section-title">Sales overview</h2>
            <span className="ad-muted">Revenue and order count over the selected period</span>
          </div>
          <div className="ad-chips">
            {RANGES.map((r) => (
              <button
                key={r.key}
                type="button"
                className={`ad-chip${range === r.key ? ' is-active' : ''}`}
                onClick={() => setRange(r.key)}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
        <div className="ad-card__body">
          <div className="ad-chart">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={series} margin={{ top: 6, right: 8, left: -8, bottom: 0 }}>
                <defs>
                  <linearGradient id="adRevenueFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--ad-primary)" stopOpacity={0.28} />
                    <stop offset="100%" stopColor="var(--ad-primary)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--ad-outline)" strokeDasharray="3 6" vertical={false} />
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 12, fill: 'var(--ad-secondary)' }}
                  axisLine={{ stroke: 'var(--ad-outline)' }}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="left"
                  tick={{ fontSize: 12, fill: 'var(--ad-secondary)' }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => formatCurrency(v, true)}
                  width={72}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 12, fill: 'var(--ad-secondary)' }}
                  axisLine={false}
                  tickLine={false}
                  width={34}
                  allowDecimals={false}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'var(--ad-outline)' }} />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue"
                  stroke="var(--ad-primary)"
                  strokeWidth={2}
                  fill="url(#adRevenueFill)"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="orders"
                  name="Orders"
                  stroke="var(--ad-secondary)"
                  strokeWidth={2}
                  dot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="ad-card">
        <div className="ad-card__head">
          <div>
            <h2 className="ad-section-title">Top performing artworks</h2>
            <span className="ad-muted">Sorted by {SORTS.find((s) => s.key === sortKey).label.toLowerCase()}</span>
          </div>
          <select
            className="ad-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter artworks by status"
          >
            <option>All</option>
            {ARTWORK_STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="ad-card__body ad-card__body--flush">
          {topArtworks.length === 0 ? (
            <EmptyState
              icon={Palette}
              title="No artworks in this state"
              message="Change the filter, or publish a piece to start collecting views."
              action={
                <Link to="/artist/add-artwork" className="ad-btn ad-btn--primary">
                  Add artwork
                </Link>
              }
            />
          ) : (
            <div className="ad-table-wrap">
              <table className="ad-table ad-table--cards">
                <thead>
                  <tr>
                    <th>Artwork</th>
                    <th>Category</th>
                    <th>Price</th>
                    {SORTS.map((s) => (
                      <th key={s.key}>
                        <button type="button" onClick={() => toggleSort(s.key)}>
                          {s.label}
                          {sortKey === s.key ? (
                            sortDir === 'desc' ? <ArrowDown size={13} aria-hidden="true" /> : <ArrowUp size={13} aria-hidden="true" />
                          ) : null}
                        </button>
                      </th>
                    ))}
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {topArtworks.map((a) => (
                    <tr key={a.id}>
                      <td data-label="Artwork">
                        <span className="ad-table__media">
                          <img className="ad-thumb" src={a.images?.[0] || artPlaceholder(2, a.title)} alt="" />
                          <span>{a.title}</span>
                        </span>
                      </td>
                      <td data-label="Category">{a.category}</td>
                      <td data-label="Price"><span className="ad-num">{formatCurrency(finalPrice(a.price, a.discount))}</span></td>
                      <td data-label="Revenue"><span className="ad-num">{formatCurrency(a.revenue)}</span></td>
                      <td data-label="Views">{formatNumber(a.views)}</td>
                      <td data-label="Likes">{formatNumber(a.likes)}</td>
                      <td data-label="Orders">{formatNumber(a.sales)}</td>
                      <td data-label="Status"><StatusBadge status={a.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <section className="ad-card">
        <div className="ad-card__head">
          <h2 className="ad-section-title">Recent orders</h2>
          <Link to="/artist/orders" className="ad-btn ad-btn--quiet">
            View all orders <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="ad-card__body ad-card__body--flush">
          {recentOrders.length === 0 ? (
            <EmptyState icon={ShoppingBag} title="No orders yet" message="Orders appear here as soon as a collector buys a piece." />
          ) : (
            <OrderTable
              orders={recentOrders}
              lookup={lookup}
              onView={(order) => navigate(`/artist/orders?focus=${order.id}`)}
            />
          )}
        </div>
      </section>
    </div>
  );
}
