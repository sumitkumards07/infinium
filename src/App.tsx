import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import { Footer } from './Footer';

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
    title: 'Web Development',
    body: 'Custom websites and web apps built with React, Next.js, and modern frameworks.',
    emoji: '🌐',
  },
  {
    title: 'Mobile Apps',
    body: 'Cross-platform iOS & Android apps with native performance and beautiful UI.',
    emoji: '📱',
  },
  {
    title: 'UI/UX Design',
    body: 'User-centered design systems that convert visitors into loyal customers.',
    emoji: '🎨',
  },
  {
    title: 'AI Integration',
    body: 'Smart features powered by AI — chatbots, recommendations, and automation.',
    emoji: '🤖',
  },
  {
    title: 'E-Commerce',
    body: 'High-conversion storefronts with seamless checkout and inventory management.',
    emoji: '🛒',
  },
  {
    title: 'Cloud & DevOps',
    body: 'Scalable infrastructure, CI/CD pipelines, and 99.9% uptime guarantees.',
    emoji: '☁️',
  },
]



const pricingPlans = [
  {
    title: 'MVP Launchpad',
    description: 'Ideal for lean teams or startups needing clean, fast design delivery for websites or branding assets.',
    delivery: '4-6 weeks',
    price: '$999+',
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
    price: '$2,999+',
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
    price: '$5,999',
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
    quote: 'Infinium took our vision and turned it into a production-ready product in 6 weeks. Their team is exceptional.',
    author: 'Sarah Chen',
    role: 'Founder, TechFlow',
    company: 'Series A SaaS',
    rating: 5,
    highlight: false
  },
  {
    quote: 'The level of professionalism and execution was unmatched. We launched with confidence and closed our first customers immediately. Systems built with boardroom restraint and operator speed.',
    author: 'Michael Rodriguez',
    role: 'CEO, DataVault',
    company: 'Series B Enterprise',
    rating: 5,
    highlight: true
  },
  {
    quote: 'They understood our market better than we did. The design decisions alone saved us months of iteration with users.',
    author: 'Jessica Park',
    role: 'Co-founder, MobileSync',
    company: 'Seed Stage Mobile',
    rating: 5,
    highlight: false
  },
  {
    quote: 'Best investment we made in our startup journey. The post-launch support kept us running smoothly while we scaled.',
    author: 'David Thompson',
    role: 'Founder, CloudOps',
    company: 'Pre-seed Infrastructure',
    rating: 5,
    highlight: false
  },
  {
    quote: 'Non-technical founder here. They made the process painless and kept me educated every step of the way.',
    author: 'Amanda Brooks',
    role: 'Founder, FreshAI',
    company: 'AI Automation',
    rating: 5,
    highlight: false
  },
  {
    quote: 'Shipped faster than we thought possible. The codebase quality meant zero refactoring needed post-launch.',
    author: 'Alex Kumar',
    role: 'CTO, WebScale',
    company: 'Series A Platform',
    rating: 5,
    highlight: false
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
    question: 'What makes Infinium different from other agencies?',
    answer: 'Our competitive advantages include: Expert team with Silicon Valley experience (ex-Adobe, Amazon, YC-backed), proven track record of 40+ successful MVP launches, global reach serving 6 continents, comprehensive end-to-end service, industry-leading 4-week delivery, and transparent pricing with no hidden costs. We focus on non-technical founders and provide education throughout the process.'
  },
  {
    question: 'Are there any refunds?',
    answer: 'Since this is a creative service, we don\'t offer refunds. But we\'ll keep refining the work until you love it — that\'s our promise.'
  }
]

