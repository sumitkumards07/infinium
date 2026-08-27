import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ExternalLink, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    imageSrc: '/evara.png',
    websiteUrl: 'https://evara.me/',
  },
  {
    title: 'Shraddha Weaves',
    price: '₹1,999 /mo',
    imageSrc: '/evara.png',
    websiteUrl: 'https://shraddhaweaves.com/',
  }
];

export default function ShopifyLanding() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-50 font-sans selection:bg-red-500/30 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/20 flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-black text-sm">I</span>
            </div>
            Infinium
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <a href="#pricing" className="text-white border-b border-red-500 pb-1">Shopify Setup</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
          </div>
          
          <a href="https://wa.me/918950013181" target="_blank" rel="noopener noreferrer" 
             className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
             Contact Sales <ArrowRight size={16} />
          </a>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden">
          <Link to="/" className="text-2xl font-bold text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <a href="#pricing" className="text-2xl font-bold text-white" onClick={() => setMobileMenuOpen(false)}>Shopify Setup</a>
          <a href="#work" className="text-2xl font-bold text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="https://wa.me/918950013181" className="mt-8 px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg" onClick={() => setMobileMenuOpen(false)}>Contact Sales</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Shopify Store Setup
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]"
          >
            Build a Shopify Store <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 italic font-serif font-light">that converts.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Professional Shopify websites designed, built, and maintained as a monthly service. From new businesses to established premium brands.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-zinc-200 font-bold rounded-full transition-all">
              View Plans
            </a>
            <a href="#work" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-full transition-all">
              See our Work
            </a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto mt-24 relative z-10 border-y border-white/10 bg-black/20 backdrop-blur-md overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="flex items-center min-w-max md:min-w-0 md:grid md:grid-cols-4 divide-x divide-white/10">
            <div className="px-8 py-8 flex flex-col items-center justify-center min-w-[200px] md:min-w-0">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">150+</div>
              <div className="text-xs md:text-sm text-zinc-400 font-medium uppercase tracking-widest text-center">Project<br/>Completed</div>
            </div>
            <div className="px-8 py-8 flex flex-col items-center justify-center min-w-[200px] md:min-w-0">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
              <div className="text-xs md:text-sm text-zinc-400 font-medium uppercase tracking-widest text-center">Client<br/>Satisfaction</div>
            </div>
            <div className="px-8 py-8 flex flex-col items-center justify-center min-w-[200px] md:min-w-0">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">5+</div>
              <div className="text-xs md:text-sm text-zinc-400 font-medium uppercase tracking-widest text-center">Years of<br/>Experience</div>
            </div>
            <div className="px-8 py-8 flex flex-col items-center justify-center min-w-[200px] md:min-w-0">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">24/7</div>
              <div className="text-xs md:text-sm text-zinc-400 font-medium uppercase tracking-widest text-center">Support<br/>Available</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-zinc-950 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-3">Monthly Plans</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight">Simple, transparent pricing.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div 
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl flex flex-col h-full transition-transform hover:-translate-y-2 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-red-950/40 to-zinc-900 border border-red-500/30 shadow-2xl shadow-red-900/20' 
                    : 'bg-zinc-900/50 border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-red-600/30">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">{plan.title}</h3>
                  <p className="text-sm text-zinc-400 min-h-[60px]">{plan.description}</p>
                </div>
                
                <div className="mb-8 p-4 rounded-2xl bg-black/40 border border-white/5">
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Goal</div>
                  <div className="text-sm font-medium text-red-400 mb-4">{plan.badge}</div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Monthly</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-zinc-500">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/918950013181" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full py-4 text-center font-bold rounded-xl transition-all ${
                    plan.popular 
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20' 
                      : 'bg-white hover:bg-zinc-200 text-black'
                  }`}
                >
                  {plan.cta}
                </a>
                
                {plan.exampleUrl && (
                  <div className="mt-6 text-center">
                    <a href={plan.exampleUrl} target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 font-medium transition-colors">
                      View Live Example: {plan.exampleLabel} <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 px-6 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-3">Our Work</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight">Featured Shopify Stores</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {shopifyPortfolio.map((item, i) => (
              <motion.a 
                key={i}
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="group relative block rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50"
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-800">
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                    {/* Placeholder for the image. Assuming images exist in public/ or user updates them later */}
                    <img 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-zinc-600 font-bold">Image Preview</div>';
                      }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-red-400 font-medium">{item.price}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-md bg-red-600"></div>
                Infinium
              </Link>
              <p className="text-zinc-500 text-sm">High-fidelity digital engineering for the modern enterprise.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Solutions</h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li><Link to="/#services" className="hover:text-red-400 transition-colors">Web Systems</Link></li>
                <li><Link to="/#services" className="hover:text-red-400 transition-colors">Mobile Platforms</Link></li>
                <li><Link to="/#services" className="hover:text-red-400 transition-colors">AI Automation</Link></li>
                <li><a href="#pricing" className="hover:text-red-400 transition-colors text-red-500">Shopify Setup</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Expertise</h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li><a href="#work" className="hover:text-red-400 transition-colors">Case Studies</a></li>
                <li><Link to="/#services" className="hover:text-red-400 transition-colors">Product Design</Link></li>
                <li><a href="#pricing" className="hover:text-red-400 transition-colors">Institutional Plans</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Engage</h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li><a href="https://wa.me/918950013181" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">Start a Project</a></li>
                <li><a href="mailto:sumitkumards07@gmail.com" className="hover:text-red-400 transition-colors">Direct Email</a></li>
                <li><a href="https://x.com/SumitKumar70350" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">Twitter / X</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p>© 2026 Infinium Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
