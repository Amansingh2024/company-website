import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, BedDouble, Armchair, Tv, MessageCircle, Play, ShieldCheck } from 'lucide-react';
import './styles/theme.css';
import './showroom-tour.css';

const baseUrl = import.meta.env.BASE_URL;
const whatsappUrl = 'https://wa.me/919876543210?text=Namaste%20Vishwakarma%20Furniture!%20I%20want%20a%20showroom%20video%20tour%20and%20a%20product%20quote.';

function ShowroomTour() {
  return (
    <main className="tour-page">
      <div className="luxury-grain-overlay" />
      <nav className="tour-nav container">
        <a className="tour-brand" href={baseUrl}>
          <span className="tour-crest">V</span>
          <span><strong>Vishwakarma</strong><small>FURNITURE &amp; ELECTRONICS</small></span>
        </a>
        <a className="tour-back" href={baseUrl}><ArrowLeft size={16} /> Back to collections</a>
      </nav>

      <section className="tour-hero container">
        <div className="tour-copy">
          <span className="tour-kicker"><Play size={13} fill="currentColor" /> Guided showroom film</span>
          <h1>See your next <em>beautiful room.</em></h1>
          <p>Meet our showroom host as he walks you through one solid-wood bed, comfortable sofas and smart electronics. Compare the details before you visit us in person.</p>
          <div className="tour-proof"><ShieldCheck size={18} /> Real product guidance &amp; WhatsApp quote support</div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="tour-cta"><MessageCircle size={18} /> Book a video consultation</a>
        </div>

        <div className="tour-video-shell">
          <div className="tour-video-glow" />
          <iframe
            src="https://www.youtube-nocookie.com/embed/c3mUxTqLgrc?rel=0"
            title="Professional showroom host presenting a bed, sofas and electronics"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <span className="tour-video-label">Hosted walkthrough · Bed · Sofa · Electronics</span>
        </div>
      </section>

      <section className="tour-highlights container">
        <header>
          <span className="tour-kicker">Inside the video</span>
          <h2>One guided visit. Every room essential.</h2>
        </header>
        <div className="tour-highlight-grid">
          <article><BedDouble size={25} /><h3>One signature bed</h3><p>See the finish, storage, dimensions and craftsmanship up close.</p></article>
          <article><Armchair size={25} /><h3>Comfort sofas</h3><p>Explore seating styles, fabrics and the right fit for your living room.</p></article>
          <article><Tv size={25} /><h3>Smart electronics</h3><p>Discover television, sound and appliance options for your home setup.</p></article>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<ShowroomTour />);