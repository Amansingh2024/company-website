import React from 'react';
import { Star, Quote, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Dr. Rajeshwar Sharma',
      location: 'Dariyapur Bazar',
      rating: 5,
      product: 'Maharaja Grand King Bed + Sony 65" TV',
      text: 'Four years ago we purchased the Maharaja Sheesham bed and later added the Sony 4K TV. The solid wood structure has zero creaking, the polish looks brand new, and delivery was completed in a single afternoon.',
      avatar: 'R'
    },
    {
      name: 'Sunita & Alok Verma',
      location: 'Near Dariyapur Bazar',
      rating: 5,
      product: 'Kanha Chesterfield 3-Seater Sofa',
      text: 'The deep button tufting and leatherette quality is comparable to luxury brands charging 3x more. The master karigars customized the dimensions to fit our living room bay window perfectly!',
      avatar: 'S'
    },
    {
      name: 'Er. Manoj Kumar Choudhary',
      location: 'Dariyapur Market Area',
      rating: 5,
      product: 'Vivaan Hydraulic Bed + LG Inverter AC',
      text: 'Got both my bedroom furniture and home electronics on 0% EMI from Vishwakarma. Genuine brand warranties and immediate post-sales support whenever requested. Highest recommendation!',
      avatar: 'M'
    }
  ];

  const stats = [
    { num: '5,000+', label: 'Homes Furnished Across India' },
    { num: '25+ Years', label: 'Artisan Carpentry Heritage' },
    { num: '100%', label: 'Solid Wood (No Particle Core)' },
    { num: '4.9 / 5.0', label: 'Average Customer Rating' }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Trust Stats Bar */}
        <div className="stats-bar-3d">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item-3d">
              <span className="stat-number">{stat.num}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="section-head-center" style={{ marginTop: '70px' }}>
          <div className="eyebrow-badge">
            <Sparkles size={13} />
            <span>Verified Customer Experiences</span>
          </div>
          <h2 className="section-title">
            Loved by Thousands of Families. <br />
            <em>Real Stories, Genuine Quality.</em>
          </h2>
        </div>

        {/* Testimonials 3D Grid */}
        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testi-card-3d">
              <div className="testi-top-row">
                <div className="testi-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#e3bd76" stroke="#e3bd76" />
                  ))}
                </div>
                <Quote size={24} className="testi-quote-icon" />
              </div>

              <p className="testi-body">"{rev.text}"</p>

              <div className="testi-product-tag">
                <span>Ordered: <b>{rev.product}</b></span>
              </div>

              <div className="testi-user-row">
                <div className="testi-avatar-circle">
                  <span>{rev.avatar}</span>
                </div>
                <div>
                  <h4 className="testi-user-name">{rev.name}</h4>
                  <div className="testi-user-loc">
                    <MapPin size={12} />
                    <span>{rev.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
