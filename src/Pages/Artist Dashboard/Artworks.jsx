import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, PlusCircle, Palette, LayoutGrid, Rows3 } from 'lucide-react';
import ArtworkCard from '../../Components/ArtistDashboard/ArtworkCard';
import Pagination from '../../Components/ArtistDashboard/Pagination';
import Modal, { ConfirmDialog } from '../../Components/ArtistDashboard/Modal';
import { StatusBadge, EmptyState } from '../../Components/ArtistDashboard/UIKit';
import { useArtistData } from '../../data/ArtistDataContext';
import {
  CATEGORIES, ARTWORK_STATUSES, formatCurrency, formatNumber, formatDate, finalPrice, artPlaceholder,
} from '../../data/artistData';

const PAGE_SIZE = 6;

const SORT_OPTIONS = [
  { key: 'newest', label: 'Newest first' },
  { key: 'oldest', label: 'Oldest first' },
  { key: 'price-high', label: 'Price: high to low' },
  { key: 'price-low', label: 'Price: low to high' },
  { key: 'views', label: 'Most viewed' },
  { key: 'sales', label: 'Best selling' },
];

export default function Artworks() {
  const { artworks, actions, toast } = useArtistData();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const [view, setView] = useState('grid');
  const [preview, setPreview] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  // Deep link from search: /artist/artworks?focus=ART-1041
  useEffect(() => {
    const focus = params.get('focus');
    if (!focus) return;
    const match = artworks.find((a) => a.id === focus);
    if (match) setPreview(match);
    params.delete('focus');
    setParams(params, { replace: true });
  }, [params, artworks, setParams]);

  useEffect(() => {
    setPage(1);
  }, [query, category, status, sort]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    const list = artworks.filter((a) => {
      const matchesTerm =
        !term ||
        a.title.toLowerCase().includes(term) ||
        a.tags?.some((t) => t.toLowerCase().includes(term)) ||
        a.medium.toLowerCase().includes(term);
      const matchesCategory = category === 'All' || a.category === category;
      const matchesStatus = status === 'All' || a.status === status;
      return matchesTerm && matchesCategory && matchesStatus;
    });

    const sorters = {
      newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      'price-high': (a, b) => finalPrice(b.price, b.discount) - finalPrice(a.price, a.discount),
      'price-low': (a, b) => finalPrice(a.price, a.discount) - finalPrice(b.price, b.discount),
      views: (a, b) => b.views - a.views,
      sales: (a, b) => b.sales - a.sales,
    };
    return [...list].sort(sorters[sort]);
  }, [artworks, query, category, status, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleDuplicate = (artwork) => {
    actions.duplicateArtwork(artwork.id);
    toast(`Copied "${artwork.title}" into your drafts.`);
  };

  const handleToggle = (artwork) => {
    actions.toggleArtworkStatus(artwork.id);
    toast(artwork.status === 'Published' ? `"${artwork.title}" moved to drafts.` : `"${artwork.title}" published.`);
  };

  const confirmDelete = () => {
    actions.deleteArtwork(pendingDelete.id);
    toast(`Deleted "${pendingDelete.title}".`, 'info');
    setPendingDelete(null);
  };

  return (
    <div className="ad-stack">
      <div className="ad-page-head">
        <div>
          <h1 className="ad-title">My artworks</h1>
          <p className="ad-subtitle">
            {artworks.length} piece{artworks.length === 1 ? '' : 's'} in your catalogue. Edit a listing, or move it
            between drafts and the public store.
          </p>
        </div>
        <Link to="/artist/add-artwork" className="ad-btn ad-btn--primary">
          <PlusCircle size={16} aria-hidden="true" /> Add artwork
        </Link>
      </div>

      <div>
        <div className="ad-toolbar">
          <div className="ad-toolbar__search">
            <Search size={16} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, medium or tag"
              aria-label="Search artworks"
            />
          </div>
          <select className="ad-select" value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Category">
            <option>All</option>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select className="ad-select" value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status">
            <option>All</option>
            {ARTWORK_STATUSES.map((s) => <option key={s}>{s}</option>)}
          </select>
          <select className="ad-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by">
            {SORT_OPTIONS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
          </select>
          <div className="ad-chips">
            <button
              type="button"
              className={`ad-chip${view === 'grid' ? ' is-active' : ''}`}
              onClick={() => setView('grid')}
              aria-label="Grid view"
            >
              <LayoutGrid size={14} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`ad-chip${view === 'table' ? ' is-active' : ''}`}
              onClick={() => setView('table')}
              aria-label="Table view"
            >
              <Rows3 size={14} aria-hidden="true" />
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="ad-card">
            <EmptyState
              icon={Palette}
              title="Nothing matches those filters"
              message="Try a different category or status, or clear the search to see your full catalogue."
              action={
                <button
                  type="button"
                  className="ad-btn ad-btn--ghost"
                  onClick={() => {
                    setQuery('');
                    setCategory('All');
                    setStatus('All');
                  }}
                >
                  Clear filters
                </button>
              }
            />
          </div>
        ) : view === 'grid' ? (
          <>
            <div className="ad-grid ad-grid--cards">
              {visible.map((a) => (
                <ArtworkCard
                  key={a.id}
                  artwork={a}
                  onView={setPreview}
                  onEdit={(art) => navigate(`/artist/add-artwork?edit=${art.id}`)}
                  onDuplicate={handleDuplicate}
                  onDelete={setPendingDelete}
                  onToggle={handleToggle}
                />
              ))}
            </div>
            <div className="ad-card" style={{ marginTop: 16 }}>
              <Pagination
                page={page}
                pageCount={pageCount}
                total={filtered.length}
                pageSize={PAGE_SIZE}
                onChange={setPage}
              />
            </div>
          </>
        ) : (
          <div className="ad-card">
            <div className="ad-table-wrap">
              <table className="ad-table ad-table--cards">
                <thead>
                  <tr>
                    <th>Artwork</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Views</th>
                    <th>Likes</th>
                    <th>Sales</th>
                    <th>Status</th>
                    <th aria-label="Actions" />
                  </tr>
                </thead>
                <tbody>
                  {visible.map((a) => (
                    <tr key={a.id}>
                      <td data-label="Artwork">
                        <span className="ad-table__media">
                          <img className="ad-thumb" src={a.images?.[0] || artPlaceholder(4, a.title)} alt="" />
                          <span>
                            {a.title}
                            <br />
                            <span className="ad-muted">{formatDate(a.createdAt)}</span>
                          </span>
                        </span>
                      </td>
                      <td data-label="Category">{a.category}</td>
                      <td data-label="Price"><span className="ad-num">{formatCurrency(finalPrice(a.price, a.discount))}</span></td>
                      <td data-label="Views">{formatNumber(a.views)}</td>
                      <td data-label="Likes">{formatNumber(a.likes)}</td>
                      <td data-label="Sales">{formatNumber(a.sales)}</td>
                      <td data-label="Status"><StatusBadge status={a.status} /></td>
                      <td data-label="">
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                          <button type="button" className="ad-btn ad-btn--ghost ad-btn--sm" onClick={() => setPreview(a)}>View</button>
                          <button type="button" className="ad-btn ad-btn--ghost ad-btn--sm" onClick={() => navigate(`/artist/add-artwork?edit=${a.id}`)}>Edit</button>
                          <button type="button" className="ad-btn ad-btn--ghost ad-btn--sm" onClick={() => handleDuplicate(a)}>Duplicate</button>
                          <button type="button" className="ad-btn ad-btn--ghost ad-btn--sm" onClick={() => handleToggle(a)}>
                            {a.status === 'Published' ? 'Unpublish' : 'Publish'}
                          </button>
                          <button
                            type="button"
                            className="ad-btn ad-btn--ghost ad-btn--sm"
                            style={{ color: 'var(--ad-danger-text)' }}
                            onClick={() => setPendingDelete(a)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              page={page}
              pageCount={pageCount}
              total={filtered.length}
              pageSize={PAGE_SIZE}
              onChange={setPage}
            />
          </div>
        )}
      </div>

      <Modal
        open={Boolean(preview)}
        title={preview?.title || ''}
        description={preview ? `${preview.category} · ${preview.medium}` : ''}
        onClose={() => setPreview(null)}
        wide
        footer={
          preview ? (
            <>
              <button type="button" className="ad-btn ad-btn--ghost" onClick={() => setPreview(null)}>Close</button>
              <button
                type="button"
                className="ad-btn ad-btn--primary"
                onClick={() => navigate(`/artist/add-artwork?edit=${preview.id}`)}
              >
                Edit listing
              </button>
            </>
          ) : null
        }
      >
        {preview ? (
          <div style={{ display: 'grid', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>
              {(preview.images?.length ? preview.images : [artPlaceholder(5, preview.title)]).map((src, i) => (
                <img key={`${preview.id}-${i}`} src={src} alt="" style={{ width: '100%', aspectRatio: 1, objectFit: 'cover', borderRadius: 12, border: '1px solid var(--ad-outline)' }} />
              ))}
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65 }}>{preview.description}</p>
            <dl className="ad-deflist">
              <div><dt>Status</dt><dd><StatusBadge status={preview.status} /></dd></div>
              <div><dt>Price</dt><dd className="ad-num">{formatCurrency(finalPrice(preview.price, preview.discount))}</dd></div>
              <div><dt>Dimensions</dt><dd>{preview.dimensions}</dd></div>
              <div><dt>Year</dt><dd>{preview.year}</dd></div>
              <div><dt>Material</dt><dd>{preview.material}</dd></div>
              <div><dt>Quantity</dt><dd>{preview.quantity}</dd></div>
              <div><dt>Shipping</dt><dd>{preview.shippingAvailable ? `${formatCurrency(preview.shippingPrice)} · ${preview.deliveryTime}` : 'Not offered'}</dd></div>
              <div><dt>Engagement</dt><dd>{formatNumber(preview.views)} views · {formatNumber(preview.likes)} likes</dd></div>
            </dl>
            {preview.tags?.length ? (
              <div className="ad-chips">
                {preview.tags.map((t) => <span key={t} className="ad-tag">{t}</span>)}
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>

      <ConfirmDialog
        open={Boolean(pendingDelete)}
        title="Delete this artwork?"
        message={`"${pendingDelete?.title}" will be removed from your catalogue and the public store. This can't be undone.`}
        confirmLabel="Delete artwork"
        destructive
        onConfirm={confirmDelete}
        onClose={() => setPendingDelete(null)}
      />
    </div>
  );
}
