import React, { useState } from 'react';

export default function UserProfileDashboard() {
  const [activeTab, setActiveTab] = useState('Personal Information');
  
  const [formData, setFormData] = useState({
    name: 'Margaux Vance-Delacroix',
    email: 'm.delacroix@chateaulux.art',
    phone: '+44 (0) 7911 849201',
    currency: 'USD ($)',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navItems = [
    { label: 'Personal Information', hasDot: true },
    { label: 'Orders', count: 2 },
    { label: 'Saved Addresses', count: 2 },
    { label: 'Wishlist', count: 4 },
    { label: 'Custom Requests', count: 1 },
    { label: 'Followed Artists', count: 3 },
    { label: 'Messages', count: 1 },
    { label: 'Security' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF4ED] p-4 sm:p-6 lg:p-12 font-sans text-neutral-800">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* PROFILE HEADER CARD */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/60 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
              alt="Margaux Vance-Delacroix"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-neutral-200"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-serif font-semibold text-neutral-900">
                Margaux Vance-Delacroix
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">
                m.delacroix@chateaulux.art
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mt-2 font-medium">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Member since 2022</span>
              </div>
            </div>
          </div>

          <button className="self-end sm:self-center bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-medium px-4 py-2 rounded-lg border border-neutral-200 transition-colors flex items-center gap-2 shadow-2xs cursor-pointer">
            <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span>Edit Profile</span>
          </button>
        </div>

        {/* MAIN DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT SIDEBAR NAVIGATION */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-3 border border-neutral-200/60 shadow-xs space-y-1">
            {navItems.map((item, idx) => {
              const isActive = activeTab === item.label;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(item.label)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FAF0E6] text-neutral-900 font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <SidebarIcon label={item.label} />
                    <span>{item.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.hasDot && (
                      <span className="w-2 h-2 rounded-full bg-[#8C4A27]"></span>
                    )}
                    {item.count !== undefined && (
                      <span className="text-[10px] text-neutral-400 font-normal">
                        {item.count}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}

            <div className="pt-3 mt-3 border-t border-neutral-100">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium text-neutral-600 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT CARDS */}
          <div className="lg:col-span-8 space-y-6">

            {/* PERSONAL INFORMATION FORM */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/60 shadow-xs">
              <h2 className="text-xl font-serif font-semibold text-neutral-900 mb-1">
                Personal Information
              </h2>
              <p className="text-xs text-neutral-500 font-normal mb-6">
                Update your details and communication preferences.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-400 mb-1.5">
                      First & Last Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-xs text-neutral-800 focus:outline-none focus:border-[#8C4A27] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-neutral-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-xs text-neutral-800 focus:outline-none focus:border-[#8C4A27] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-400 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-xs text-neutral-800 focus:outline-none focus:border-[#8C4A27] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-neutral-400 mb-1.5">
                      Preferred Currency
                    </label>
                    <div className="relative">
                      <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-neutral-200 rounded-lg px-3.5 py-2.5 text-xs text-neutral-800 appearance-none focus:outline-none focus:border-[#8C4A27] transition-colors cursor-pointer"
                      >
                        <option value="USD ($)">USD ($)</option>
                        <option value="EUR (€)">EUR (€)</option>
                        <option value="GBP (£)">GBP (£)</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="bg-[#7C361A] hover:bg-[#682D15] text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="bg-[#FAF0E6] hover:bg-[#F3E5D8] text-neutral-700 text-xs font-medium px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            {/* RECENT ORDERS CARD */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/60 shadow-xs">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-serif font-semibold text-neutral-900">
                  Recent Orders
                </h2>
                <button className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer">
                  View all
                </button>
              </div>

              <div className="space-y-3">
                <div className="bg-[#FAF0E6]/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xs font-semibold text-neutral-900">
                      Resonance in Sienna No. IV
                    </h3>
                    <p className="text-[11px] text-neutral-500 mt-0.5">
                      by Elora Vance • $4,800
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="bg-white/80 text-neutral-600 text-[10px] font-medium px-2.5 py-1 rounded-md">
                      In Transit
                    </span>
                    <button className="text-xs font-medium text-neutral-800 hover:text-[#7C361A] transition-colors flex items-center gap-1 cursor-pointer">
                      <span>Track Package</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-[#FAF0E6]/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xs font-semibold text-neutral-900">
                      Volcanic Relic Amphora No. 12
                    </h3>
                    <p className="text-[11px] text-neutral-500 mt-0.5">
                      by Kenzo Takahashi • $1,250
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="bg-white/80 text-neutral-600 text-[10px] font-medium px-2.5 py-1 rounded-md">
                      Delivered
                    </span>
                    <button className="text-xs font-medium text-neutral-800 hover:text-[#7C361A] transition-colors flex items-center gap-1 cursor-pointer">
                      <span>View Invoice</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SAVED ADDRESSES CARD */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/60 shadow-xs">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-serif font-semibold text-neutral-900">
                  Saved Addresses
                </h2>
                <button className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer">
                  + Add Address
                </button>
              </div>

              <div className="bg-[#FAF0E6]/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-semibold text-neutral-900">
                      The Devon Coast Estate
                    </h3>
                    <span className="bg-white/80 text-neutral-500 text-[10px] font-medium px-2 py-0.5 rounded-md">
                      Default
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    742 Evergreen Terrace, Dartmouth, South Devon, TQ6 OLR, UK
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-neutral-600 shrink-0 self-end sm:self-center">
                  <button className="hover:text-neutral-900 transition-colors cursor-pointer">
                    Edit
                  </button>
                  <span className="text-neutral-300">•</span>
                  <button className="hover:text-red-600 transition-colors cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

// NAVIGATION ICON HELPER COMPONENT
function SidebarIcon({ label }) {
  const iconClass = "w-4 h-4 text-neutral-600 shrink-0";

  switch (label) {
    case 'Personal Information':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case 'Orders':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case 'Saved Addresses':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'Wishlist':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'Custom Requests':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      );
    case 'Followed Artists':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'Messages':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'Security':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    default:
      return null;
  }
}