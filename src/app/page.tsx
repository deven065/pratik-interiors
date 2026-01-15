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
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive interior design solutions tailored to your unique vision and lifestyle
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">
              Our Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Featured Projects
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Explore our curated selection of exceptional spaces that showcase our design philosophy
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <FadeIn className="text-center">
            <Link
              href="/projects"
              className="inline-block px-8 py-4 bg-charcoal text-off-white font-semibold tracking-wider uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              View All Projects
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-charcoal text-off-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Pratik Gupta Interiors
              </h2>
              <p className="text-off-white/80 leading-relaxed mb-6">
                With over a decade of experience in luxury interior design, Pratik Gupta brings a unique blend of contemporary aesthetics and timeless elegance to every project. Our design philosophy centers on creating spaces that are not only visually stunning but also deeply functional and personally meaningful.
              </p>
              <p className="text-off-white/80 leading-relaxed mb-8">
                From intimate residential retreats to grand commercial spaces, we approach each project with meticulous attention to detail, unwavering commitment to quality, and a passion for exceeding expectations.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all duration-300"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </FadeIn>

            <FadeIn direction="right" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-off-white/5 border border-off-white/10">
                  <p className="text-4xl font-serif font-bold text-gold mb-2">5+</p>
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
