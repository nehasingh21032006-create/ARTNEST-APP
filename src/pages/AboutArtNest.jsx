import React from "react";
import {
  ArrowDown,
  ShieldCheck,
  ScrollText,
  PenLine,
  Quote,
  Hourglass,
  Scale,
  Fingerprint,
  Hammer,
  WalletCards,
  Building2,
  Palette,
  Handshake,
  ArrowRight
} from "lucide-react";

import { FaGraduationCap, FaLandmark, FaMapPin, FaCompass } from "react-icons/fa";


const curators = [
  {
    name: "Clara Moreau",
    role: "Curatorial Director",
    location: "Paris",
    badge: "CO-FOUNDER",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
    description:
      "Formerly of Louvre Conservation & Musée d’Orsay. Oversees historical provenance authentication, ceramic glaze durability, and textile preservation protocols.",
    education: "Sorbonne Art History (Ph.D.)",
    icon: FaGraduationCap,
  },
  {
    name: "Julian H. Mercer",
    role: "Private Advisory & Commissions",
    location: "",
    badge: "CO-FOUNDER",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
    description:
      "16+ years counseling private collections and family foundations in Mayfair and Manhattan. Specializes in multi-month monumental sculpture commissions.",
    education: "Courtauld Institute of Art",
    icon: FaLandmark,
  },
  {
    name: "Kenzo Takahashi",
    role: "Traditional Kiln Arts",
    location: "Kyoto",
    badge: "ADVISORY BOARD",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
    description:
      "Fifth-generation ceramicist specializing in wood-fired anagama kilns, natural ash glaze chemistry, and heritage pottery safeguarding across East Asia.",
    education: "Kyoto Arts Guild Fellow",
    icon: FaMapPin,
  },
  {
    name: "Astrid Lindholm",
    role: "Spatial Integration",
    location: "Stockholm",
    badge: "ARCHITECTURE LEAD",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85",
    description:
      "Architectural advisor ensuring large-scale travertine installations, hand-loomed fiber works, and stone plinths harmonize with contemporary interior spaces.",
    education: "Royal Danish Academy",
    icon: FaCompass,
  },
];


const pillars = [
  {
    number: "PILLAR I",
    title: "Uncompromising Provenance",
    description:
      "Every painting, sculpture, and vessel carries a tamper-evident physical cotton-rag deed, authenticated foundry cachet, and an indelible studio registry number linked directly to the creator's personal atelier logs.",
    icon: ShieldCheck,
    badgeIcon: Fingerprint,
    badge: "TAMPER-PROOF ARCHIVAL SEAL",
  },
  {
    number: "PILLAR II",
    title: "The Slow Craft Pledge",
    description:
      "We never host mass-manufactured cast resin replicas, generative artificial prints, or drop-shipped home decor. Every piece represents weeks or months of unhurried, tangible devotion to authentic tactile mediums.",
    icon: Hourglass,
    badgeIcon: Hammer,
    badge: "100% HUMAN-CRAFTED EXECUTION",
  },
  {
    number: "PILLAR III",
    title: "Empowered Artisan Equity",
    description:
      "Creators preserve sovereign studio freedom. They set their own valuation, control reproduction editions, and collect staged escrow advances to ensure sustainable material sourcing before carving or casting begins.",
    icon: Scale,
    badgeIcon: WalletCards,
    badge: "87% DIRECT CREATOR PAYOUT",
  },
];

const stats = [
  {
    title: "MASTER ARTISANS",
    value: "480+",
    description: "Juried independent studios",
  },
  {
    title: "GLOBAL REACH",
    value: "34",
    description: "Nations & indigenous craft traditions",
  },
  {
    title: "FAIR ARTISAN EQUITY",
    value: "87%",
    description: "Direct commission & sale yield",
  },
  {
    title: "WHITE-GLOVE INTEGRITY",
    value: "100%",
    description: "Custom crafted museum transit",
  },
];

