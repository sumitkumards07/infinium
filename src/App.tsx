import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import './App.css'
import { Footer } from './Footer';
import { PremiumContact } from './PremiumContact';

const partnerMarks = [
  'Axis',
  'Northline',
  'Monolith',
  'Kinetic',
  'Forge',
  'Apex',
  'Signal',
  'Vault',
  'Strata',
  'Civic',
]

const services = [
  {
    title: 'SaaS Architecture',
    body: 'Multi-tenant platforms, secure data models, analytics surfaces, and resilient cloud foundations.',
    metric: '99.99%',
    icon: 'architecture',
  },
  {
    title: 'Cross-Platform Mobile Apps',
    body: 'Production mobile systems with native-grade motion, offline states, and release discipline.',
    metric: '2.4M',
    icon: 'mobile',
  },
  {
    title: 'AI & LLM Integration',
    body: 'Private copilots, retrieval pipelines, agent workflows, and governed automation layers.',
    metric: '12x',
    icon: 'ai',
  },
  {
    title: 'Web Automation',
    body: 'Browser orchestration, workflow intelligence, monitoring, and high-confidence operational tooling.',
    metric: '84%',
    icon: 'automation',
  },
]

const projects = [
  {
    eyebrow: 'Enterprise Command Center',
    title: 'A real-time operating layer for executive teams.',
    stat: '18 regions synchronized',
    type: 'laptop',
  },
  {
    eyebrow: 'Mobile Intelligence Suite',
    title: 'A field app built for speed, governance, and clean execution.',
    stat: '420k actions monthly',
    type: 'phone',
  },
]

const pricingPlans = [
  {
    title: 'MVP Launchpad',
    description: 'Ideal for lean teams or startups needing clean, fast design delivery for websites or branding assets.',
    delivery: '4-6 weeks',
    price: '$5,499+',
    features: [
      'Complete MVP development',
      'Full Stack Development',
      'Deployment and launch support',
      '14 day complementary support',
      'PRD-based revisions included',
      'Scaling assistance available'
    ],
    popular: false,
    icon: '🚀'
  },
  {
    title: 'Product Sprint+',
    badge: 'Most Popular',
    description: 'For founders who want a usable, credible product — not a prototype.',
    delivery: '6-10 weeks',
    price: '$9,950+',
    features: [
      'End-to-end MVP development',
      'Production-ready codebase',
      'Polished core user flows',
      '21 days post-launch support',
      'Analytics & monitoring setup',
      'Best for demos, users, and early investors.'
    ],
    popular: true,
    icon: '⚡'
  },
  {
    title: 'Custom Enterprise Solution',
    description: 'Built for teams scaling fast and shipping mission-critical products. A fully tailored design, development, and growth partnership — from strategy to deployment and beyond.',
    delivery: '12-16 weeks',
    priceLabel: 'Starting at',
    price: '$15,499',
    features: [
      'Dedicated product & engineering team',
      'Custom UX, design system & architecture',
      'Scalable cloud infrastructure',
      'Enterprise-grade security & compliance',
      'Priority support & SLA-backed delivery',
      'Ongoing optimization & roadmap planning'
    ],
    popular: false,
    icon: '🏢'
  }
]

const testimonials = [
  {
    quote: 'DreamLaunch took our vision and turned it into a production-ready product in 6 weeks. Their team is exceptional.',
    author: 'Sarah Chen',
    role: 'Founder, TechFlow',
    company: 'Series A SaaS',
    rating: 5
  },
  {
    quote: 'The level of professionalism and execution was unmatched. We launched with confidence and closed our first customers immediately.',
    author: 'Michael Rodriguez',
    role: 'CEO, DataVault',
    company: 'Series B Enterprise',
    rating: 5
  },
  {
    quote: 'They understood our market better than we did. The design decisions alone saved us months of iteration with users.',
    author: 'Jessica Park',
    role: 'Co-founder, MobileSync',
    company: 'Seed Stage Mobile',
    rating: 5
  },
  {
    quote: 'Best investment we made in our startup journey. The post-launch support kept us running smoothly while we scaled.',
    author: 'David Thompson',
    role: 'Founder, CloudOps',
    company: 'Pre-seed Infrastructure',
    rating: 5
  },
  {
    quote: 'Non-technical founder here. They made the process painless and kept me educated every step of the way.',
    author: 'Amanda Brooks',
    role: 'Founder, FreshAI',
    company: 'AI Automation',
    rating: 5
  },
  {
    quote: 'Shipped faster than we thought possible. The codebase quality meant zero refactoring needed post-launch.',
    author: 'Alex Kumar',
    role: 'CTO, WebScale',
    company: 'Series A Platform',
    rating: 5
  }
]