function BeamsAndGrid() {
  return (
    <div className="beams-grid-bg" aria-hidden="true">
      {/* Rotated CSS Grid Pattern */}
      <div className="hero-grid-pattern"></div>
      
      {/* Animated Light Beams */}
      <div className="beam beam-1"></div>
      <div className="beam beam-2"></div>
      <div className="beam beam-3"></div>
      <div className="beam beam-4"></div>
      <div className="beam beam-5"></div>
      <div className="beam beam-6"></div>
      <div className="beam beam-7"></div>
      <div className="beam beam-8"></div>
      
      {/* Particle Burst Points */}
      <div className="beam-particle-burst burst-1"></div>
      <div className="beam-particle-burst burst-2"></div>
      <div className="beam-particle-burst burst-3"></div>
    </div>
  );
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



function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isloading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setIsLoading(true)
      
      try {
        // Using your live Formspree endpoint
        const response = await fetch('https://formspree.io/f/xbdwjbya', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitted(true)
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setSubmitted(false), 5000)
        }
      } catch (error) {
        console.error('Error sending message:', error)
        // Fallback to simulation if endpoint is not set
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <section className="contact-section reveal-on-view" id="contact-form" aria-labelledby="contact-title">
      <div className="contact-grid">
        <div className="contact-header">
          <p className="eyebrow">Contact Us</p>
          <h2 id="contact-title">Got a project in mind?</h2>
          <p className="contact-subtitle">Let's make something happen together.</p>
          
          <div className="contact-direct">
            <a href="mailto:sumitkumards07@gmail.com" className="contact-link">
              <span className="icon">📧</span> sumitkumards07@gmail.com
            </a>
            <a href="https://wa.me/918950013181" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💬</span> WhatsApp: +91 8950013181
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="floating-group">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
              <label htmlFor="name">Your Name</label>
            </div>
            
            <div className="floating-group">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
              <label htmlFor="email">Work Email</label>
            </div>

            <div className="floating-group">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder=" " rows={3} />
              <label htmlFor="message">Project Details</label>
            </div>

            {submitted ? (
              <div className="success-message">Message Sent!</div>
            ) : (
              <button type="submit" className="submit-btn" disabled={isloading}>
                {isloading ? 'Sending...' : 'Submit Request'} <span className="arrow">→</span>
              </button>
            )}
          </form>
        </div>
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

type CaseStudyProps = {
  theme: 'dark' | 'light';
  title: string;
  subtitle: string;
  imageSrc: string;
  mockupBg?: string;
  mission: string;
  result: string;
  features: { icon: string; title: string; desc: string }[];
  techArchitecture: { title: string; desc: string }[];
  ctaText: string;
  websiteUrl: string;
  stackIndex?: number;
  totalCards?: number;
};

function PremiumCaseStudy({ title, imageSrc, mockupBg, websiteUrl, stackIndex = 0, totalCards = 1 }: CaseStudyProps) {
  const stickyTop = 80 + stackIndex * 50;
  const scaleOffset = 1 - (totalCards - 1 - stackIndex) * 0.02;
  return (
    <article
      className="case-study-card reveal-on-view"
      style={{
        '--stack-index': stackIndex,
        '--sticky-top': `${stickyTop}px`,
        '--scale-offset': scaleOffset,
      } as CSSProperties}
    >
      <div className="case-info">
        <div className="case-info-left">
          <h3 className="case-title">{title}</h3>
        </div>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="case-view-link">
          View Project <span className="arrow-icon">→</span>
        </a>
      </div>

      <div className="case-visual" style={{ backgroundColor: mockupBg || '#f8fafc' }}>
        <img src={imageSrc} alt={`${title} mockup`} className="case-img" />
      </div>
    </article>
  )
}

const caseStudiesData: CaseStudyProps[] = [
  {
    theme: 'light',
    title: 'CodeBattle — Gamified Learning',
    subtitle: 'A Gamified Learning Management System (LMS) and interactive coding platform.',
    imageSrc: '/codebattle_mockup.png?v=2',
    mockupBg: '#050505',
    mission: 'Traditional coding education often struggles with retention. The objective for CodeBattle was to transform the learning experience from passive reading into an active, story-driven bootcamp.',
    result: "An interactive platform where users earn XP, unlock achievements, and level up their skills across 10+ technologies, featuring a live 'Global Players' ecosystem and instant code validation.",
    features: [
      { icon: '⚡', title: 'Instant Code Validation', desc: 'Write code, run it instantly, and receive real-time feedback within the browser.' },
      { icon: '🎮', title: 'Gamified Architecture', desc: 'Custom XP system, unlockable labs (like Python Core and SQL Lab), and live tournament countdowns.' },
      { icon: '🎯', title: 'Story-Driven Curriculum', desc: 'Coding challenges framed as "tactical missions" (e.g., "Repair Python Core") for elevated UX.' }
    ],
    techArchitecture: [
      { title: 'Frontend & UI/UX', desc: 'React, Vite, Framer Motion, TailwindCSS for a responsive, dark-theme UI with glassmorphism.' },
      { title: 'Backend & Execution', desc: 'Secure sandboxed execution environments (Python, Java, JS, SQL) and real-time WebSockets tracking 85,000+ global players.' }
    ],
    ctaText: "Ready to build an engaging, high-performance platform for your users? Let's talk.",
    websiteUrl: 'https://www.codebattle.space/'
  },
  {
    theme: 'light',
    title: 'MoveTaxi — Taxi Booking',
    subtitle: 'A high-performance, real-time transportation booking engine designed for speed and reliability.',
    imageSrc: '/movetaxi_mockup.png',
    mockupBg: '#f8fafc',
    mission: 'Modern transport solutions demand more than just a search bar; they require intelligent matching and real-time responsiveness. The goal for MoveTaxi was to create a booking architecture that removes the complexity of logistics for the end user.',
    result: 'A streamlined booking ecosystem that prioritizes sub-second load times and an intuitive, mobile-first interface, ensuring a seamless transition from search to dispatch.',
    features: [
      { icon: '📍', title: 'Smart Location Intelligence', desc: 'Highlight how the platform handles location selection efficiently, reducing user effort.' },
      { icon: '✨', title: 'Transparent Flow', desc: 'Provides immediate visual confirmation for every step of the journey, building trust through clarity.' },
      { icon: '📱', title: 'Responsive Design', desc: 'Optimized for both desktop and mobile, ensuring a consistent, high-end experience regardless of the device.' }
    ],
    techArchitecture: [
      { title: 'Real-time Optimization', desc: 'Fast, reactive frameworks handle rapid state updates as users move through the booking process.' },
      { title: 'Integration Capabilities', desc: 'Seamlessly connects modern APIs (third-party maps, payment gateways) into a cohesive, stable system.' },
      { title: 'Performance Metrics', desc: 'Optimized for core web vitals, showcasing speed and SEO as fundamental features.' }
    ],
    ctaText: 'Transforming user intent into seamless conversions. Ready to build a high-conversion booking platform?',
    websiteUrl: 'https://movetaxibooking.vercel.app/'
  },
  {
    theme: 'light',
    title: 'AssignFlow — Task Automation',
    subtitle: 'A sleek project management and task assignment web application designed for enterprise agility.',
    imageSrc: '/assignflow_mockup.png?v=2',
    mockupBg: '#000000',
    mission: 'Teams are overwhelmed by scattered communication and disorganized task boards. AssignFlow was designed to unify team collaboration into a single, high-efficiency command center.',
    result: 'A robust, real-time project management dashboard that accelerates workflow delegation and tracking, increasing team velocity and transparency.',
    features: [
      { icon: '📊', title: 'Dynamic Kanban Boards', desc: 'Fluid drag-and-drop task management with automated status synchronization across the organization.' },
      { icon: '👥', title: 'Team Workload Analytics', desc: 'Real-time visualization of resource distribution to prevent burnout and ensure optimal delivery.' },
      { icon: '🔔', title: 'Smart Notifications', desc: 'Context-aware alerts that keep stakeholders informed without notification fatigue.' }
    ],
    techArchitecture: [
      { title: 'Frontend Architecture', desc: 'State-driven React components optimized for rendering large datasets without layout thrashing.' },
      { title: 'Backend & Data', desc: 'Real-time data synchronization ensuring multi-user collaboration happens with zero latency.' }
    ],
    ctaText: 'Empower your teams with custom-tailored productivity tools. Let’s streamline your operations.',
    websiteUrl: 'https://assignflowapp.vercel.app/'
  },
  {
    theme: 'light',
    title: 'Aashna Herbals — E-commerce',
    subtitle: 'A premium e-commerce experience merging traditional herbal authenticity with a high-conversion storefront.',
    imageSrc: '/aashna_mockup.png',
    mockupBg: '#e6e3dd',
    mission: 'In the saturated wellness market, Aashna Herbals needed a digital presence that communicated purity and transparency while driving seamless conversions. The challenge was balancing rich storytelling with an optimized e-commerce funnel.',
    result: 'A fast, immersive digital storefront that elevates the product line, using minimalist design to let natural ingredients take center stage, resulting in a frictionless path to checkout.',
    features: [
      { icon: '🌿', title: 'Immersive Product Showcase', desc: 'High-quality imagery and clear ingredient typography following top human interface guidelines.' },
      { icon: '🛍️', title: 'Frictionless Checkout Flow', desc: 'An optimized shopping cart and checkout UI engineered to remove friction and reduce abandonment.' },
      { icon: '📱', title: 'Mobile-First Commerce', desc: 'Meticulously optimized for thumbs, ensuring the mobile purchasing journey is just as premium as desktop.' }
    ],
    techArchitecture: [
      { title: 'High-Speed Delivery', desc: 'Deployed on edge networks (like Vercel) to ensure lightning-fast page loads for online shoppers.' },
      { title: 'Dynamic Asset Management', desc: 'Optimized image loading and headless CMS features to seamlessly manage the product catalog.' }
    ],
    ctaText: "Ready to elevate your brand's digital storefront and drive conversions? Let’s design your next chapter.",
    websiteUrl: 'https://aashnaherbals.vercel.app/'
  },
  {
    theme: 'light',
    title: 'FoodFinder — Food Delivery',
    subtitle: 'A high-performance, multi-sided marketplace connecting hungry users with local restaurants and real-time delivery fleets.',
    imageSrc: '/food_mockup.png',
    mockupBg: '#121212',
    mission: 'Building a food delivery platform requires balancing hungry customers, restaurant management, and driver routing. The challenge was orchestrating this real-time data while keeping the interface completely stress-free.',
    result: 'A seamless, cross-platform mobile ecosystem that turns complex geolocational data into a fluid, mouth-watering browsing and ordering experience.',
    features: [
      { icon: '🍔', title: 'Appetite-Driven UI', desc: 'Structured around high-quality food photography and intuitive categorization for flawless touch targets.' },
      { icon: '🛒', title: 'Frictionless Cart', desc: 'Easily customize orders (add-ons, special instructions) and process multi-step checkouts without fatigue.' },
      { icon: '🗺️', title: 'Live Order Telemetry', desc: 'Visual map integration where users can watch their delivery move in real-time, reducing customer anxiety.' }
    ],
    techArchitecture: [
      { title: 'Cross-Platform Mobile', desc: 'Built with unified frameworks to deliver a native-feeling, fluid experience across both iOS and Android.' },
      { title: 'Real-Time Data Sync', desc: 'Utilizes websockets to keep the restaurant, driver, and user perfectly synced during the delivery lifecycle.' },
      { title: 'Geolocation & Routing', desc: 'Advanced map API integrations and location services demonstrating robust backend routing capabilities.' }
    ],
    ctaText: "Building complex, multi-sided marketplaces that feel effortless. Let's engineer your next digital ecosystem.",
    websiteUrl: '#contact'
  }
];

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseEnter = () => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.a>
  );
}

