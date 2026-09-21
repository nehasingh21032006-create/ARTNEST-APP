import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Users, Mail } from 'lucide-react';
import Modal from '../../Components/ArtistDashboard/Modal';
import { Avatar, StatusBadge, EmptyState } from '../../Components/ArtistDashboard/UIKit';
import { useArtistData } from '../../data/ArtistDataContext';
import { formatCurrency, formatDate, artPlaceholder } from '../../data/artistData';

const SORTS = [
  { key: 'spent', label: 'Highest spend' },
  { key: 'orders', label: 'Most orders' },
  { key: 'recent', label: 'Most recent order' },
  { key: 'name', label: 'Name A–Z' },
];

export default function Customers() {
  const { customers, orders, lookup, actions } = useArtistData();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('spent');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const focus = params.get('focus');
    if (!focus) return;
    const match = customers.find((c) => c.id === focus);
    if (match) setSelected(match);
    params.delete('focus');
    setParams(params, { replace: true });
  }, [params, customers, setParams]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    const list = customers.filter(
      (c) => !term || c.name.toLowerCase().includes(term) || c.email.toLowerCase().includes(term),
    );
    const sorters = {
      spent: (a, b) => b.spent - a.spent,
      orders: (a, b) => b.orders - a.orders,
      recent: (a, b) => new Date(b.lastOrder) - new Date(a.lastOrder),
      name: (a, b) => a.name.localeCompare(b.name),
    };
    return [...list].sort(sorters[sort]);
  }, [customers, query, sort]);

  const customerOrders = useMemo(
    () => (selected ? orders.filter((o) => o.customerId === selected.id) : []),
    [orders, selected],
  );

  return (
    <div className="ad-stack">
      <div className="ad-page-head">
        <div>
          <h1 className="ad-title">Customers</h1>
          <p className="ad-subtitle">Everyone who has bought from your store, and what they've collected.</p>
        </div>
      </div>

      <div className="ad-toolbar">
        <div className="ad-toolbar__search">
          <Search size={16} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or email"
            aria-label="Search customers"
          />
        </div>
        <select className="ad-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort customers">
          {SORTS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
        </select>
      </div>

      <section className="ad-card">
        {filtered.length === 0 ? (
          <EmptyState icon={Users} title="No customers match that search" message="Try a different name or email address." />
        ) : (
          <div className="ad-table-wrap">
            <table className="ad-table ad-table--cards">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Orders</th>
                  <th>Total spent</th>
                  <th>Last order</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id} onClick={() => setSelected(c)} style={{ cursor: 'pointer' }}>
                    <td data-label="Customer">
                      <span className="ad-table__media">
                        <Avatar name={c.name} size="sm" muted />
                        <span>
                          {c.name}
                          <br />
                          <span className="ad-muted">{c.city}</span>
                        </span>
                      </span>
                    </td>
                    <td data-label="Email">{c.email}</td>
                    <td data-label="Orders">{c.orders}</td>
                    <td data-label="Total spent"><span className="ad-num">{formatCurrency(c.spent)}</span></td>
                    <td data-label="Last order">{formatDate(c.lastOrder)}</td>
                    <td data-label="Status"><StatusBadge status={c.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Modal
        open={Boolean(selected)}
        title={selected?.name || ''}
        description={selected ? `${selected.city} · customer since ${formatDate(selected.lastOrder)}` : ''}
        onClose={() => setSelected(null)}
        wide
        footer={
          selected ? (
            <>
              <button type="button" className="ad-btn ad-btn--ghost" onClick={() => setSelected(null)}>Close</button>
              <button
                type="button"
                className="ad-btn ad-btn--primary"
                onClick={() => {
                  actions.startConversation(selected.id, `Hello ${selected.name.split(' ')[0]}, thank you for collecting my work.`);
                  navigate('/artist/messages');
                }}
              >
                <Mail size={15} aria-hidden="true" /> Send a message
              </button>
            </>
          ) : null
        }
      >
        {selected ? (
          <div style={{ display: 'grid', gap: 20 }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <Avatar name={selected.name} size="lg" muted />
              <div>
                <strong style={{ fontSize: '0.95rem' }}>{selected.email}</strong>
                <div className="ad-muted">{selected.city}</div>
              </div>
              <span style={{ marginLeft: 'auto' }}><StatusBadge status={selected.status} /></span>
            </div>

            <dl className="ad-deflist">
              <div><dt>Orders</dt><dd className="ad-num">{selected.orders}</dd></div>
              <div><dt>Total spent</dt><dd className="ad-num">{formatCurrency(selected.spent)}</dd></div>
              <div><dt>Average order</dt><dd className="ad-num">{formatCurrency(Math.round(selected.spent / Math.max(selected.orders, 1)))}</dd></div>
              <div><dt>Last order</dt><dd>{formatDate(selected.lastOrder)}</dd></div>
            </dl>

            <div>
              <h3 className="ad-section-title" style={{ marginBottom: 10 }}>Order history</h3>
              {customerOrders.length === 0 ? (
                <p className="ad-muted" style={{ margin: 0 }}>No orders recorded for this customer yet.</p>
              ) : (
                <div style={{ display: 'grid', gap: 10 }}>
                  {customerOrders.map((o) => {
                    const artwork = lookup.artwork(o.artworkId);
                    return (
                      <div key={o.id} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 10, border: '1px solid var(--ad-outline)', borderRadius: 12 }}>
                        <img className="ad-thumb" src={artwork?.images?.[0] || artPlaceholder(9, artwork?.title || 'Art')} alt="" />
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <strong style={{ fontSize: '0.88rem' }}>{artwork?.title || 'Removed artwork'}</strong>
                          <div className="ad-muted">{o.id} · {formatDate(o.date)}</div>
                        </div>
                        <span className="ad-num">{formatCurrency(o.amount)}</span>
                        <StatusBadge status={o.status} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