const testimonialStats = [
  { value: '30+', label: 'Products Shipped' },
  { value: '98%', label: 'Client satisfaction rate' },
  { value: '850K', label: 'Raised by Clients' }
]

/* FAQ Data - Reserved for future FAQ section */
const faqs = [
  {
    question: 'How long does it take to build an MVP?',
    answer: 'Our MVP Launchpad service delivers a complete, revenue-ready MVP in just 4-6 weeks. This includes design, development, testing, and deployment. For Landing Revamp services, we guarantee 48-hour delivery. The timeline is clearly defined in our service agreements, and we maintain transparent communication throughout the process.'
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes! All our services include post-launch support. We provide bug fixes, technical maintenance, scaling assistance, and performance optimization. Our team remains available to help you grow your product and implement user feedback. We\'re committed to your long-term success.'
  },
  {
    question: 'Can you help with investor presentations?',
    answer: 'Yes! Our investor-friendly design approach is specifically crafted to help you secure funding. We create professional, high-converting designs that demonstrate your product\'s potential to investors. Many of our clients have successfully used our MVPs to secure their first round of funding.'
  },
  {
    question: 'What if I\'m not technical? Can you still help me?',
    answer: 'Absolutely! We specialize in helping non-technical founders. Our team of ex-Adobe, Amazon, and YC-backed professionals handles all technical aspects while keeping you informed every step of the way. We provide education throughout the process and ensure you understand your product\'s architecture and capabilities.'
  },
  {
    question: 'What makes DreamLaunch different from other agencies?',
    answer: 'Our competitive advantages include: Expert team with Silicon Valley experience (ex-Adobe, Amazon, YC-backed), proven track record of 40+ successful MVP launches, global reach serving 6 continents, comprehensive end-to-end service, industry-leading 4-week delivery, and transparent pricing with no hidden costs. We focus on non-technical founders and provide education throughout the process.'
  },
  {
    question: 'Are there any refunds?',
    answer: 'Since this is a creative service, we don\'t offer refunds. But we\'ll keep refining the work until you love it — that\'s our promise.'
  }
]

function WireframeField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const pointer = { x: 0.5, y: 0.5 }
    const particles = Array.from({ length: 150 }, (_, index) => ({
      angle: index * 0.82,
      orbit: 60 + (index % 15) * 35,
      speed: 0.001 + (index % 7) * 0.0005,
      offset: (index % 13) * 0.25,
      zOffset: (Math.random() - 0.5) * 600,
      color: [`#06b6d4`, `#14b8a6`, `#0d9488`, `#20c997`, `#06d6a0`][index % 5]
    }))

    let frame = 0
    let animationId = 0
    let width = 0
    let height = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * ratio)
      canvas.height = Math.floor(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = () => {
      frame += 1
      context.clearRect(0, 0, width, height)

      const centerX = width * 0.5
      const centerY = height * 0.5
      const mouseTiltX = (pointer.x - 0.5) * 200
      const mouseTiltY = (pointer.y - 0.5) * 200

      // Create a 3d perspective space
      const focalLength = 400

      const points = particles.map((particle) => {
        const time = frame * particle.speed + particle.offset
        
        // 3D rotations
        const x3d = Math.cos(particle.angle + time) * particle.orbit
        const z3d = Math.sin(particle.angle + time) * particle.orbit + particle.zOffset
        const y3d = Math.sin(particle.angle * 1.5 + time * 1.2) * particle.orbit * 0.6
        
        // Apply tilt based on mouse
        const rotatedX = x3d * Math.cos(mouseTiltX * 0.005) - z3d * Math.sin(mouseTiltX * 0.005)
        const rotatedZ = z3d * Math.cos(mouseTiltX * 0.005) + x3d * Math.sin(mouseTiltX * 0.005) + 300
        
        const rotatedY = y3d * Math.cos(mouseTiltY * 0.005) - rotatedZ * Math.sin(mouseTiltY * 0.005)
        const finalZ = rotatedZ * Math.cos(mouseTiltY * 0.005) + y3d * Math.sin(mouseTiltY * 0.005)

        // Projection
        const scale = focalLength / (focalLength + finalZ)
        const x = centerX + rotatedX * scale
        const y = centerY + rotatedY * scale

        return { x, y, scale, finalZ, color: particle.color }
      })

      // Sort by Z for proper 3D rendering (painters algorithm)
      points.sort((a, b) => b.finalZ - a.finalZ)

      context.lineWidth = 1.5
      points.forEach((point, index) => {
        for (let nextIndex = index + 1; nextIndex < Math.min(index + 20, points.length); nextIndex += 1) {
          const next = points[nextIndex]
          const distance = Math.hypot(point.x - next.x, point.y - next.y)
          if (distance < 90 * point.scale) {
            const opacity = (1 - distance / (90 * point.scale)) * 0.3 * Math.min(point.scale, 1.5)
            context.strokeStyle = `rgba(150, 150, 150, ${opacity})`
            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(next.x, next.y)
            context.stroke()
          }
        }
      })

      points.forEach((point) => {
        const radius = Math.max(0.5, 3 * point.scale)
        // Convert hex to rgb for opacity control or just use a solid color if scale is enough to convey depth
        context.fillStyle = point.color
        context.globalAlpha = Math.min(1, Math.max(0.1, point.scale))
        context.beginPath()
        context.arc(point.x, point.y, radius, 0, Math.PI * 2)
        context.fill()
      })
      context.globalAlpha = 1

      animationId = window.requestAnimationFrame(draw)
    }

    const updatePointer = (event: PointerEvent) => {
      pointer.x = event.clientX / window.innerWidth
      pointer.y = event.clientY / window.innerHeight
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', updatePointer)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', updatePointer)
    }
  }, [])

  return <canvas ref={canvasRef} className="wireframe-canvas" aria-hidden="true" />
}

