import { useEffect, memo } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const BeamsAndGrid = memo(function BeamsAndGrid() {
  return (
    <div className="beams-grid-bg" aria-hidden="true">
      <div className="hero-grid-pattern"></div>
      <div className="beam beam-1"></div>
      <div className="beam beam-2"></div>
      <div className="beam beam-3"></div>
      <div className="beam beam-4"></div>
      <div className="beam beam-5"></div>
      <div className="beam beam-6"></div>
      <div className="beam beam-7"></div>
      <div className="beam beam-8"></div>
      <div className="beam-particle-burst burst-1"></div>
      <div className="beam-particle-burst burst-2"></div>
      <div className="beam-particle-burst burst-3"></div>
    </div>
  );
});

function useRevealOnView() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-view');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '-8% 0px -12% 0px', threshold: 0.16 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

const pricingPlans = [
  {
    title: 'STARTER',
    description: 'Perfect for small clothing brands, boutiques, Instagram sellers, new businesses.',
    price: '₹1,999',
    period: '/mo',
    badge: 'Launch your online store.',
    cta: 'START MY STORE',
    icon: '🟢',
    popular: false,
    exampleUrl: 'https://shraddhaweaves.com/',
    exampleLabel: 'Shraddha Weaves',
    features: [
      'Shopify store setup',
      'Professional responsive design',
      'Homepage & Header + navigation',
      'Product pages & Collections',
      'Search, Cart, Checkout',
      'Payment, COD & Shipping setup',
      'Basic SEO & WhatsApp button',
      'Basic reviews',
      'Up to 20 products uploaded',
      'Up to 5 pages',
      '2 monthly changes',
      'Basic maintenance'
    ]
  },
  {
    title: 'GROWTH',
    description: 'Perfect for brands already selling through Instagram/WhatsApp that want a serious ecommerce website.',
    price: '₹4,999',
    period: '/mo',
    badge: 'Build a store designed for growth.',
    cta: 'GROW MY BRAND',
    icon: '🔵',
    popular: true,
    features: [
      'Everything in Starter, PLUS:',
      'Fully customized homepage',
      'Advanced product & collection pages',
      'Product filters & Wishlist',
      'Order tracking & Instagram integration',
      'Meta Pixel, Google Analytics & Search Console',
      'Abandoned-cart setup',
      'Newsletter popup & Lead capture',
      'Promotional banners & Sale sections',
      'Advanced SEO & Speed optimization',
      '50 product uploads & 10 pages',
      '5 monthly changes'
    ]
  },
  {
    title: 'PREMIUM',
    description: 'A premium Shopify storefront built to look like a serious fashion/ecommerce brand.',
    price: '₹8,999',
    period: '/mo',
    badge: 'Build a premium ecommerce experience.',
    cta: 'GO PREMIUM',
    icon: '🟣',
    popular: false,
    exampleUrl: 'https://evara.me/',
    exampleLabel: 'Evara',
    features: [
      'Everything in Growth, PLUS:',
      'Fully custom homepage & UI/UX',
      'Custom typography & color system',
      'Premium animations & hover interactions',
      'Editorial/lookbook & Brand storytelling',
      'Variant selectors & Size guide',
      'Advanced Product recommendations',
      'UGC section & Instagram feed',
      'Exit-intent popup & Email capture',
      '15+ custom sections',
      'Up to 100 product uploads & 15 pages',
      '10 monthly changes & Priority support'
    ]
  }
];

const shopifyPortfolio = [
  {
    title: 'Evara',
    price: '₹8,999 /mo',
    imageSrc: 'https://wsrv.nl/?url=raw.githubusercontent.com/sumitkumards07/infinium/main/public/evara.png&w=600&output=webp',
    websiteUrl: 'https://evara.me/',
  },
  {
    title: 'Shraddha Weaves',
    price: '₹1,999 /mo',
    imageSrc: 'https://wsrv.nl/?url=raw.githubusercontent.com/sumitkumards07/infinium/main/public/evara.png&w=600&output=webp',
    websiteUrl: 'https://shraddhaweaves.com/',
  }
];

