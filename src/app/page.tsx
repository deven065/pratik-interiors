import { Hero } from '@/components/sections/Hero';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { FadeIn } from '@/components/animations/FadeIn';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getAllServices } from '@/lib/data/services';
import { getFeaturedProjects } from '@/lib/data/projects';
import Link from 'next/link';

/**
 * Homepage
 * Hero + Services + Featured Projects + About Preview
 */

export default function HomePage() {
  const services = getAllServices();
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-off-white to-off-white/95 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <AnimatedSection className="text-center mb-20">
            <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-3">
              What We Offer
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6 tracking-tight">
              Our Services
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
            <p className="text-charcoal/75 max-w-3xl mx-auto leading-relaxed text-lg font-light">
              We provide comprehensive interior design solutions tailored to your unique vision and lifestyle
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-3">
              Our Portfolio
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6 tracking-tight">
              Featured Projects
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
            <p className="text-charcoal/75 max-w-3xl mx-auto leading-relaxed text-lg font-light">
              Explore our curated selection of exceptional spaces that showcase our design philosophy
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <FadeIn className="text-center">
            <Link
              href="/projects"
              className="group relative inline-block px-12 py-5 bg-gradient-to-r from-charcoal to-[#1a1a1a] text-off-white font-bold tracking-[0.15em] uppercase text-sm hover:shadow-2xl hover:shadow-charcoal/50 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                View All Projects
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 bg-gradient-to-br from-charcoal via-charcoal to-[#1a1a1a] text-off-white relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-3">
                About Us
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 tracking-tight leading-tight">
                Pratik Gupta Interiors
              </h2>
              <div className="w-20 h-[2px] bg-gradient-to-r from-gold to-transparent mb-8"></div>
              <p className="text-off-white/85 leading-relaxed mb-6 text-lg font-light tracking-wide">
                With over a decade of experience in luxury interior design, Pratik Gupta brings a unique blend of contemporary aesthetics and timeless elegance to every project. Our design philosophy centers on creating spaces that are not only visually stunning but also deeply functional and personally meaningful.
              </p>
              <p className="text-off-white/85 leading-relaxed mb-10 text-lg font-light tracking-wide">
                From intimate residential retreats to grand commercial spaces, we approach each project with meticulous attention to detail, unwavering commitment to quality, and a passion for exceeding expectations.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-gold font-semibold text-lg hover:gap-5 transition-all duration-300"
              >
                Learn More About Us
                <svg
                  className="w-6 h-6 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </FadeIn>

            <FadeIn direction="right" className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-gradient-to-br from-off-white/10 to-off-white/5 border border-off-white/10 hover:border-gold/50 transition-all duration-300 hover:shadow-xl backdrop-blur-sm">
                  <p className="text-5xl font-serif font-bold bg-gradient-to-r from-gold to-[#F4D03F] bg-clip-text text-transparent mb-3">5+</p>
                  <p className="text-off-white/70 text-sm uppercase tracking-wide">
                    Years Experience
                  </p>
                </div>
                <div className="p-6 bg-off-white/5 border border-off-white/10">
                  <p className="text-4xl font-serif font-bold text-gold mb-2">150+</p>
                  <p className="text-off-white/70 text-sm uppercase tracking-wide">
                    Projects Completed
                  </p>
                </div>
                <div className="p-6 bg-off-white/5 border border-off-white/10">
                  <p className="text-4xl font-serif font-bold text-gold mb-2">100%</p>
                  <p className="text-off-white/70 text-sm uppercase tracking-wide">
                    Client Satisfaction
                  </p>
                </div>
                <div className="p-6 bg-off-white/5 border border-off-white/10">
                  <p className="text-4xl font-serif font-bold text-gold mb-2">15+</p>
                  <p className="text-off-white/70 text-sm uppercase tracking-wide">
                    Design Awards
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Let's collaborate to create an interior that reflects your vision, enhances your lifestyle, and stands the test of time.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm hover:bg-gold/90 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