const AboutArtNest = () => {
  return (
    <main className="w-full bg-[#fcf6f0] text-[#29211d]">

      {/* =====================================================
          SECTION 1 - ABOUT ARTNEST
      ====================================================== */}

      <section className="min-h-screen px-5 py-8 sm:px-8 md:px-10 lg:px-14 xl:px-[4.7%]">

        {/* Top Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.08em] text-[#755e50]">
            <span>HOME</span>

            <span className="text-[#b9a293]">/</span>

            <span className="font-semibold text-[#211a16]">
              ABOUT ARTNEST
            </span>
          </div>

          {/* Manifesto Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f8eadc] px-4 py-2 text-[11px] font-semibold tracking-[0.04em] text-[#754832] shadow-sm">
            <ScrollText size={13} strokeWidth={1.8} />

            <span>
              OUR MANIFESTO &amp; ORIGIN • FOUNDED 2021
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_318px] xl:gap-16">

          {/* Left Content */}
          <div>
            <h1 className="max-w-[850px] font-serif text-[46px] leading-[0.99] tracking-[-0.035em] text-[#27201c] sm:text-[56px] md:text-[62px] lg:text-[58px] xl:text-[62px]">
              Preserving Human Tactility in
              <br className="hidden md:block" />
              an Era of Mass Reproduction
            </h1>

            <p className="mt-6 max-w-[720px] text-[17px] leading-[1.65] tracking-[-0.01em] text-[#5d4d44] sm:text-[18px]">
              ArtNest was conceived as a sanctuary for slow creation—a digital
              salon built to bridge discerning patrons with master ceramicists,
              sculptors, and fine painters without the gatekeeping friction of
              traditional institutions or the sterility of commodity
              marketplaces.
            </p>
          </div>

          {/* Right Manifesto Card */}
          <div className="self-start rounded-[10px] bg-[#fff0e1] px-6 py-7 shadow-[0_2px_10px_rgba(70,45,30,0.04)] sm:px-7 lg:mt-4">

            <div className="flex items-center gap-2 text-[12px] font-medium tracking-[0.04em] text-[#754832]">
              <ShieldCheck size={16} strokeWidth={1.8} />

              <span>ARCHIVAL PROVENANCE PLEDGE</span>
            </div>

            <p className="mt-4 text-[13px] leading-[1.65] text-[#715d50]">
              Every commissioned vessel, pigment stroke, and stone contour
              carries direct unmediated equity, accompanied by our physical
              tamper-evident parchment deed.
            </p>

            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#8b4728] transition-colors hover:text-[#5f2e1b]"
            >
              Explore our three tenets

              <ArrowDown size={14} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="min-h-[153px] rounded-[9px] bg-white px-6 py-6 shadow-[0_1px_5px_rgba(50,35,25,0.025)] transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-[11px] font-medium tracking-[0.1em] text-[#886e5e]">
                {stat.title}
              </p>

              <p className="mt-2 font-serif text-[42px] leading-none tracking-[-0.04em] text-[#17110e]">
                {stat.value}
              </p>

              <p className="mt-1 max-w-[190px] text-[13px] leading-[1.45] text-[#806c60]">
                {stat.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          SECTION 2 - GENESIS & PHILOSOPHY
      ====================================================== */}

      <section className="w-full bg-[#fff3e5] px-5 py-14 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        <div className="mx-auto max-w-[1200px]">

          {/* Main Grid */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">

            {/* =================================================
                LEFT - IMAGE
            ================================================== */}

            <div className="relative pt-6 sm:pt-8 lg:pt-10">

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[6px]">

                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=1200&q=85"
                  alt="Ceramic artist working in an atelier"
                  className="h-[400px] w-full object-cover sm:h-[460px] md:h-[500px] lg:h-[420px] xl:h-[470px]"
                />

                {/* Image Bottom Label */}
                <div className="absolute bottom-3 left-3 right-3 rounded-[3px] bg-white/95 px-4 py-3 sm:bottom-4 sm:left-4 sm:right-auto sm:min-w-[390px]">

                  <p className="text-[9px] font-semibold tracking-[0.08em] text-[#8a5138]">
                    ATELIER DOCUMENT
                  </p>

                  <p className="mt-1 text-[11px] text-[#5c514b]">
                    Clara Moreau evaluating stoneware glaze density
                  </p>

                </div>
              </div>

              {/* Floating Raw Pigment Card */}
              <div className="absolute -bottom-7 right-[-5px] w-[170px] rounded-[8px] bg-[#f9e9d7] px-4 py-4 shadow-[0_10px_25px_rgba(80,50,30,0.12)] sm:-bottom-8 sm:right-[-15px] sm:w-[175px]">

                <div className="flex items-center gap-1.5">

                  <PenLine
                    size={13}
                    strokeWidth={2}
                    className="text-[#8d4c2e]"
                  />

                  <span className="text-[9px] font-bold tracking-[0.06em] text-[#8d4c2e]">
                    RAW PIGMENT
                  </span>

                </div>

                <p className="mt-1 text-[10px] leading-[1.45] text-[#76665d]">
                  Every formula hand-ground from natural ochres, lapis, and
                  crushed minerals.
                </p>

              </div>
            </div>

            {/* =================================================
                RIGHT - CONTENT
            ================================================== */}

            <div className="lg:pl-0 xl:pl-2">

              {/* Small Heading */}
              <p className="text-[9px] font-semibold tracking-[0.12em] text-[#914d31]">
                GENESIS &amp; PHILOSOPHY
              </p>

              {/* Main Heading */}
              <h2 className="mt-3 max-w-[500px] font-serif text-[38px] leading-[1.02] tracking-[-0.035em] text-[#271d18] sm:text-[44px] md:text-[48px]">
                From a Parisian Atelier to a Global Guild
              </h2>

              {/* First Paragraph */}
              <p className="mt-6 max-w-[500px] text-[12px] leading-[1.65] text-[#765d4f] sm:text-[13px]">
                In late 2020, conservator Clara Moreau and art advisory
                consultant Julian H. Mercer watched the gallery system fray.
                Independent artists were routinely surrendering 50% to 60% of
                their commission values to commercial brick-and-mortar
                storefronts that maintained exclusivity waiting lists.
                Concurrently, mass digital platforms commodified fine work,
                reducing monumental stone sculptures and months of ceramic
                firing to frictionless thumbnails.
              </p>

              {/* Second Paragraph */}
              <p className="mt-5 max-w-[500px] text-[12px] leading-[1.65] text-[#765d4f] sm:text-[13px]">
                ArtNest emerged as the deliberate antithesis: an unhurried,
                transparent digital salon that treats digital screens like
                pristine, light-drenched gallery walls. We built direct escrow
                logistics, bespoke timber-crating pipelines, and guaranteed
                that at least 85% of capital flows straight into the hands of
                the individuals who mold, chisel, and glaze.
              </p>

              {/* Quote Card */}
              <div className="relative mt-6 overflow-hidden rounded-[7px] bg-[#fae9d6] px-5 py-5 sm:px-6 sm:py-6">

                {/* Large Quote Icon */}
                <Quote
                  className="absolute right-2 top-1 text-[#ead8c4]"
                  size={55}
                  strokeWidth={2.5}
                />

                {/* Quote */}
                <blockquote className="relative z-10 max-w-[470px] font-serif text-[19px] italic leading-[1.12] tracking-[-0.02em] text-[#211814] sm:text-[20px] md:text-[21px]">
                  “Art should not live behind closed gallery doors or in
                  warehouse catalog grids. It belongs in dialogue between
                  hands that shape matter and souls that dwell with it.”
                </blockquote>

                {/* Authors */}
                <div className="relative z-10 mt-5 flex items-center gap-2.5">

                  {/* Avatar */}
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#954b2a] text-[9px] font-bold text-white">
                    CM
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold text-[#2a211d]">
                      Clara Moreau &amp; Julian H. Mercer
                    </p>

                    <p className="text-[9px] text-[#896e5d]">
                      Co-Founders, ArtNest
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fff8f2] px-5 py-14 sm:px-8 md:px-10 lg:px-[4.7%] lg:py-16 xl:py-20">
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <div className="mb-9">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8d4d31]">
            THE ARTNEST STANDARD
          </p>

          <h2 className="mt-2 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#241c18] sm:text-[44px] md:text-[48px] lg:text-[50px]">
            The Three Pillars of Our Guild
          </h2>

          <p className="mt-2 max-w-[650px] text-[13px] leading-[1.6] text-[#765e51] sm:text-[14px]">
            Strict institutional guidelines upheld across every collection,
            commission, and delivery.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const BadgeIcon = pillar.badgeIcon;

            return (
              <article
                key={pillar.number}
                className="flex min-h-[410px] flex-col rounded-[8px] bg-white px-7 py-9 shadow-[0_1px_5px_rgba(50,35,25,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(50,35,25,0.08)] sm:px-8"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-[7px] bg-[#f9ecdf] text-[#914c2c]">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                {/* Pillar Number */}
                <p className="mt-4 text-[10px] font-medium tracking-[0.08em] text-[#8a6857]">
                  {pillar.number}
                </p>

                {/* Title */}
                <h3 className="mt-2 max-w-[260px] font-serif text-[21px] leading-[1.25] tracking-[-0.015em] text-[#211914]">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[13px] leading-[1.65] text-[#745f53]">
                  {pillar.description}
                </p>

                {/* Bottom Badge */}
                <div className="mt-auto pt-6">
                  <div className="flex min-h-[43px] items-center gap-2 rounded-[4px] bg-[#fff6ed] px-3.5 py-2">
                    <BadgeIcon
                      size={14}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#92502f]"
                    />

                    <span className="text-[10px] font-semibold tracking-[0.045em] text-[#914c2c]">
                      {pillar.badge}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>

    <section className="w-full bg-[#fff3e5] px-5 py-14 sm:px-8 md:px-10 lg:px-[4.7%] lg:py-16">
      <div className="mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="relative mb-8">

          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#914b30]">
            CURATORIAL STEWARDSHIP
          </p>

          <h2 className="mt-2 max-w-[520px] font-serif text-[36px] leading-[1.02] tracking-[-0.035em] text-[#241b17] sm:text-[43px] md:text-[46px]">
            Guided by Curators, Historians &amp; Conservators
          </h2>

          <p className="mt-2 max-w-[510px] text-[12px] leading-[1.55] text-[#765d50] sm:text-[13px]">
            Our jury reviews every artist portfolio through rigorous aesthetic,
            material longevity, and ethical craft standards.
          </p>

          {/* Right side information */}
          <div className="mt-4 text-[10px] text-[#80685a] sm:absolute sm:bottom-0 sm:right-0 sm:mt-0">
            Peer-reviewed admissions
            <span className="mx-2 text-[#9b5435]">•</span>
            Biannual salon jurying
          </div>
        </div>

        {/* ================= CURATOR CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {curators.map((curator) => {
            const EducationIcon = curator.icon;

            return (
              <article
                key={curator.name}
                className="group flex min-h-[405px] flex-col overflow-hidden rounded-[7px] bg-white shadow-[0_1px_5px_rgba(50,35,25,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(60,40,25,0.10)]"
              >

                {/* ================= IMAGE ================= */}
                <div className="relative h-[198px] overflow-hidden">

                  <img
                    src={curator.image}
                    alt={curator.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Badge */}
                  <div className="absolute bottom-0 left-0 bg-white/95 px-3 py-1.5">
                    <span className="text-[9px] font-bold tracking-[0.06em] text-[#965237]">
                      {curator.badge}
                    </span>
                  </div>
                </div>

                {/* ================= CARD CONTENT ================= */}
                <div className="flex flex-1 flex-col px-5 py-4">

                  {/* Name */}
                  <h3 className="font-serif text-[16px] leading-tight text-[#211914]">
                    {curator.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-1 text-[9px] leading-[1.4] text-[#a05032]">
                    {curator.role}
                    {curator.location && (
                      <>
                        <span className="mx-1">•</span>
                        {curator.location}
                      </>
                    )}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-[10.5px] leading-[1.55] text-[#725c50]">
                    {curator.description}
                  </p>

                  {/* Education */}
                  <div className="mt-auto flex items-center gap-1.5 pt-5 text-[9px] font-medium text-[#5e5149]">
                    <EducationIcon
                      size={11}
                      strokeWidth={1.7}
                      className="shrink-0"
                    />

                    <span>{curator.education}</span>
                  </div>
                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>

    <section className="w-full bg-[#fff5ea] px-4 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[18px] bg-gradient-to-br from-[#f9e6d4] via-[#f5e1d1] to-[#f1dfd1] px-6 py-12 shadow-[0_4px_12px_rgba(70,45,30,0.10)] sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-16 lg:py-[72px]">

        {/* Content */}
        <div className="max-w-[900px]">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-bold tracking-[0.05em] text-[#8d4729] shadow-sm sm:text-[11px]">
            <Building2 size={14} strokeWidth={1.9} />
            <span>STEP INSIDE THE ATELIER</span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 max-w-[850px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#241b17] sm:text-[45px] md:text-[50px] lg:text-[54px]">
            Discover pieces created to outlive fleeting
            design trends.
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[760px] text-[16px] leading-[1.65] text-[#71594d] sm:text-[17px] md:text-[18px]">
            Whether seeking an anchoring raw travertine console for an
            architectural interior, or initiating a private ceramic
            commission directly with an independent master, our curatorial
            desk is at your service.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            {/* Primary Button */}
            <button
              type="button"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[5px] bg-[#914827] px-7 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#74381f] hover:shadow-lg active:scale-[0.98]"
            >
              <Palette size={18} strokeWidth={1.8} />

              <span>Explore Original Works</span>
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[5px] bg-white px-7 text-[14px] font-medium text-[#251d19] shadow-sm transition-all duration-300 hover:bg-[#fffaf6] hover:shadow-md active:scale-[0.98]"
            >
              <Handshake size={18} strokeWidth={1.8} />

              <span>Inquire About Bespoke Commissions</span>
            </button>

          </div>

          {/* Artisan Link */}
          <div className="mt-9 flex flex-wrap items-center gap-1 text-[13px] leading-6 text-[#826b5e] sm:text-[14px]">
            <span>
              Are you a practicing sculptor, painter, or ceramist?
            </span>

            <a
              href="#join"
              className="inline-flex items-center font-medium text-[#8c492c] underline decoration-[#b9866e] underline-offset-4 transition-colors hover:text-[#62301d]"
            >
              Apply to join our vetted artisan registry
              <ArrowRight
                size={14}
                className="ml-1"
                strokeWidth={1.8}
              />
            </a>
          </div>

        </div>
      </div>
    </section>

    </main>
  );
};

export default AboutArtNest;