function useRevealOnView() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-view')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { rootMargin: '-8% 0px -12% 0px', threshold: 0.16 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Existing content of the app would be rendered here */}
      {/* ... */}
      <Footer />
    </div>
  );
}

function DeviceMockup({ type }: { type: string }) {
  const isPhone = type === 'phone'

  return (
    <div className={isPhone ? 'device phone-device' : 'device laptop-device'}>
      <div className="device-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="mock-interface">
        <div className="interface-sidebar">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="interface-main">
          <div className="interface-header">
            <span />
            <span />
          </div>
          <div className="interface-panels">
            <span />
            <span />
            <span />
          </div>
          <div className="interface-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="interface-table">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setSubmitted(true)
      setFormData({ name: '', email: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="contact-section reveal-on-view" id="contact-form" aria-labelledby="contact-title">
      <div className="contact-wrapper">
        <div className="contact-header">
          <p className="eyebrow">Let's Connect</p>
          <h2 id="contact-title">Got a project in mind?</h2>
          <p className="contact-subtitle">Let's make something happen together</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter the Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-action btn-full">
            {submitted ? 'Message Sent!' : 'Get in Touch'}
          </button>
        </form>

        {submitted && (
          <div className="success-message">
            Thanks for reaching out! We'll get back to you soon.
          </div>
        )}
      </div>
    </section>
  )
}

function FAQAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="faq-section reveal-on-view" id="faq" aria-labelledby="faq-title">
      <div className="faq-wrapper">
        <div className="faq-container">
          <div className="faq-left">
            <p className="eyebrow">Questions?</p>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p className="faq-description">
              Find answers to common questions about our services, process, and how we help bring your product to life.
            </p>
          </div>

          <div className="faq-right">
            <div className="faq-items">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item-wrapper">
                  <button
                    className="faq-item-button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={expandedIndex === index}
                  >
                    <span className="faq-item-text">{faq.question}</span>
                    <div className="faq-icon-container">
                      <svg
                        className="faq-icon-plus"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                      <svg
                        className="faq-icon-minus"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </button>
                  {expandedIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                  {index < faqs.length - 1 && <div className="faq-divider" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  useRevealOnView()
  return (
    <main className="site-shell">
      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Apex Systems home">
            <span className="brand-mark" />
            Apex Systems
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Legal</a>
          </div>
          <a className="nav-cta" href="#contact">Engage</a>
        </nav>

        <WireframeField />

        <div className="hero-content">
          <p className="eyebrow">Enterprise technology agency</p>
          <h1 id="hero-title" aria-label="We Engineer Digital Dominance.">
            {['We', 'Engineer', 'Digital', 'Dominance.'].map((word, index) => (
              <span
                className="headline-word"
                key={word}
                style={{ '--word-delay': `${index * 0.12}s` } as CSSProperties}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-copy">
            We design, build, and automate the systems ambitious companies rely on when
            quality, speed, and institutional trust all matter at once.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">Start the mandate</a>
            <a className="secondary-action" href="#work">View case studies</a>
          </div>
        </div>
      </section>

      <section className="logo-cloud reveal-on-view" aria-labelledby="logo-cloud-title">
        <div className="logo-cloud-header">
          <p className="eyebrow">Trusted operating network</p>
          <h2 id="logo-cloud-title">Logo Cloud Marquee</h2>
        </div>
        <div className="logo-marquee" aria-label="Partner brands">
          <div className="marquee-row">
            {[...partnerMarks, ...partnerMarks].map((mark, index) => (
              <span className="partner-logo" key={`${mark}-top-${index}`}>
                <i className={`mark-shape shape-${(index % 5) + 1}`} aria-hidden="true" />
                {mark}
              </span>
            ))}
          </div>
          <div className="marquee-row marquee-row-reverse">
            {[...partnerMarks].reverse().concat([...partnerMarks].reverse()).map((mark, index) => (
              <span className="partner-logo compact-logo" key={`${mark}-bottom-${index}`}>
                <i className={`mark-shape shape-${((index + 2) % 5) + 1}`} aria-hidden="true" />
                {mark}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">The tech arsenal</p>
          <h2 id="services-title">Systems built with boardroom restraint and operator speed.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className={`service-card service-${index + 1} reveal-on-view`}
              key={service.title}
              style={{ '--card-delay': `${index * 0.11}s` } as CSSProperties}
            >
              <div className={`service-icon ${service.icon}`} aria-hidden="true">
                <span />
                <span />
              </div>
              <p className="service-metric">{service.metric}</p>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Engineered for scale</p>
          <h2 id="work-title">Calm interfaces for serious operating environments.</h2>
        </div>

        <div className="project-stack">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.title}>
              <div className="project-copy">
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <span>{project.stat}</span>
              </div>
              <div className="device-wrap">
                <DeviceMockup type={project.type} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
        <div className="section-heading">
          <p className="eyebrow">Transparent Pricing</p>
          <h2 id="pricing-title">Partner with a team that delivers on time.</h2>
        </div>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div className={`pricing-card reveal-on-view ${plan.popular ? 'popular' : ''}`} key={plan.title} style={{ '--card-delay': `${index * 0.15}s` } as CSSProperties}>
              {plan.popular && <div className="popular-badge">{plan.badge}</div>}
              
              <div className="pricing-header">
                <div className="pricing-icon">{plan.icon}</div>
                <h3>{plan.title}</h3>
                <p className="pricing-desc">{plan.description}</p>
              </div>

              <div className="pricing-meta">
                <div className="delivery-time">
                  <span className="meta-label">Delivery Time</span>
                  <strong>{plan.delivery}</strong>
                </div>
                <div className="price-wrap">
                  {plan.priceLabel && <span className="meta-label">{plan.priceLabel}</span>}
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

              <a href="#contact" className={plan.popular ? 'primary-action btn-full' : 'secondary-action btn-full'}>
                Book a call
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <div className="testimonials-wrapper">
          <div className="testimonials-header">
            <h2 id="testimonials-title">Testimonials</h2>
            <p className="testimonials-subtitle">What our clients say about us</p>
          </div>

          <div className="testimonial-stats">
            {testimonialStats.map((stat, index) => (
              <div className="stat-card reveal-on-view" key={stat.label} style={{ '--card-delay': `${index * 0.1}s` } as CSSProperties}>
                <strong className="stat-value">{stat.value}</strong>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card reveal-on-view" key={`${testimonial.author}-${index}`} style={{ '--card-delay': `${index * 0.08}s` } as CSSProperties}>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                  <small>{testimonial.company}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />

      <ContactForm />
      <PremiumContact />

      <footer className="site-footer" id="contact">
        <div className="footer-cta">
          <p>Available for enterprise builds</p>
          <h2>INFINIUM</h2>
        </div>
        <div className="footer-grid">
          <div>
            <h3>Services</h3>
            <a href="#services">SaaS Architecture</a>
            <a href="#services">Mobile Apps</a>
            <a href="#services">AI Integration</a>
          </div>
          <div>
            <h3>Work</h3>
            <a href="#work">Case Studies</a>
            <a href="#work">Dashboards</a>
            <a href="#work">Automation</a>
          </div>
          <div id="about">
            <h3>About</h3>
            <a href="#top">Company</a>
            <a href="#top">Standards</a>
            <a href="#top">Security</a>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="#contact">Terms of Service</a>
            <a href="#contact">Privacy Notice</a>
            <a href="#contact">Compliance</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 [Agency Name]. All rights reserved.</p>
          <p>Corporate website concepts, statements, and service descriptions are provided by [Agency Name] for institutional evaluation only.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
