import { ArrowRight, Code, Palette, Zap, CheckCircle2, Mail, Monitor, Smartphone, Globe } from 'lucide-react';
import { scrollToSection } from './ScrollToSection';
import { SECTION_SPACING, CONTAINER_CLASS } from './ThemeTokens';

export function HeroSection() {
  return (
    <section
      id="hero"
      className={`${SECTION_SPACING} pt-32 md:pt-40 pb-20 md:pb-32 relative overflow-hidden`}
      style={{
        backgroundImage: 'url(/assets/generated/bytera-hero-pattern.dim_2048x2048.png)',
        backgroundSize: '1024px 1024px',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      
      <div className={`${CONTAINER_CLASS} relative z-10`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-balance">
                <span className="block text-white font-bold drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">Bytera Studios</span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-bold italic font-body drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                engineering elegance into every pixel.
              </p>
            </div>
            
            <p className="text-lg font-bold font-body max-w-xl leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Based in regional New South Wales, Australia, we craft exceptional digital experiences 
              that blend technical precision with stunning design. Your vision, engineered to perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-accent text-white rounded-md font-bold hover:bg-accent/90 hover:text-white transition-all shadow-neon hover:shadow-neon-lg inline-flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-neon-lg border border-accent/30">
              <img
                src="/assets/generated/pulse-pixel-hero.dim_1600x900.png"
                alt="Bytera Studios showcase"
                className="w-full h-auto"
                width={1600}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Custom Web Development',
      description: 'Bespoke websites built with cutting-edge technologies. From concept to deployment, we engineer solutions that scale with your business.'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces that captivate users. We blend aesthetic excellence with user-centred design principles for memorable experiences.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimisation',
      description: 'Lightning-fast websites that convert. We optimise every pixel and byte to deliver exceptional speed and seamless interactions.'
    }
  ];

  return (
    <section id="services" className={SECTION_SPACING}>
      <div className={CONTAINER_CLASS}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-accent">Our Services</h2>
          <p className="text-lg text-muted-foreground font-body">
            Comprehensive web solutions tailored to your unique needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-lg border border-border hover:border-accent/50 transition-all hover:shadow-neon"
            >
              <div className="mb-6 text-accent group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    { number: '01', title: 'Discovery', description: 'We dive deep into your vision, goals, and target audience to craft the perfect strategy.' },
    { number: '02', title: 'Design', description: 'Our designers create stunning mockups that bring your brand to life with pixel-perfect precision.' },
    { number: '03', title: 'Development', description: 'Expert engineers transform designs into robust, scalable, and performant web applications.' },
    { number: '04', title: 'Launch & Support', description: 'We deploy your site and provide ongoing support to ensure continued success.' }
  ];

  return (
    <section id="process" className={`${SECTION_SPACING} bg-secondary/30`}>
      <div className={CONTAINER_CLASS}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-accent">Our Process</h2>
          <p className="text-lg text-muted-foreground font-body">
            A proven methodology that delivers exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$120',
      period: 'per hour',
      description: 'Perfect for small projects and quick updates',
      features: [
        'Single-page websites',
        'Responsive design',
        'Basic SEO optimisation',
        'Contact form integration',
        '1 month support'
      ]
    },
    {
      name: 'Standard',
      price: '$175',
      period: 'per hour',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-page websites',
        'Custom UI/UX design',
        'Basic SEO',
        'CMS integration',
        'E-commerce functionality',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$215',
      period: 'per hour',
      description: 'For complex applications and enterprises',
      features: [
        'Custom web applications',
        'Advanced integrations',
        'Performance optimisation',
        'Security hardening',
        'Scalable architecture',
        '6 months support'
      ]
    }
  ];

  return (
    <section id="pricing" className={SECTION_SPACING}>
      <div className={CONTAINER_CLASS}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-accent">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground font-body">
            Flexible hourly rates for projects of any size. All prices in AUD.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card rounded-lg border transition-all ${
                plan.popular
                  ? 'border-accent shadow-neon scale-105'
                  : 'border-border hover:border-accent/50 hover:shadow-elegant'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full shadow-neon">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-accent">{plan.price}</span>
                  <span className="text-muted-foreground font-body">{plan.period}</span>
                </div>
                <p className="text-muted-foreground font-body">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground font-body">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full py-3 rounded-md font-medium transition-all ${
                  plan.popular
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-neon hover:shadow-neon-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExampleWebsiteSection() {
  const features = [
    { icon: <Monitor size={24} />, title: 'Desktop Optimised', description: 'Stunning layouts for large screens' },
    { icon: <Smartphone size={24} />, title: 'Mobile Responsive', description: 'Perfect on every device' },
    { icon: <Globe size={24} />, title: 'SEO Ready', description: 'Built to rank and perform' }
  ];

  return (
    <section id="example" className={`${SECTION_SPACING} bg-secondary/30`}>
      <div className={CONTAINER_CLASS}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-accent">Example Website</h2>
          <p className="text-lg text-muted-foreground font-body">
            See the quality and attention to detail we bring to every project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              This marketing site showcases our approach to modern web design: clean aesthetics, 
              intuitive navigation, and seamless user experience. Every element is crafted with 
              purpose and precision.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="text-accent flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground font-body">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-all shadow-neon hover:shadow-neon-lg inline-flex items-center gap-2 group"
            >
              Build Your Site
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-neon-lg border border-accent/30">
              <img
                src="/assets/generated/pulse-pixel-hero.dim_1600x900.png"
                alt="Example website preview"
                className="w-full h-auto"
                width={1600}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className={SECTION_SPACING}>
      <div className={CONTAINER_CLASS}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-accent">About Bytera Studios</h2>
          <p className="text-lg text-black font-body">
            Passionate about creating digital excellence
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed font-body text-black">
              Founded in the heart of regional New South Wales, Bytera Studios emerged from a passion 
              for transforming digital visions into reality. We believe that exceptional web experiences 
              are born at the intersection of technical excellence and creative innovation.
            </p>
            
            <p className="text-lg leading-relaxed font-body text-black">
              Our team combines years of industry experience with a fresh perspective on modern web 
              development. We don't just build websites—we engineer digital solutions that drive 
              business growth, engage users, and stand the test of time.
            </p>
            
            <p className="text-lg leading-relaxed font-body text-black">
              Every project we undertake is treated with the same dedication and attention to detail, 
              whether it's a simple landing page or a complex web application. We pride ourselves on 
              our collaborative approach, working closely with clients to ensure their vision is not 
              just met, but exceeded.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-6 pt-8">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-black font-body">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className={`${SECTION_SPACING} bg-secondary/30`}>
      <div className={CONTAINER_CLASS}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-accent">Get In Touch</h2>
          <p className="text-lg text-muted-foreground font-body">
            Ready to start your project? Let's create something extraordinary together.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Email Us</h3>
                  <a 
                    href="mailto:contact@byterastudios.com" 
                    className="text-accent hover:text-accent/80 transition-colors font-body"
                  >
                    contact@byterastudios.com
                  </a>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground leading-relaxed font-body">
                  Whether you have a detailed project brief or just an idea you'd like to explore, 
                  we're here to help. Send us an email and we'll get back to you within 24 hours 
                  to discuss how we can bring your vision to life.
                </p>
              </div>
              
              <button
                onClick={() => window.location.href = 'mailto:contact@byterastudios.com'}
                className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-all shadow-neon hover:shadow-neon-lg inline-flex items-center justify-center gap-2 group"
              >
                Send Email
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Bytera Studios. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
