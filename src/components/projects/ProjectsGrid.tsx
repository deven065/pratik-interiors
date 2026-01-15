'use client';

import { useState } from 'react';
import { Project, ProjectCategory } from '@/types';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

/**
 * ProjectsGrid Component
 * Grid layout with category filtering
 */

interface ProjectsGridProps {
  projects: Project[];
  showFilter?: boolean;
}

const categories: (ProjectCategory | 'All')[] = [
  'All',
  'Residential',
  'Commercial',
  'Hospitality',
];

export function ProjectsGrid({ projects, showFilter = true }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      {/* Filter Buttons */}
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300',
                activeCategory === category
                  ? 'bg-gold text-charcoal'
                  : 'bg-transparent text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-off-white'
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div key={project.id} layout>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-charcoal/60 text-lg">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
}
