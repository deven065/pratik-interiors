/**
 * Project TypeScript Interfaces
 * Defines the structure for portfolio projects
 */

export type ProjectCategory = 'Residential' | 'Commercial' | 'Hospitality';

export interface ProjectImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  shortDescription: string;
  thumbnail: ProjectImage | ProjectImage[]; // Support single or multiple thumbnail images
  gallery: ProjectImage[];
  location?: string;
  year?: string;
  area?: string;
  client?: string;
  featured: boolean;
  tags?: string[];
}
