import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, LifeBuoy, RotateCcw } from 'lucide-react';
import Modal, { ConfirmDialog } from '../../Components/ArtistDashboard/Modal';
import { ToggleRow } from '../../Components/ArtistDashboard/UIKit';
import { useArtistData } from '../../data/ArtistDataContext';
import { ARTIST_LOGIN_ROUTE, logoutArtist } from '../../utils/artistAuth';

export default function Settings() {
  const { profile, settings, actions, toast } = useArtistData();
  const navigate = useNavigate();

  const [account, setAccount] = useState({ name: profile.name, email: profile.email, phone: profile.phone });
  const [accountErrors, setAccountErrors] = useState({});
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [password, setPassword] = useState({ current: '', next: '', confirm: '' });
  const [passwordError, setPasswordError] = useState('');
  const [deactivate, setDeactivate] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [payment, setPayment] = useState({
    method: settings.paymentMethod,
    bankName: settings.bankName,
    accountName: settings.accountName,
    upi: settings.upi,
  });

  const saveAccount = () => {
    const next = {};
    if (!account.name.trim()) next.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(account.email)) next.email = 'Enter a valid email address.';
    if (account.phone && account.phone.replace(/\D/g, '').length < 10) next.phone = 'Enter a valid phone number.';
    setAccountErrors(next);
    if (Object.keys(next).length) {
      toast('Check the highlighted fields.', 'error');
      return;
    }
    actions.updateProfile(account);
    toast('Account details saved.');
  };

  const savePassword = () => {
    if (!password.current) {
      setPasswordError('Enter your current password.');
      return;
    }
    if (password.next.length < 8) {
      setPasswordError('New passwords need at least 8 characters.');
      return;
    }
    if (password.next !== password.confirm) {
      setPasswordError('The two new passwords do not match.');
      return;
    }
    setPassword({ current: '', next: '', confirm: '' });
    setPasswordError('');
    setPasswordOpen(false);
    toast('Password changed.');
  };

  const savePayment = () => {
    actions.updateSettings({
      paymentMethod: payment.method,
      bankName: payment.bankName,
      accountName: payment.accountName,
      upi: payment.upi,
    });
    toast('Payment details saved.');
  };

  return (
    <div className="ad-stack">
      <div className="ad-page-head">
        <div>
          <h1 className="ad-title">Settings</h1>
          <p className="ad-subtitle">Account details, payouts, and what your store accepts.</p>
        </div>
      </div>

      {/* ---------------------------- account ---------------------------- */}
      <section className="ad-card">
        <div className="ad-card__body">
          <fieldset className="ad-fieldset">
            <legend className="ad-fieldset__legend">Account</legend>
            <p className="ad-fieldset__hint">How ArtNest reaches you about orders and payouts.</p>
            <div className="ad-fields">
              <div className="ad-field">
                <label htmlFor="set-name">Name</label>
                <input
                  id="set-name"
                  className={`ad-input${accountErrors.name ? ' has-error' : ''}`}
                  value={account.name}
                  onChange={(e) => setAccount((a) => ({ ...a, name: e.target.value }))}
                />
                {accountErrors.name ? <span className="ad-error-text">{accountErrors.name}</span> : null}
              </div>
              <div className="ad-field">
                <label htmlFor="set-email">Email</label>
                <input
                  id="set-email"
                  type="email"
                  className={`ad-input${accountErrors.email ? ' has-error' : ''}`}
                  value={account.email}
                  onChange={(e) => setAccount((a) => ({ ...a, email: e.target.value }))}
                />
                {accountErrors.email ? <span className="ad-error-text">{accountErrors.email}</span> : null}
              </div>
              <div className="ad-field">
                <label htmlFor="set-phone">Phone</label>
                <input
                  id="set-phone"
                  className={`ad-input${accountErrors.phone ? ' has-error' : ''}`}
                  value={account.phone}
                  onChange={(e) => setAccount((a) => ({ ...a, phone: e.target.value }))}
                />
                {accountErrors.phone ? <span className="ad-error-text">{accountErrors.phone}</span> : null}
              </div>
            </div>
            <div className="ad-btn-row" style={{ marginTop: 16 }}>
              <button type="button" className="ad-btn ad-btn--primary" onClick={saveAccount}>Save account details</button>
            </div>
          </fieldset>
        </div>
      </section>

      {/* ---------------------------- security --------------------------- */}
      <section className="ad-card">
        <div className="ad-card__body">
          <fieldset className="ad-fieldset">
            <legend className="ad-fieldset__legend">Security</legend>
            <p className="ad-fieldset__hint">Keep your store and payouts protected.</p>
            <div className="ad-switch">
              <span className="ad-switch__text">
                <strong>Password</strong>
                <span>Last changed 3 months ago.</span>
              </span>
              <button type="button" className="ad-btn ad-btn--ghost ad-btn--sm" onClick={() => setPasswordOpen(true)}>
                Change password
              </button>
            </div>
            <ToggleRow
              title="Two-factor authentication"
              description="Ask for a code from your phone at every login."
              checked={settings.twoFactor}
              onChange={(v) => {
                actions.updateSettings({ twoFactor: v });
                toast(v ? 'Two-factor authentication is on.' : 'Two-factor authentication is off.');
              }}
            />
          </fieldset>
        </div>
      </section>

      {/* -------------------------- notifications ------------------------ */}
      <section className="ad-card">
        <div className="ad-card__body">
          <fieldset className="ad-fieldset">
            <legend className="ad-fieldset__legend">Notifications</legend>
            <p className="ad-fieldset__hint">Choose what reaches your inbox.</p>
            <ToggleRow title="Email notifications" description="A weekly summary of store activity." checked={settings.emailNotifications} onChange={(v) => actions.updateSettings({ emailNotifications: v })} />
            <ToggleRow title="Order notifications" description="Every new order and status change." checked={settings.orderNotifications} onChange={(v) => actions.updateSettings({ orderNotifications: v })} />
            <ToggleRow title="Message notifications" description="When a collector writes to you." checked={settings.messageNotifications} onChange={(v) => actions.updateSettings({ messageNotifications: v })} />
            <ToggleRow title="Review notifications" description="When someone reviews a piece." checked={settings.reviewNotifications} onChange={(v) => actions.updateSettings({ reviewNotifications: v })} />
          </fieldset>
        </div>
      </section>

      {/* ----------------------------- payment --------------------------- */}
      <section className="ad-card">
        <div className="ad-card__body">
          <fieldset className="ad-fieldset">
            <legend className="ad-fieldset__legend">Payment</legend>
            <p className="ad-fieldset__hint">Where your earnings are sent when you withdraw.</p>
            <div className="ad-fields">
              <div className="ad-field">
                <label htmlFor="pay-method">Payment method</label>
                <select id="pay-method" className="ad-select" value={payment.method} onChange={(e) => setPayment((p) => ({ ...p, method: e.target.value }))}>
                  <option>Bank transfer</option>
                  <option>UPI</option>
                  <option>PayPal</option>
                </select>
              </div>
              {payment.method === 'UPI' ? (
                <div className="ad-field">
                  <label htmlFor="pay-upi">UPI ID</label>
                  <input id="pay-upi" className="ad-input" value={payment.upi} onChange={(e) => setPayment((p) => ({ ...p, upi: e.target.value }))} />
                </div>
              ) : (
                <>
                  <div className="ad-field">
                    <label htmlFor="pay-bank">Bank</label>
                    <input id="pay-bank" className="ad-input" value={payment.bankName} onChange={(e) => setPayment((p) => ({ ...p, bankName: e.target.value }))} />
                  </div>
                  <div className="ad-field">
                    <label htmlFor="pay-account">Account holder</label>
                    <input id="pay-account" className="ad-input" value={payment.accountName} onChange={(e) => setPayment((p) => ({ ...p, accountName: e.target.value }))} />
                  </div>
                  <div className="ad-field">
                    <label htmlFor="pay-last4">Account</label>
                    <input id="pay-last4" className="ad-input" value={`•••• ${settings.accountLast4}`} readOnly tabIndex={-1} />
                    <span className="ad-hint">Contact support to change the linked account number.</span>
                  </div>
                </>
              )}
            </div>
            <div className="ad-btn-row" style={{ marginTop: 16 }}>
              <button type="button" className="ad-btn ad-btn--primary" onClick={savePayment}>Save payment details</button>
            </div>
          </fieldset>
        </div>
      </section>

      {/* ------------------------------ store ---------------------------- */}
      <section className="ad-card">
        <div className="ad-card__body">
          <fieldset className="ad-fieldset">
            <legend className="ad-fieldset__legend">Store</legend>
            <p className="ad-fieldset__hint">Control what buyers can do while you're away.</p>
            <ToggleRow title="Store visibility" description="Show your profile and artworks in the ArtNest marketplace." checked={settings.storeVisible} onChange={(v) => { actions.updateSettings({ storeVisible: v }); toast(v ? 'Your store is visible.' : 'Your store is hidden from the marketplace.', 'info'); }} />
            <ToggleRow title="Accept orders" description="Let buyers purchase available pieces." checked={settings.acceptOrders} onChange={(v) => actions.updateSettings({ acceptOrders: v })} />
            <ToggleRow title="Accept custom requests" description="Let buyers commission new work from you." checked={settings.acceptCustomRequests} onChange={(v) => actions.updateSettings({ acceptCustomRequests: v })} />
          </fieldset>
        </div>
      </section>

      {/* ------------------------------ help ----------------------------- */}
      <section className="ad-card">
        <div className="ad-card__body" style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="ad-stat__icon"><LifeBuoy size={18} aria-hidden="true" /></span>
          <div style={{ flex: 1, minWidth: 220 }}>
            <strong style={{ fontFamily: 'var(--ad-font-display)', fontSize: '1.02rem' }}>Help &amp; support</strong>
            <p className="ad-muted" style={{ margin: '3px 0 0' }}>
              Questions about payouts, shipping or a difficult order? The ArtNest team replies within a working day.
            </p>
          </div>
          <button type="button" className="ad-btn ad-btn--ghost" onClick={() => navigate('/artist/messages')}>
            Contact support
          </button>
          <button type="button" className="ad-btn ad-btn--ghost" onClick={() => setResetOpen(true)}>
            <RotateCcw size={15} aria-hidden="true" /> Reset demo data
          </button>
        </div>
      </section>

      {/* --------------------------- danger zone -------------------------- */}
      <section className="ad-card" style={{ borderColor: 'var(--ad-danger-text)' }}>
        <div className="ad-card__head" style={{ borderColor: 'var(--ad-danger-text)' }}>
          <h2 className="ad-section-title" style={{ color: 'var(--ad-danger-text)' }}>Danger zone</h2>
        </div>
        <div className="ad-card__body" style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <strong style={{ fontSize: '0.92rem' }}>Deactivate account</strong>
            <p className="ad-muted" style={{ margin: '3px 0 0' }}>
              Your store closes and your artworks are hidden. Pending orders must be completed first.
            </p>
          </div>
          <button type="button" className="ad-btn ad-btn--danger" onClick={() => setDeactivate(true)}>
            Deactivate account
          </button>
        </div>
      </section>

      {/* --------------------------- modals ------------------------------ */}
      <Modal
        open={passwordOpen}
        title="Change password"
        description="Use at least 8 characters, including a number."
        onClose={() => { setPasswordOpen(false); setPasswordError(''); }}
        footer={
          <>
            <button type="button" className="ad-btn ad-btn--ghost" onClick={() => setPasswordOpen(false)}>Cancel</button>
            <button type="button" className="ad-btn ad-btn--primary" onClick={savePassword}>
              <ShieldCheck size={15} aria-hidden="true" /> Change password
            </button>
          </>
        }
      >
        <div className="ad-fields">
          <div className="ad-field ad-field--wide">
            <label htmlFor="pw-current">Current password</label>
            <input id="pw-current" type="password" className="ad-input" value={password.current} onChange={(e) => { setPassword((p) => ({ ...p, current: e.target.value })); setPasswordError(''); }} />
          </div>
          <div className="ad-field ad-field--wide">
            <label htmlFor="pw-next">New password</label>
            <input id="pw-next" type="password" className="ad-input" value={password.next} onChange={(e) => { setPassword((p) => ({ ...p, next: e.target.value })); setPasswordError(''); }} />
          </div>
          <div className="ad-field ad-field--wide">
            <label htmlFor="pw-confirm">Confirm new password</label>
            <input id="pw-confirm" type="password" className="ad-input" value={password.confirm} onChange={(e) => { setPassword((p) => ({ ...p, confirm: e.target.value })); setPasswordError(''); }} />
          </div>
          {passwordError ? <span className="ad-error-text">{passwordError}</span> : null}
        </div>
      </Modal>

      <ConfirmDialog
        open={deactivate}
        title="Deactivate your artist account?"
        message="Your store closes immediately and your artworks are hidden from the marketplace. You'll be signed out."
        confirmLabel="Deactivate account"
        destructive
        onConfirm={() => {
          actions.updateSettings({ accountActive: false, storeVisible: false });
          logoutArtist();
          navigate(ARTIST_LOGIN_ROUTE, { replace: true });
        }}
        onClose={() => setDeactivate(false)}
      />

      <ConfirmDialog
        open={resetOpen}
        title="Reset demo data?"
        message="Every change you've made in this dashboard is replaced with the original sample catalogue, orders and messages."
        confirmLabel="Reset data"
        destructive
        onConfirm={() => {
          actions.restoreDemoData();
          toast('Demo data restored.', 'info');
        }}
        onClose={() => setResetOpen(false)}
      />
    </div>
  );
}