function ShopifyCaseStudy({ title, price, imageSrc, websiteUrl }: any) {
  return (
    <article
      className="reveal-on-view"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '1rem',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        textDecoration: 'none',
        color: 'inherit',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ height: '260px', overflow: 'hidden', backgroundColor: '#f8fafc', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <img 
          src={imageSrc} 
          alt={`${title} store`} 
          loading="lazy" 
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>
      <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>{title}</h3>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>{price}</p>
        </div>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0d9488', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          View Store <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export default function ShopifyLanding() {
  useRevealOnView();

  return (
    <main className="site-shell">
      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="brand" href="/" aria-label="Infinium home">
            <span className="brand-mark" />
            Infinium
          </a>
          <div className="nav-links">
            <a href="#pricing">Plans</a>
          </div>
          <a className="nav-cta" href="https://wa.me/918950013181" target="_blank" rel="noopener noreferrer">Contact Sales</a>
        </nav>

        <BeamsAndGrid />
        
        <div className="legacy-hero-content">
          <div className="legacy-glow pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="legacy-eyebrow"
          >
            <div className="line"></div>
            <span>Shopify Store Setup</span>
            <div className="line"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="legacy-headline"
            id="hero-title"
          >
            Build a Shopify Store <br className="desktop-break"/>
            <span className="serif-italic">that converts.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="legacy-subheadline"
          >
            Professional Shopify websites designed, built, and maintained as a monthly service. 
            From new businesses to established premium brands.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="legacy-actions"
          >
            <a href="#pricing" className="legacy-btn">
              <span className="btn-hover-fill"></span>
              <span className="btn-text">View Plans</span>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
        <div className="section-heading">
          <p className="eyebrow">Monthly Plans</p>
          <h2 id="pricing-title">Simple, transparent pricing.</h2>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div className={`pricing-card reveal-on-view ${plan.popular ? 'popular' : ''}`} key={plan.title} style={{ '--card-delay': `${index * 0.15}s` } as CSSProperties}>
              {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
              
              <div className="pricing-header">
                <div className="pricing-icon">{plan.icon}</div>
                <h3>{plan.title}</h3>
                <p className="pricing-desc">{plan.description}</p>
              </div>

              <div className="pricing-meta">
                <div className="delivery-time">
                  <span className="meta-label">Goal</span>
                  <strong style={{ fontSize: '0.9rem' }}>{plan.badge}</strong>
                </div>
                <div className="price-wrap">
                  <span className="meta-label">Monthly</span>
                  <strong className="price-val">{plan.price}</strong>
                </div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/918950013181" target="_blank" rel="noopener noreferrer" className={plan.popular ? 'primary-action btn-full' : 'secondary-action btn-full'}>
                {plan.cta}
              </a>
              {plan.exampleUrl && (
                <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
                  <a href={plan.exampleUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0d9488', textDecoration: 'underline', fontWeight: 500 }}>
                    View Live Example: {plan.exampleLabel} ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Our Work</p>
          <h2 id="work-title">Featured Shopify Stores</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem', maxWidth: '1000px', margin: '3rem auto 0 auto', padding: '0 1rem' }}>
          {shopifyPortfolio.map((caseStudy, index) => (
            <ShopifyCaseStudy key={index} {...caseStudy} />
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-cta">
          <p>Ready to innovate?</p>
          <h2>INFINIUM</h2>
        </div>
        <div className="footer-grid">
          <div>
            <h3>Solutions</h3>
            <a href="#services">Web Systems</a>
            <a href="#services">Mobile Platforms</a>
            <a href="#services">AI Automation</a>
            <a href="#services">Cloud Strategy</a>
          </div>
          <div>
            <h3>Expertise</h3>
            <a href="#work">Case Studies</a>
            <a href="#work">Product Design</a>
            <a href="#work">Engineering</a>
            <a href="#pricing">Institutional Plans</a>
          </div>
          <div>
            <h3>Infinium</h3>
            <a href="#top">Our Mission</a>
            <a href="#top">Standard Operating Procedures</a>
            <a href="#top">Security Protocols</a>
            <a href="#top">The Team</a>
          </div>
          <div>
            <h3>Engage</h3>
            <a href="#contact-form">Start a Project</a>
            <a href="mailto:sumitkumards07@gmail.com">Direct Email</a>
            <a href="https://wa.me/918950013181" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
            <a href="https://www.linkedin.com/in/sumit-kumar-9159a636b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/SumitKumar70350" target="_blank" rel="noopener noreferrer">Twitter / X</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Infinium Studio. High-fidelity digital engineering for the modern enterprise.</p>
          <div className="footer-legal">
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
            <a href="#top">Compliance</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
