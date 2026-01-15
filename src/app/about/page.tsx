import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Pratik Gupta Interiors',
  description: 'Learn about Pratik Gupta Interiors - our story, philosophy, and commitment to creating exceptional interior spaces.',
};

/**
 * About Page
 * Studio story, philosophy, and team information
 */

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <AnimatedSection className="text-center mb-16">
          <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">
            About Us
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Pratik Gupta Interiors
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Creating timeless spaces that inspire and elevate everyday living
          </p>
        </AnimatedSection>
      </section>

      {/* Studio Story */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] bg-charcoal/10">
              <Image
                src="/images/about/studio.jpg"
                alt="Pratik Gupta Interiors Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Founded in 2015, Pratik Gupta Interiors has grown from a passionate vision into one of India's most respected interior design studios. What began as a commitment to transforming residential spaces has evolved into a comprehensive design practice serving clients across residential, commercial, and hospitality sectors.
              </p>
              <p>
                Our journey has been guided by a simple yet powerful belief: exceptional design has the power to transform not just spaces, but lives. Every project we undertake is an opportunity to create environments that inspire, comfort, and elevate the human experience.
              </p>
              <p>
                With over 150 completed projects and a growing portfolio of award-winning designs, we continue to push boundaries while staying true to our core values of craftsmanship, innovation, and client collaboration.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-charcoal text-off-white py-24 mb-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Design Philosophy
            </h2>
            <p className="text-off-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
              We believe that great design is a harmonious blend of beauty, functionality, and authenticity
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Innovation</h3>
                <p className="text-off-white/70 leading-relaxed">
                  We embrace contemporary design trends while maintaining timeless appeal, ensuring your space remains relevant for years to come.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Craftsmanship</h3>
                <p className="text-off-white/70 leading-relaxed">
                  Meticulous attention to detail and quality materials are at the heart of every project, from concept to completion.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Collaboration</h3>
                <p className="text-off-white/70 leading-relaxed">
                  We work closely with our clients, understanding their vision and lifestyle to create truly personalized spaces.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Meet Pratik Gupta
            </h2>
            <p className="text-lg text-gold font-semibold mb-4">
              Founder & Principal Designer
            </p>
            <div className="space-y-4 text-charcoal/70 leading-relaxed mb-8">
              <p>
                With over 5+ years of experience in luxury interior design, Pratik Gupta has established himself as a visionary in the field. His work has been featured in leading design publications and has earned recognition at national and international design awards.
              </p>
              <p>
                Educated at the prestigious National Institute of Design, Pratik combines technical expertise with an artistic sensibility that has become the studio's signature. His approach is deeply rooted in understanding the cultural context, environmental considerations, and personal narratives of each project.
              </p>
              <p>
                "Design, for me, is about creating meaningful connections between people and spaces. It's about understanding how environments can enhance quality of life, inspire creativity, and bring joy to everyday moments."
              </p>
            </div>
            <div className="pt-6 border-t border-charcoal/10">
              <p className="text-sm text-charcoal/60 font-semibold uppercase tracking-wide mb-2">
                Credentials
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li>• Bachelor of Design, National Institute of Design (2009)</li>
                <li>• Member, Indian Institute of Interior Designers</li>
                <li>• Featured in Architectural Digest, Elle Decor, AD India</li>
                <li>• Winner, Best Residential Design Award 2023</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] bg-charcoal/10">
              <Image
                src="/images/about/pratik-gupta.png"
                alt="Pratik Gupta - Founder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <FadeIn delay={0}>
            <div className="text-center p-8 bg-off-white border border-charcoal/10">
              <p className="text-5xl font-serif font-bold text-gold mb-2">10+</p>
              <p className="text-charcoal/70 text-sm uppercase tracking-wide">
                Years Experience
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-center p-8 bg-off-white border border-charcoal/10">
              <p className="text-5xl font-serif font-bold text-gold mb-2">150+</p>
              <p className="text-charcoal/70 text-sm uppercase tracking-wide">
                Projects Completed
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center p-8 bg-off-white border border-charcoal/10">
              <p className="text-5xl font-serif font-bold text-gold mb-2">100%</p>
              <p className="text-charcoal/70 text-sm uppercase tracking-wide">
                Client Satisfaction
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center p-8 bg-off-white border border-charcoal/10">
              <p className="text-5xl font-serif font-bold text-gold mb-2">15+</p>
              <p className="text-charcoal/70 text-sm uppercase tracking-wide">
                Design Awards
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <FadeIn className="text-center max-w-3xl mx-auto bg-charcoal text-off-white p-16">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-off-white/80 leading-relaxed mb-8">
            Whether you're planning a complete renovation or seeking design consultation, we're here to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm hover:bg-gold/90 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
