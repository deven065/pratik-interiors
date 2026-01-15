import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug } from '@/lib/data/projects';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Metadata } from 'next';

/**
 * Generate static params for all projects
 * This enables static generation at build time
 */
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Generate metadata for each project page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Pratik Gupta Interiors`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        Array.isArray(project.thumbnail) 
          ? project.thumbnail[0].url 
          : project.thumbnail.url
      ],
    },
  };
}

/**
 * Project Detail Page
 * Individual project with full gallery and details
 */

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <FadeIn className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-charcoal/60">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-gold transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-charcoal">{project.title}</span>
          </nav>
        </FadeIn>

        {/* Project Header */}
        <div className="mb-16">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-4 py-1 bg-gold/10 text-gold font-semibold text-sm uppercase tracking-wider">
                {project.category}
              </span>
              {project.year && (
                <span className="text-charcoal/60 text-sm">{project.year}</span>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </FadeIn>

          {/* Project Details Grid */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-charcoal/10">
              {project.location && (
                <div>
                  <p className="text-sm text-charcoal/60 font-semibold uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-charcoal">{project.location}</p>
                </div>
              )}
              {project.year && (
                <div>
                  <p className="text-sm text-charcoal/60 font-semibold uppercase tracking-wide mb-1">
                    Year
                  </p>
                  <p className="text-charcoal">{project.year}</p>
                </div>
              )}
              {project.area && (
                <div>
                  <p className="text-sm text-charcoal/60 font-semibold uppercase tracking-wide mb-1">
                    Area
                  </p>
                  <p className="text-charcoal">{project.area}</p>
                </div>
              )}
              {project.client && (
                <div>
                  <p className="text-sm text-charcoal/60 font-semibold uppercase tracking-wide mb-1">
                    Client
                  </p>
                  <p className="text-charcoal">{project.client}</p>
                </div>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Project Gallery */}
        <ProjectGallery images={project.gallery} projectTitle={project.title} />

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <FadeIn className="mt-16">
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-charcoal/5 text-charcoal/70 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        )}

        {/* CTA Section */}
        <FadeIn className="mt-24 pt-16 border-t border-charcoal/10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Interested in a Similar Project?
          </h2>
          <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise in luxury interior design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm hover:bg-gold/90 transition-all duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="inline-block px-8 py-4 border-2 border-charcoal text-charcoal font-semibold tracking-wider uppercase text-sm hover:bg-charcoal hover:text-off-white transition-all duration-300"
            >
              View More Projects
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
