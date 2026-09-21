import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ImagePlus, Star, ArrowLeft, ArrowRight, Trash2, X, Save, Upload, AlertCircle } from 'lucide-react';
import { useArtistData } from '../../data/ArtistDataContext';
import {
  CATEGORIES, SUBCATEGORIES, MEDIUMS, STYLES, ORIENTATIONS, formatCurrency, finalPrice,
} from '../../data/artistData';

const EMPTY = {
  title: '',
  description: '',
  category: '',
  subcategory: '',
  medium: '',
  style: '',
  tags: [],
  price: '',
  discount: '',
  dimensions: '',
  weight: '',
  year: new Date().getFullYear(),
  material: '',
  orientation: 'Portrait',
  quantity: 1,
  availability: 'In Stock',
  shippingAvailable: true,
  shippingPrice: '',
  deliveryTime: '',
  images: [],
};

const MAX_IMAGES = 6;

export default function AddArtwork() {
  const { artworks, actions, toast } = useArtistData();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const editId = params.get('edit');
  const editing = useMemo(() => artworks.find((a) => a.id === editId), [artworks, editId]);

  const [form, setForm] = useState(EMPTY);
  const [tagDraft, setTagDraft] = useState('');
  const [errors, setErrors] = useState({});
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    if (editing) {
      setForm({ ...EMPTY, ...editing });
    } else {
      setForm(EMPTY);
    }
    setErrors({});
  }, [editing, editId]);

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  };

  /* ----------------------------- images ----------------------------- */
  const addFiles = (fileList) => {
    const files = Array.from(fileList).filter((f) => f.type.startsWith('image/'));
    if (!files.length) {
      toast('Those files are not images. Use JPG, PNG or WEBP.', 'error');
      return;
    }
    const room = MAX_IMAGES - form.images.length;
    if (room <= 0) {
      toast(`You can upload up to ${MAX_IMAGES} images per artwork.`, 'error');
      return;
    }
    files.slice(0, room).forEach((file) => {
      if (file.size > 5 * 1024 * 1024) {
        toast(`${file.name} is over 5 MB. Compress it and try again.`, 'error');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setForm((f) => (f.images.length >= MAX_IMAGES ? f : { ...f, images: [...f.images, reader.result] }));
        setErrors((e) => {
          const next = { ...e };
          delete next.images;
          return next;
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => set('images', form.images.filter((_, i) => i !== index));

  const moveImage = (index, delta) => {
    const next = [...form.images];
    const target = index + delta;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    set('images', next);
  };

  const makeMain = (index) => {
    const next = [...form.images];
    const [picked] = next.splice(index, 1);
    set('images', [picked, ...next]);
  };

  /* ------------------------------ tags ------------------------------ */
  const addTag = () => {
    const tag = tagDraft.trim().toLowerCase();
    if (!tag) return;
    if (form.tags.includes(tag)) {
      setTagDraft('');
      return;
    }
    if (form.tags.length >= 8) {
      toast('Eight tags is the maximum — remove one first.', 'error');
      return;
    }
    set('tags', [...form.tags, tag]);
    setTagDraft('');
  };

  /* --------------------------- validation --------------------------- */
  const validate = (status) => {
    const next = {};
    if (!form.title.trim()) next.title = 'Give the piece a title.';
    else if (form.title.trim().length < 3) next.title = 'Titles need at least 3 characters.';

    if (!form.category) next.category = 'Pick a category.';
    if (!form.medium) next.medium = 'Pick a medium.';

    const price = Number(form.price);
    if (form.price === '' || Number.isNaN(price)) next.price = 'Enter a price in rupees.';
    else if (price <= 0) next.price = 'Price must be more than zero.';

    const discount = Number(form.discount || 0);
    if (discount < 0 || discount > 90) next.discount = 'Discount must be between 0 and 90%.';

    if (Number(form.quantity) < 0) next.quantity = 'Quantity cannot be negative.';

    const year = Number(form.year);
    if (year && (year < 1800 || year > new Date().getFullYear())) {
      next.year = `Year must be between 1800 and ${new Date().getFullYear()}.`;
    }

    if (form.shippingAvailable && form.shippingPrice !== '' && Number(form.shippingPrice) < 0) {
      next.shippingPrice = 'Shipping cost cannot be negative.';
    }

    // A draft can be incomplete; a published listing cannot.
    if (status === 'Published') {
      if (!form.description.trim()) next.description = 'Collectors want context — add a description.';
      else if (form.description.trim().length < 30) next.description = 'Write at least 30 characters.';
      if (form.images.length === 0) next.images = 'Add at least one image before publishing.';
      if (!form.dimensions.trim()) next.dimensions = 'Add the dimensions.';
    }

    setErrors(next);
    return next;
  };

  const submit = (status) => {
    const found = validate(status);
    if (Object.keys(found).length) {
      toast('Some fields need attention before you can continue.', 'error');
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const payload = {
      ...form,
      price: Number(form.price),
      discount: Number(form.discount || 0),
      quantity: Number(form.quantity || 0),
      shippingPrice: Number(form.shippingPrice || 0),
      year: Number(form.year) || new Date().getFullYear(),
    };

    if (editing) {
      actions.updateArtwork(editing.id, { ...payload, status });
      toast(status === 'Published' ? `"${payload.title}" published.` : `"${payload.title}" saved to drafts.`);
    } else {
      actions.addArtwork(payload, status);
      toast(status === 'Published' ? `"${payload.title}" published.` : `"${payload.title}" saved to drafts.`);
    }
    navigate('/artist/artworks');
  };

  const errorCount = Object.keys(errors).length;
  const net = finalPrice(form.price || 0, form.discount || 0);

  return (
    <div className="ad-stack" ref={topRef}>
      <div className="ad-page-head">
        <div>
          <h1 className="ad-title">{editing ? 'Edit artwork' : 'Add artwork'}</h1>
          <p className="ad-subtitle">
            {editing
              ? 'Update the listing. Changes go live as soon as you publish.'
              : 'Save it as a draft while you work, or publish it straight to your store.'}
          </p>
        </div>
        <button type="button" className="ad-btn ad-btn--ghost" onClick={() => navigate('/artist/artworks')}>
          Back to artworks
        </button>
      </div>

      {errorCount > 0 ? (
        <div className="ad-card" style={{ borderColor: 'var(--ad-danger-text)', background: 'var(--ad-danger-bg)' }}>
          <div className="ad-card__body" style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <AlertCircle size={18} color="var(--ad-danger-text)" aria-hidden="true" />
            <div>
              <strong style={{ color: 'var(--ad-danger-text)', fontSize: '0.9rem' }}>
                {errorCount} field{errorCount === 1 ? '' : 's'} need{errorCount === 1 ? 's' : ''} fixing
              </strong>
              <p style={{ margin: '4px 0 0', fontSize: '0.84rem', color: 'var(--ad-danger-text)' }}>
                {Object.values(errors)[0]}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <form className="ad-form" onSubmit={(e) => e.preventDefault()} noValidate>
        {/* --------------------------- basics --------------------------- */}
        <section className="ad-card">
          <div className="ad-card__body">
            <fieldset className="ad-fieldset">
              <legend className="ad-fieldset__legend">Basic information</legend>
              <p className="ad-fieldset__hint">What the piece is, and how collectors will find it.</p>
              <div className="ad-fields">
                <div className="ad-field ad-field--wide">
                  <label htmlFor="title">Artwork title</label>
                  <input
                    id="title"
                    className={`ad-input${errors.title ? ' has-error' : ''}`}
                    value={form.title}
                    onChange={(e) => set('title', e.target.value)}
                    placeholder="Monsoon Over Kumaon"
                  />
                  {errors.title ? <span className="ad-error-text">{errors.title}</span> : null}
                </div>

                <div className="ad-field ad-field--wide">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    className={`ad-textarea${errors.description ? ' has-error' : ''}`}
                    value={form.description}
                    onChange={(e) => set('description', e.target.value)}
                    placeholder="Where it was made, what it is about, how it was finished."
                  />
                  <span className="ad-hint">{form.description.length} characters</span>
                  {errors.description ? <span className="ad-error-text">{errors.description}</span> : null}
                </div>

                <div className="ad-field">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    className={`ad-select${errors.category ? ' has-error' : ''}`}
                    value={form.category}
                    onChange={(e) => {
                      set('category', e.target.value);
                      set('subcategory', '');
                    }}
                  >
                    <option value="">Select a category</option>
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  {errors.category ? <span className="ad-error-text">{errors.category}</span> : null}
                </div>

                <div className="ad-field">
                  <label htmlFor="subcategory">Subcategory</label>
                  <select
                    id="subcategory"
                    className="ad-select"
                    value={form.subcategory}
                    onChange={(e) => set('subcategory', e.target.value)}
                    disabled={!form.category}
                  >
                    <option value="">{form.category ? 'Select a subcategory' : 'Pick a category first'}</option>
                    {(SUBCATEGORIES[form.category] || []).map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="ad-field">
                  <label htmlFor="medium">Medium</label>
                  <select
                    id="medium"
                    className={`ad-select${errors.medium ? ' has-error' : ''}`}
                    value={form.medium}
                    onChange={(e) => set('medium', e.target.value)}
                  >
                    <option value="">Select a medium</option>
                    {MEDIUMS.map((m) => <option key={m}>{m}</option>)}
                  </select>
                  {errors.medium ? <span className="ad-error-text">{errors.medium}</span> : null}
                </div>

                <div className="ad-field">
                  <label htmlFor="style">Style</label>
                  <select id="style" className="ad-select" value={form.style} onChange={(e) => set('style', e.target.value)}>
                    <option value="">Select a style</option>
                    {STYLES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="ad-field ad-field--wide">
                  <label htmlFor="tags">Tags</label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input
                      id="tags"
                      className="ad-input"
                      value={tagDraft}
                      onChange={(e) => setTagDraft(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ',') {
                          e.preventDefault();
                          addTag();
                        }
                      }}
                      placeholder="landscape, rain, himalaya"
                    />
                    <button type="button" className="ad-btn ad-btn--ghost" onClick={addTag}>Add</button>
                  </div>
                  {form.tags.length ? (
                    <div className="ad-chips" style={{ marginTop: 8 }}>
                      {form.tags.map((t) => (
                        <span key={t} className="ad-tag">
                          {t}
                          <button type="button" onClick={() => set('tags', form.tags.filter((x) => x !== t))} aria-label={`Remove ${t}`}>
                            <X size={12} aria-hidden="true" />
                          </button>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="ad-hint">Up to 8 tags. Press Enter after each one.</span>
                  )}
                </div>
              </div>
            </fieldset>
          </div>
        </section>

        {/* --------------------------- pricing -------------------------- */}
        <section className="ad-card">
          <div className="ad-card__body">
            <fieldset className="ad-fieldset">
              <legend className="ad-fieldset__legend">Pricing</legend>
              <p className="ad-fieldset__hint">ArtNest deducts a 10% platform fee from the final price at checkout.</p>
              <div className="ad-fields">
                <div className="ad-field">
                  <label htmlFor="price">Price (₹)</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    className={`ad-input${errors.price ? ' has-error' : ''}`}
                    value={form.price}
                    onChange={(e) => set('price', e.target.value)}
                    placeholder="48000"
                  />
                  {errors.price ? <span className="ad-error-text">{errors.price}</span> : null}
                </div>
                <div className="ad-field">
                  <label htmlFor="discount">Discount (%)</label>
                  <input
                    id="discount"
                    type="number"
                    min="0"
                    max="90"
                    className={`ad-input${errors.discount ? ' has-error' : ''}`}
                    value={form.discount}
                    onChange={(e) => set('discount', e.target.value)}
                    placeholder="0"
                  />
                  {errors.discount ? <span className="ad-error-text">{errors.discount}</span> : null}
                </div>
                <div className="ad-field">
                  <label htmlFor="final">Final price</label>
                  <input id="final" className="ad-input" value={formatCurrency(net)} readOnly tabIndex={-1} />
                  <span className="ad-hint">You receive {formatCurrency(Math.round(net * 0.9))} after the platform fee.</span>
                </div>
              </div>
            </fieldset>
          </div>
        </section>

        {/* --------------------------- details -------------------------- */}
        <section className="ad-card">
          <div className="ad-card__body">
            <fieldset className="ad-fieldset">
              <legend className="ad-fieldset__legend">Artwork details</legend>
              <p className="ad-fieldset__hint">The specifics buyers ask about before committing.</p>
              <div className="ad-fields">
                <div className="ad-field">
                  <label htmlFor="dimensions">Dimensions</label>
                  <input
                    id="dimensions"
                    className={`ad-input${errors.dimensions ? ' has-error' : ''}`}
                    value={form.dimensions}
                    onChange={(e) => set('dimensions', e.target.value)}
                    placeholder="36 x 48 in"
                  />
                  {errors.dimensions ? <span className="ad-error-text">{errors.dimensions}</span> : null}
                </div>
                <div className="ad-field">
                  <label htmlFor="weight">Weight</label>
                  <input id="weight" className="ad-input" value={form.weight} onChange={(e) => set('weight', e.target.value)} placeholder="4.2 kg" />
                </div>
                <div className="ad-field">
                  <label htmlFor="year">Year created</label>
                  <input
                    id="year"
                    type="number"
                    className={`ad-input${errors.year ? ' has-error' : ''}`}
                    value={form.year}
                    onChange={(e) => set('year', e.target.value)}
                  />
                  {errors.year ? <span className="ad-error-text">{errors.year}</span> : null}
                </div>
                <div className="ad-field">
                  <label htmlFor="material">Material</label>
                  <input id="material" className="ad-input" value={form.material} onChange={(e) => set('material', e.target.value)} placeholder="Linen canvas, pine stretcher" />
                </div>
                <div className="ad-field">
                  <label htmlFor="orientation">Orientation</label>
                  <select id="orientation" className="ad-select" value={form.orientation} onChange={(e) => set('orientation', e.target.value)}>
                    {ORIENTATIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
            </fieldset>
          </div>
        </section>

        {/* -------------------------- inventory ------------------------- */}
        <section className="ad-card">
          <div className="ad-card__body">
            <fieldset className="ad-fieldset">
              <legend className="ad-fieldset__legend">Inventory</legend>
              <p className="ad-fieldset__hint">Set quantity to 1 for originals, or higher for editions and prints.</p>
              <div className="ad-fields">
                <div className="ad-field">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    id="quantity"
                    type="number"
                    min="0"
                    className={`ad-input${errors.quantity ? ' has-error' : ''}`}
                    value={form.quantity}
                    onChange={(e) => set('quantity', e.target.value)}
                  />
                  {errors.quantity ? <span className="ad-error-text">{errors.quantity}</span> : null}
                </div>
                <div className="ad-field">
                  <label htmlFor="availability">Availability</label>
                  <select id="availability" className="ad-select" value={form.availability} onChange={(e) => set('availability', e.target.value)}>
                    <option>In Stock</option>
                    <option>Made to Order</option>
                    <option>Reserved</option>
                    <option>Sold Out</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </div>
        </section>

        {/* ---------------------------- images -------------------------- */}
        <section className="ad-card">
          <div className="ad-card__body">
            <fieldset className="ad-fieldset">
              <legend className="ad-fieldset__legend">Images</legend>
              <p className="ad-fieldset__hint">The first image is the one shown in the store. Up to {MAX_IMAGES} images, 5 MB each.</p>

              <div
                className={`ad-drop${dragOver ? ' is-over' : ''}`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  addFiles(e.dataTransfer.files);
                }}
              >
                <ImagePlus size={26} color="var(--ad-primary)" aria-hidden="true" />
                <p>Drag images here, or choose them from your computer.</p>
                <button type="button" className="ad-btn ad-btn--ghost" onClick={() => fileRef.current?.click()}>
                  Choose images
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  onChange={(e) => {
                    addFiles(e.target.files);
                    e.target.value = '';
                  }}
                />
              </div>
              {errors.images ? <span className="ad-error-text">{errors.images}</span> : null}

              {form.images.length ? (
                <div className="ad-previews">
                  {form.images.map((src, i) => (
                    <div key={`${src.slice(-24)}-${i}`} className={`ad-preview${i === 0 ? ' is-main' : ''}`}>
                      <img src={src} alt={`Artwork image ${i + 1}`} />
                      {i === 0 ? <span className="ad-preview__flag">Main</span> : null}
                      <div className="ad-preview__bar">
                        <button type="button" onClick={() => moveImage(i, -1)} disabled={i === 0} aria-label="Move left">
                          <ArrowLeft size={14} aria-hidden="true" />
                        </button>
                        <button type="button" onClick={() => makeMain(i)} disabled={i === 0} aria-label="Set as main image">
                          <Star size={14} aria-hidden="true" />
                        </button>
                        <button type="button" onClick={() => moveImage(i, 1)} disabled={i === form.images.length - 1} aria-label="Move right">
                          <ArrowRight size={14} aria-hidden="true" />
                        </button>
                        <button type="button" onClick={() => removeImage(i)} aria-label="Remove image">
                          <Trash2 size={14} aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </fieldset>
          </div>
        </section>

        {/* --------------------------- shipping ------------------------- */}
        <section className="ad-card">
          <div className="ad-card__body">
            <fieldset className="ad-fieldset">
              <legend className="ad-fieldset__legend">Shipping</legend>
              <p className="ad-fieldset__hint">Turn shipping off for pieces that are collected in person.</p>

              <div className="ad-switch">
                <span className="ad-switch__text">
                  <strong>Offer shipping</strong>
                  <span>Buyers outside your city can order this piece.</span>
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={form.shippingAvailable}
                  aria-label="Offer shipping"
                  className={`ad-toggle${form.shippingAvailable ? ' is-on' : ''}`}
                  onClick={() => set('shippingAvailable', !form.shippingAvailable)}
                />
              </div>

              {form.shippingAvailable ? (
                <div className="ad-fields" style={{ marginTop: 14 }}>
                  <div className="ad-field">
                    <label htmlFor="shippingPrice">Shipping price (₹)</label>
                    <input
                      id="shippingPrice"
                      type="number"
                      min="0"
                      className={`ad-input${errors.shippingPrice ? ' has-error' : ''}`}
                      value={form.shippingPrice}
                      onChange={(e) => set('shippingPrice', e.target.value)}
                      placeholder="1200"
                    />
                    {errors.shippingPrice ? <span className="ad-error-text">{errors.shippingPrice}</span> : null}
                  </div>
                  <div className="ad-field">
                    <label htmlFor="deliveryTime">Estimated delivery</label>
                    <input
                      id="deliveryTime"
                      className="ad-input"
                      value={form.deliveryTime}
                      onChange={(e) => set('deliveryTime', e.target.value)}
                      placeholder="7–10 days"
                    />
                  </div>
                </div>
              ) : null}
            </fieldset>
          </div>
        </section>

        <div className="ad-btn-row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="ad-btn ad-btn--ghost" onClick={() => submit('Draft')}>
            <Save size={16} aria-hidden="true" /> Save as draft
          </button>
          <button type="button" className="ad-btn ad-btn--primary" onClick={() => submit('Published')}>
            <Upload size={16} aria-hidden="true" /> {editing ? 'Update and publish' : 'Publish artwork'}
          </button>
        </div>
      </form>
    </div>
  );
}