function InfiniumLegacyHero() {
  return (
    <div className="legacy-hero-content">
      {/* Background Subtle Glow for Depth */}
      <div className="legacy-glow pointer-events-none"></div>

      {/* Eyebrow: Establishes immediate authority */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="legacy-eyebrow"
      >
        <div className="line"></div>
        <span>Established Excellence</span>
        <div className="line"></div>
      </motion.div>

      {/* Main Headline: Mixing Sans-Serif with Serif for "Legacy" feel */}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="legacy-headline"
      >
        Engineering your digital <br className="desktop-break"/>
        <span className="serif-italic">legacy.</span>
      </motion.h1>

      {/* Subheadline: Clear value proposition */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="legacy-subheadline"
      >
        Infinium Studio is the trusted technical partner for visionary founders. We architect scalable, high-performance platforms designed to dominate markets and outlast the competition.
      </motion.p>

      {/* High-Conversion CTA Area */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="legacy-actions"
      >
        <MagneticButton className="legacy-btn" href="#pricing">
          <span className="btn-text">View Plans</span>
          <div className="btn-hover-fill"></div>
        </MagneticButton>
        
        {/* Micro-copy to reduce friction and build trust */}
        <div className="legacy-micro-copy">
          <div className="availability">
            <span className="pulse-dot"></span>
            <span>Accepting New Projects</span>
          </div>
          <span className="transparency-note">Transparent pricing. No hidden fees.</span>
        </div>
      </motion.div>

      {/* Social Proof / Trust Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="legacy-trust-bar"
      >
        <div className="trust-avatars-row">
          <div className="avatar-stack">
            <img src="https://i.pravatar.cc/80?u=founder1" alt="Founder" className="stack-avatar" />
            <img src="https://i.pravatar.cc/80?u=founder2" alt="Founder" className="stack-avatar" />
            <img src="https://i.pravatar.cc/80?u=founder3" alt="Founder" className="stack-avatar" />
            <img src="https://i.pravatar.cc/80?u=founder4" alt="Founder" className="stack-avatar" />
            <img src="https://i.pravatar.cc/80?u=founder5" alt="Founder" className="stack-avatar" />
          </div>
          <div className="trust-copy">
            <strong>Trusted by 50+ teams</strong>
            <span>from seed to Series B</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function App() {
  useRevealOnView()
  return (
    <main className="site-shell">
      <Analytics />
      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Infinium home">
            <span className="brand-mark" />
            Infinium
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Legal</a>
          </div>
          <a className="nav-cta" href="https://wa.me/918950013181" target="_blank" rel="noopener noreferrer">Book a Call</a>
        </nav>

        <BeamsAndGrid />

        <InfiniumLegacyHero />
      </section>

      <section className="logo-cloud reveal-on-view" aria-labelledby="logo-cloud-title">
        <div className="logo-cloud-header">
          <p className="eyebrow">Trusted operating network</p>
        </div>
        <div className="logo-marquee" aria-label="Partner brands">
          <div className="marquee-row">
            {[...partnerMarks, ...partnerMarks, ...partnerMarks, ...partnerMarks].map((mark, index) => (
              <span className="partner-logo" key={`${mark}-top-${index}`}>
                <i className={`mark-shape shape-${(index % 5) + 1}`} aria-hidden="true" />
                {mark}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">What We Do</p>
          <h2 id="services-title">Services that drive real results.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className="service-card reveal-on-view"
              key={service.title}
              style={{ '--card-delay': `${index * 0.1}s` } as CSSProperties}
            >
              <span className="service-emoji">{service.emoji}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Our Portfolio</p>
          <h2 id="work-title">Featured Work</h2>
        </div>

        <div className="project-stack">
          {caseStudiesData.map((caseStudy, index) => (
            <PremiumCaseStudy key={index} {...caseStudy} stackIndex={index} totalCards={caseStudiesData.length} />
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

              <a href="https://wa.me/918950013181" target="_blank" rel="noopener noreferrer" className={plan.popular ? 'primary-action btn-full' : 'secondary-action btn-full'}>
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
              <div className={`testimonial-card reveal-on-view ${testimonial.highlight ? 'highlight' : ''}`} key={`${testimonial.author}-${index}`} style={{ '--card-delay': `${index * 0.08}s` } as CSSProperties}>
                <div className="testimonial-header">
                  <div className="testimonial-logo">{testimonial.company.substring(0, 2).toUpperCase()}</div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <img src={`https://i.pravatar.cc/150?u=${testimonial.author.replace(' ', '')}`} alt={testimonial.author} className="author-avatar" />
                  <div className="author-info">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                    <small>{testimonial.company}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />

      <ContactForm />

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
  )
}

export default App
