import { useMemo, useState } from 'react';
import {
  ResponsiveContainer, AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { Eye, Heart, Bookmark, Share2, ShoppingBag, Percent, IndianRupee, Image } from 'lucide-react';
import StatCard from '../../Components/ArtistDashboard/StatCard';
import { ChartTooltip, EmptyState } from '../../Components/ArtistDashboard/UIKit';
import { useArtistData } from '../../data/ArtistDataContext';
import { buildSeries, formatCurrency, formatNumber, finalPrice, artPlaceholder } from '../../data/artistData';

const RANGE_TABS = [
  { key: 'today', label: 'Today', days: 1 },
  { key: '7d', label: '7 days' },
  { key: '30d', label: '30 days' },
  { key: '3m', label: '3 months' },
  { key: '1y', label: '1 year' },
];

export default function Analytics() {
  const { artworks, orders, derived, profileViews, profileViewsChange } = useArtistData();
  const [range, setRange] = useState('30d');

  const seriesKey = range === 'today' ? '7d' : range;
  const series = useMemo(
    () => buildSeries(orders, seriesKey, derived.totalViews),
    [orders, seriesKey, derived.totalViews],
  );

  const conversionRate = derived.totalViews
    ? (derived.totalOrders / derived.totalViews) * 100
    : 0;

  const saves = Math.round(derived.totalLikes * 0.42);
  const shares = Math.round(derived.totalLikes * 0.18);

  const mostViewed = useMemo(() => [...artworks].sort((a, b) => b.views - a.views).slice(0, 5), [artworks]);
  const mostLiked = useMemo(() => [...artworks].sort((a, b) => b.likes - a.likes)[0], [artworks]);

  return (
    <div className="ad-stack">
      <div className="ad-page-head">
        <div>
          <h1 className="ad-title">Analytics</h1>
          <p className="ad-subtitle">How people are finding your work, and which pieces turn views into sales.</p>
        </div>
        <div className="ad-chips">
          {RANGE_TABS.map((r) => (
            <button key={r.key} type="button" className={`ad-chip${range === r.key ? ' is-active' : ''}`} onClick={() => setRange(r.key)}>
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="ad-grid ad-grid--stats">
        <StatCard label="Profile views" value={formatNumber(profileViews)} change={profileViewsChange} icon={Eye} />
        <StatCard label="Artwork views" value={formatNumber(derived.totalViews)} change={9.1} icon={Image} />
        <StatCard label="Likes" value={formatNumber(derived.totalLikes)} change={6.8} icon={Heart} />
        <StatCard label="Saves" value={formatNumber(saves)} change={4.2} icon={Bookmark} />
        <StatCard label="Shares" value={formatNumber(shares)} change={-2.6} icon={Share2} />
        <StatCard label="Orders" value={formatNumber(derived.totalOrders)} change={derived.ordersChange} icon={ShoppingBag} />
        <StatCard label="Conversion rate" value={`${conversionRate.toFixed(2)}%`} caption="orders per artwork view" icon={Percent} />
        <StatCard label="Revenue" value={formatCurrency(derived.totalRevenue)} change={derived.revenueChange} icon={IndianRupee} />
      </div>

      <div className="ad-grid ad-grid--2">
        <section className="ad-card">
          <div className="ad-card__head">
            <h2 className="ad-section-title">Revenue over time</h2>
          </div>
          <div className="ad-card__body">
            <div className="ad-chart ad-chart--sm">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={series} margin={{ top: 6, right: 8, left: -12, bottom: 0 }}>
                  <defs>
                    <linearGradient id="adAnalyticsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--ad-primary)" stopOpacity={0.26} />
                      <stop offset="100%" stopColor="var(--ad-primary)" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="var(--ad-outline)" strokeDasharray="3 6" vertical={false} />
                  <XAxis dataKey="label" tick={{ fontSize: 11, fill: 'var(--ad-secondary)' }} axisLine={{ stroke: 'var(--ad-outline)' }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: 'var(--ad-secondary)' }} axisLine={false} tickLine={false} width={66} tickFormatter={(v) => formatCurrency(v, true)} />
                  <Tooltip content={<ChartTooltip />} />
                  <Area type="monotone" dataKey="revenue" name="Revenue" stroke="var(--ad-primary)" strokeWidth={2} fill="url(#adAnalyticsFill)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="ad-card">
          <div className="ad-card__head">
            <h2 className="ad-section-title">Artwork views</h2>
          </div>
          <div className="ad-card__body">
            <div className="ad-chart ad-chart--sm">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={series} margin={{ top: 6, right: 8, left: -18, bottom: 0 }}>
                  <CartesianGrid stroke="var(--ad-outline)" strokeDasharray="3 6" vertical={false} />
                  <XAxis dataKey="label" tick={{ fontSize: 11, fill: 'var(--ad-secondary)' }} axisLine={{ stroke: 'var(--ad-outline)' }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: 'var(--ad-secondary)' }} axisLine={false} tickLine={false} width={56} />
                  <Tooltip content={<ChartTooltip currencyKeys={[]} />} />
                  <Line type="monotone" dataKey="views" name="Views" stroke="var(--ad-secondary)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="ad-card">
          <div className="ad-card__head">
            <h2 className="ad-section-title">Orders</h2>
          </div>
          <div className="ad-card__body">
            <div className="ad-chart ad-chart--sm">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={series} margin={{ top: 6, right: 8, left: -22, bottom: 0 }}>
                  <CartesianGrid stroke="var(--ad-outline)" strokeDasharray="3 6" vertical={false} />
                  <XAxis dataKey="label" tick={{ fontSize: 11, fill: 'var(--ad-secondary)' }} axisLine={{ stroke: 'var(--ad-outline)' }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: 'var(--ad-secondary)' }} axisLine={false} tickLine={false} width={44} allowDecimals={false} />
                  <Tooltip content={<ChartTooltip currencyKeys={[]} />} cursor={{ fill: 'var(--ad-section)' }} />
                  <Bar dataKey="orders" name="Orders" fill="var(--ad-primary)" radius={[6, 6, 0, 0]} maxBarSize={36} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="ad-card">
          <div className="ad-card__head">
            <h2 className="ad-section-title">Most liked artwork</h2>
          </div>
          <div className="ad-card__body">
            {mostLiked ? (
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <img className="ad-thumb ad-thumb--lg" src={mostLiked.images?.[0] || artPlaceholder(7, mostLiked.title)} alt="" />
                <div>
                  <strong style={{ fontFamily: 'var(--ad-font-display)', fontSize: '1.05rem' }}>{mostLiked.title}</strong>
                  <div className="ad-muted">{mostLiked.category} · {formatCurrency(finalPrice(mostLiked.price, mostLiked.discount))}</div>
                  <div style={{ marginTop: 8, display: 'flex', gap: 16, fontSize: '0.82rem' }}>
                    <span>{formatNumber(mostLiked.likes)} likes</span>
                    <span>{formatNumber(mostLiked.views)} views</span>
                    <span>{formatNumber(mostLiked.sales)} sold</span>
                  </div>
                </div>
              </div>
            ) : (
              <EmptyState icon={Heart} title="No artworks yet" message="Publish a piece to start collecting engagement data." />
            )}
          </div>
        </section>
      </div>

      <section className="ad-card">
        <div className="ad-card__head">
          <h2 className="ad-section-title">Most viewed artworks</h2>
        </div>
        <div className="ad-card__body ad-card__body--flush">
          <div className="ad-table-wrap">
            <table className="ad-table ad-table--cards">
              <thead>
                <tr>
                  <th>Artwork</th>
                  <th>Views</th>
                  <th>Likes</th>
                  <th>Orders</th>
                  <th>Conversion</th>
                </tr>
              </thead>
              <tbody>
                {mostViewed.map((a) => (
                  <tr key={a.id}>
                    <td data-label="Artwork">
                      <span className="ad-table__media">
                        <img className="ad-thumb" src={a.images?.[0] || artPlaceholder(8, a.title)} alt="" />
                        <span>{a.title}</span>
                      </span>
                    </td>
                    <td data-label="Views">{formatNumber(a.views)}</td>
                    <td data-label="Likes">{formatNumber(a.likes)}</td>
                    <td data-label="Orders">{formatNumber(a.sales)}</td>
                    <td data-label="Conversion">{a.views ? ((a.sales / a.views) * 100).toFixed(2) : '0.00'}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
