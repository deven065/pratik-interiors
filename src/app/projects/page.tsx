import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { getAllProjects } from '@/lib/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | Pratik Gupta Interiors',
  description: 'Explore our portfolio of luxury interior design projects including residential, commercial, and hospitality spaces.',
};

/**
 * Projects Listing Page
 * Grid with category filtering
 */

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">
            Our Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Projects
          </h1>
          <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed text-lg">
            Each project is a unique story of design, collaboration, and transformation. Explore our collection of spaces that blend aesthetics with functionality.
          </p>
        </AnimatedSection>

        {/* Projects Grid with Filter */}
        <ProjectsGrid projects={projects} showFilter={true} />
      </div>
    </div>
  );
}
