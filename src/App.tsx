import { useState } from "react";

const RNLI_LOGO =
  "https://rnli.org/-/media/rnli/logos/lifeboats_logo_2025_master.svg?rev=fc7ebec02c044accb002040f620434e6";

const FACEBOOK_URL = "https://www.facebook.com/EnnisRNLI";
const RNLI_DONATE_URL = "https://rnli.org/support-us/give-money/donate";

const upcomingEvents = [
   {
    id: 1,
    title: "Harvest Dance and Soiree",
    date: "Fri, 23 Oct 2026",
    time: "7.00pm",
    location: "The Good House, Inagh",
    description:
      "Two of the great Gaels of County Clare in sport, music, dance, storytelling and reaching out with kindness to communities, now reach out to keep the Lifeboats afloat. Pairc Howley and Kevin Keane and supporting musicians, singers, dancers and story tellers. There will be food, tae and sweet cake, bulls eyes, bottled stout, liquorice all sorts. Raffle for valuable prizes. No admission charge. People can donate what they can on the night.",
    icon: "🎃",
    highlight: true,
  },
   {
    id: 2,
    title: "RNLI Collection Day",
    date: "May 2027",
    time: "9:00am – 5.00pm",
    location: "Ennis Town",
    description:
      "Join our volunteers collecting in the town of Ennis. Every euro helps fund the RNLI`s lifesaving work around Ireland`s coastline.",
    icon: "🪣",
    highlight: false,
  }
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&auto=format",
    alt: "RNLI lifeboat on the water",
    caption: "Summer Cruise 2026",
  },
  {
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
    alt: "Community fundraising event",
    caption: "Collection Day 2025",
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format",
    alt: "Team gathering at fundraiser",
    caption: "Quiz Night 2025",
  },
  {
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&auto=format",
    alt: "Volunteers at community event",
    caption: "New Year Swim 2026",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: "#002f6c", borderBottom: "4px solid #e05a10" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="bg-white rounded-md px-3 py-1.5 flex items-center shadow-sm"
            style={{ minWidth: 0 }}
          >
            <img
              src={RNLI_LOGO}
              alt="RNLI lifeboats logo"
              className="h-8 w-auto"
            />
          </div>
          <div className="border-l border-white/25 pl-3">
            <p
              className="text-white font-display text-lg leading-none tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              ENNIS RNLI
            </p>
            <p className="text-white/55 text-xs mt-0.5">Fundraising Branch</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {["Events", "Gallery","Contact", "Facebook"].map((item) =>
            item === "Facebook" ? (
              <a
                key={item}
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-all"
                style={{ backgroundColor: "#0866ff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow Us
              </a>
            ) : (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden px-4 pb-4 flex flex-col gap-3"
          style={{ backgroundColor: "#001f4a" }}
        >
          <a
            href="#events"
            onClick={() => setMenuOpen(false)}
            className="text-white/85 py-2 border-b border-white/10 text-sm font-medium"
          >
            Events
          </a>
          <a
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className="text-white/85 py-2 border-b border-white/10 text-sm font-medium"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-white/85 py-2 border-b border-white/10 text-sm font-medium"
          >
            Contact
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 text-white text-sm font-bold px-4 py-2 rounded-full mt-1"
            style={{ backgroundColor: "#0866ff" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow Ennis RNLI on Facebook
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#002f6c" }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&fit=crop&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.35,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 py-14 sm:py-20 flex flex-col items-center text-center">
        <span
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(224,90,16,0.25)",
            color: "#f26a20",
            border: "1px solid rgba(224,90,16,0.45)",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)"
          }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#e05a10" }}
          />
          Ennis, Co. Clare, Ireland
        </span>

        <h1
          className="text-white text-5xl sm:text-6xl md:text-7xl leading-none mb-5"
          style={{ 
            fontFamily: "var(--font-display)", 
            fontWeight: 800,
            textShadow: "0 3px 10px rgba(0, 0, 0, 0.75)" 
          }}
        >
          SAVING LIVES
          <br />
          AT SEA
          <br />
          <span style={{ color: "#e05a10" }}>CLOSE TO HOME</span>
        </h1>

        <p 
          className="text-white/90 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-medium"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
        >
          Ennis RNLI Fundraising Branch helps support the RNLI’s lifesaving work 
          around Co. Clare and the Irish coast. Through our events, raffles and 
          collections, we raise vital funds to help keep RNLI lifeboats, 
          crews and lifesaving services ready when they’re needed most.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href={RNLI_DONATE_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 backdrop-blur-sm"
            style={{backgroundColor: "#e05a10"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 shrink-0"
            > 
              {/* License: CC Attribution. Made by boxicons: https://github.com/atisawd/boxicons */}
              {/* Heart in Hand */}
              <path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"/>
            </svg>
            Donate to Ennis RNLI
          </a>
          <a
            href="#events"
            className="flex items-center justify-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(0,0,0,0.25)",
              border: "2px solid rgba(255,255,255,0.45)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5"
              />
            </svg>
            Upcoming Events
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(0,0,0,0.25)",
              border: "2px solid rgba(255,255,255,0.45)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow on Facebook
          </a>
        </div>
      </div>

      {/* Orange bottom rule */}
      <div className="h-1 w-full" style={{ backgroundColor: "#e05a10" }} />
    </section>
  );
}

function StatBar() {
  const stats = [
    { label: "Years Saving Lives", value: "200+" },
    { label: "Lifeboat Stations", value: "238" },
    { label: "Lifeboat Lanuches in 2025", value: "9,058" },
    { label: "Lives Saved in 2025", value: "272" },
  ];

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-2">
            <p
              className="text-2xl sm:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                color: "#002f6c",
              }}
            >
              {s.value}
            </p>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventCard({
  event,
}: {
  event: (typeof upcomingEvents)[0];
}) {
  return (
    <article
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
      style={
        event.highlight
          ? { border: "2px solid #e05a10" }
          : { border: "1px solid #e2e8f0" }
      }
    >
      {event.highlight && (
        <div
          className="flex items-center gap-2 px-4 py-2 text-white text-xs font-bold tracking-wider uppercase"
          style={{ backgroundColor: "#e05a10" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3.5 h-3.5"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            />
          </svg>
          Next Up
        </div>
      )}

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start gap-3">
          <span className="text-2xl leading-none mt-0.5">{event.icon}</span>
          <div className="flex-1 min-w-0">
            <h3
              className="text-lg leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "#002f6c",
              }}
            >
              {event.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#e05a10"
              className="w-4 h-4 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5"
              />
            </svg>
            <span className="font-semibold text-gray-800">{event.date}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#e05a10"
              className="w-4 h-4 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {event.location}
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {event.description}
        </p>

        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full mt-auto transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: "#0866ff" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3.5 h-3.5"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Get Updates on Facebook
        </a>
      </div>
    </article>
  );
}

function EventsSection() {
  return (
    <section id="events" className="py-14 sm:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "#e05a10" }}
            >
              What's On
            </p>
            <h2
              className="text-4xl sm:text-5xl leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                color: "#002f6c",
              }}
            >
              UPCOMING EVENTS
            </h2>
          </div>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "#0866ff" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow for real-time updates →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Event details may change.{" "}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            className="font-semibold underline underline-offset-2"
            style={{ color: "#0866ff" }}
          >
            Follow us on Facebook
          </a>{" "}
          for the latest information.
        </p>
      </div>
    </section>
  );
}

function FacebookBanner() {
  return (
    <section
      className="py-12 sm:py-16 relative overflow-hidden"
      style={{ backgroundColor: "#1877f2" }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>

        <h2
          className="text-white text-4xl sm:text-5xl mb-3 leading-none"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
        >
          STAY IN THE LOOP
        </h2>
        <p className="text-white/80 text-base sm:text-lg max-w-lg mx-auto mb-6 leading-relaxed">
          Follow{" "}
          <strong className="text-white">Ennis RNLI on Facebook</strong> for
          real-time event announcements, photos, fundraising updates, and
          behind-the-scenes from our volunteers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 text-blue-600 bg-white text-sm font-bold px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow Ennis RNLI on Facebook
          </a>
          <span className="text-white/60 text-sm">
            Free · Instant updates · No spam
          </span>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-14 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-2"
            style={{ color: "#e05a10" }}
          >
            In Action
          </p>
          <h2
            className="text-4xl sm:text-5xl leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              color: "#002f6c",
            }}
          >
            RECENT EVENTS
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              className="group relative rounded-xl overflow-hidden aspect-square bg-gray-200 cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                <p className="text-white text-xs font-semibold">{img.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          More photos are shared regularly on{" "}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            className="font-semibold underline underline-offset-2"
            style={{ color: "#0866ff" }}
          >
            our Facebook page
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="py-8"
      style={{ backgroundColor: "#001f4a", borderTop: "4px solid #e05a10" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded px-2 py-1">
              <img src={RNLI_LOGO} alt="RNLI" className="h-6 w-auto" />
            </div>
            <div>
              <p
                className="text-white text-sm leading-none"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                ENNIS RNLI
              </p>
              <p className="text-white/45 text-xs mt-0.5">
                Fundraising Branch
              </p>
            </div>
          </div>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "#0866ff" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow Us on Facebook
          </a>
        </div>

        <div
          className="mt-6 pt-6 text-center text-white/35 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          Ennis RNLI Fundraising Branch © {currentYear} · Supporting the Royal National
          Lifeboat Institution
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatBar />
        <EventsSection />
        <FacebookBanner />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
