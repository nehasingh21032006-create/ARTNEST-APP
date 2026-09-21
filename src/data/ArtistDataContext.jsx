import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { loadState, persistState, resetState, finalPrice } from './artistData';

const ArtistDataContext = createContext(null);

let toastSeq = 0;
const newId = (prefix) => `${prefix}-${Date.now().toString(36)}${(toastSeq++).toString(36)}`;

export function ArtistDataProvider({ children }) {
  const [state, setState] = useState(loadState);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    persistState(state);
  }, [state]);

  const dismissToast = useCallback((id) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (message, tone = 'success') => {
      const id = newId('toast');
      setToasts((list) => [...list, { id, message, tone }]);
      window.setTimeout(() => dismissToast(id), 4000);
    },
    [dismissToast],
  );

  /* ---------------------------- artworks ---------------------------- */
  const addArtwork = useCallback(
    (artwork, status) => {
      const id = `ART-${1049 + Math.floor(Math.random() * 900)}`;
      const record = {
        ...artwork,
        id,
        status,
        views: 0,
        likes: 0,
        sales: 0,
        createdAt: new Date().toISOString(),
      };
      setState((s) => ({ ...s, artworks: [record, ...s.artworks] }));
      return record;
    },
    [],
  );

  const updateArtwork = useCallback((id, patch) => {
    setState((s) => ({
      ...s,
      artworks: s.artworks.map((a) => (a.id === id ? { ...a, ...patch } : a)),
    }));
  }, []);

  const deleteArtwork = useCallback((id) => {
    setState((s) => ({ ...s, artworks: s.artworks.filter((a) => a.id !== id) }));
  }, []);

  const duplicateArtwork = useCallback((id) => {
    setState((s) => {
      const source = s.artworks.find((a) => a.id === id);
      if (!source) return s;
      const copy = {
        ...source,
        id: `ART-${1049 + Math.floor(Math.random() * 900)}`,
        title: `${source.title} (copy)`,
        status: 'Draft',
        views: 0,
        likes: 0,
        sales: 0,
        createdAt: new Date().toISOString(),
      };
      return { ...s, artworks: [copy, ...s.artworks] };
    });
  }, []);

  const toggleArtworkStatus = useCallback((id) => {
    setState((s) => ({
      ...s,
      artworks: s.artworks.map((a) =>
        a.id === id
          ? { ...a, status: a.status === 'Published' ? 'Draft' : 'Published' }
          : a,
      ),
    }));
  }, []);

  /* ----------------------------- orders ----------------------------- */
  const updateOrderStatus = useCallback((id, status) => {
    setState((s) => ({
      ...s,
      orders: s.orders.map((o) => (o.id === id ? { ...o, status } : o)),
    }));
  }, []);

  /* ------------------------ custom requests ------------------------- */
  const updateRequestStatus = useCallback((id, status) => {
    setState((s) => ({
      ...s,
      requests: s.requests.map((r) => (r.id === id ? { ...r, status } : r)),
    }));
  }, []);

  const submitProposal = useCallback((id, proposal) => {
    setState((s) => ({
      ...s,
      requests: s.requests.map((r) =>
        r.id === id ? { ...r, proposal, status: r.status === 'New' ? 'Reviewing' : r.status } : r,
      ),
    }));
  }, []);

  /* ----------------------------- reviews ---------------------------- */
  const replyToReview = useCallback((id, reply) => {
    setState((s) => ({
      ...s,
      reviews: s.reviews.map((r) => (r.id === id ? { ...r, reply } : r)),
    }));
  }, []);

  /* ---------------------------- messages ---------------------------- */
  const sendMessage = useCallback((conversationId, text, attachment = null) => {
    setState((s) => ({
      ...s,
      conversations: s.conversations.map((c) =>
        c.id === conversationId
          ? {
              ...c,
              messages: [
                ...c.messages,
                {
                  id: newId('m'),
                  from: 'artist',
                  text,
                  attachment,
                  at: new Date().toISOString(),
                },
              ],
            }
          : c,
      ),
    }));
  }, []);

  const markConversationRead = useCallback((conversationId) => {
    setState((s) => ({
      ...s,
      conversations: s.conversations.map((c) =>
        c.id === conversationId ? { ...c, unread: 0 } : c,
      ),
    }));
  }, []);

  const startConversation = useCallback((customerId, text) => {
    let created = null;
    setState((s) => {
      const existing = s.conversations.find((c) => c.customerId === customerId);
      if (existing) {
        created = existing.id;
        return {
          ...s,
          conversations: s.conversations.map((c) =>
            c.id === existing.id
              ? {
                  ...c,
                  messages: [
                    ...c.messages,
                    { id: newId('m'), from: 'artist', text, at: new Date().toISOString() },
                  ],
                }
              : c,
          ),
        };
      }
      const conversation = {
        id: newId('CNV'),
        customerId,
        unread: 0,
        messages: [{ id: newId('m'), from: 'artist', text, at: new Date().toISOString() }],
      };
      created = conversation.id;
      return { ...s, conversations: [conversation, ...s.conversations] };
    });
    return created;
  }, []);

  /* -------------------------- notifications ------------------------- */
  const markNotificationsRead = useCallback(() => {
    setState((s) => ({
      ...s,
      notifications: s.notifications.map((n) => ({ ...n, read: true })),
    }));
  }, []);

  const markNotificationRead = useCallback((id) => {
    setState((s) => ({
      ...s,
      notifications: s.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
    }));
  }, []);

  /* ---------------------------- earnings ---------------------------- */
  const withdraw = useCallback((amount, method) => {
    setState((s) => ({
      ...s,
      withdrawn: s.withdrawn + amount,
      transactions: [
        {
          id: newId('TXN'),
          orderId: '—',
          date: new Date().toISOString(),
          amount: -amount,
          fee: 0,
          status: 'Processing',
          note: `Withdrawal via ${method}`,
        },
        ...s.transactions,
      ],
    }));
  }, []);

  /* -------------------------- profile & settings -------------------- */
  const updateProfile = useCallback((patch) => {
    setState((s) => ({ ...s, profile: { ...s.profile, ...patch } }));
  }, []);

  const updateSettings = useCallback((patch) => {
    setState((s) => ({ ...s, settings: { ...s.settings, ...patch } }));
  }, []);

  const restoreDemoData = useCallback(() => {
    setState(resetState());
  }, []);

  /* ---------------------------- selectors --------------------------- */
  const derived = useMemo(() => {
    const { artworks, orders, transactions, reviews, conversations, notifications } = state;
    const live = orders.filter((o) => o.status !== 'Cancelled');
    const now = Date.now();
    const inWindow = (o, from, to) => {
      const t = new Date(o.date).getTime();
      return t >= now - from * 86400000 && t < now - to * 86400000;
    };
    const last30 = live.filter((o) => inWindow(o, 30, 0));
    const prev30 = live.filter((o) => inWindow(o, 60, 30));
    const sum = (list) => list.reduce((acc, o) => acc + o.amount, 0);
    const pctChange = (current, previous) =>
      previous === 0 ? (current === 0 ? 0 : 100) : ((current - previous) / previous) * 100;

    const gross = sum(live);
    const fees = transactions
      .filter((t) => t.amount > 0 && t.status !== 'Cancelled')
      .reduce((acc, t) => acc + t.fee, 0);
    const netEarnings = transactions
      .filter((t) => t.amount > 0 && t.status !== 'Cancelled')
      .reduce((acc, t) => acc + (t.amount - t.fee), 0);
    const pendingBalance = transactions
      .filter((t) => t.status === 'Processing' && t.amount > 0)
      .reduce((acc, t) => acc + (t.amount - t.fee), 0);

    return {
      totalRevenue: gross,
      revenueChange: pctChange(sum(last30), sum(prev30)),
      totalOrders: live.length,
      ordersChange: pctChange(last30.length, prev30.length),
      pendingOrders: orders.filter((o) => o.status === 'Pending').length,
      publishedCount: artworks.filter((a) => a.status === 'Published').length,
      draftCount: artworks.filter((a) => a.status === 'Draft').length,
      totalViews: artworks.reduce((acc, a) => acc + a.views, 0),
      totalLikes: artworks.reduce((acc, a) => acc + a.likes, 0),
      unreadMessages: conversations.reduce((acc, c) => acc + c.unread, 0),
      unreadNotifications: notifications.filter((n) => !n.read).length,
      newRequests: state.requests.filter((r) => r.status === 'New').length,
      averageRating: reviews.length
        ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        : 0,
      totalEarnings: netEarnings,
      platformFees: fees,
      pendingBalance,
      availableBalance: Math.max(netEarnings - pendingBalance - state.withdrawn, 0),
    };
  }, [state]);

  const lookup = useMemo(
    () => ({
      artwork: (id) => state.artworks.find((a) => a.id === id),
      customer: (id) => state.customers.find((c) => c.id === id),
    }),
    [state.artworks, state.customers],
  );

  const value = useMemo(
    () => ({
      ...state,
      derived,
      lookup,
      toast,
      finalPrice,
      actions: {
        addArtwork,
        updateArtwork,
        deleteArtwork,
        duplicateArtwork,
        toggleArtworkStatus,
        updateOrderStatus,
        updateRequestStatus,
        submitProposal,
        replyToReview,
        sendMessage,
        markConversationRead,
        startConversation,
        markNotificationsRead,
        markNotificationRead,
        withdraw,
        updateProfile,
        updateSettings,
        restoreDemoData,
      },
    }),
    [
      state, derived, lookup, toast,
      addArtwork, updateArtwork, deleteArtwork, duplicateArtwork, toggleArtworkStatus,
      updateOrderStatus, updateRequestStatus, submitProposal, replyToReview,
      sendMessage, markConversationRead, startConversation,
      markNotificationsRead, markNotificationRead, withdraw,
      updateProfile, updateSettings, restoreDemoData,
    ],
  );

  return (
    <ArtistDataContext.Provider value={value}>
      {children}
      <div className="ad-toasts" role="status" aria-live="polite">
        {toasts.map((t) => {
          const Icon = t.tone === 'error' ? AlertCircle : t.tone === 'info' ? Info : CheckCircle2;
          return (
            <div key={t.id} className={`ad-toast ad-toast--${t.tone}`}>
              <Icon size={18} aria-hidden="true" />
              <span>{t.message}</span>
              <button type="button" onClick={() => dismissToast(t.id)} aria-label="Dismiss">
                <X size={15} aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>
    </ArtistDataContext.Provider>
  );
}

export function useArtistData() {
  const ctx = useContext(ArtistDataContext);
  if (!ctx) {
    throw new Error('useArtistData must be used inside <ArtistDataProvider>.');
  }
  return ctx;
}
