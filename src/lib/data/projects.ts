import { Project } from '@/types';

/**
 * Sample Project Data for Pratik Gupta Interiors
 * Replace with real data or connect to CMS later
 */

export const projects: Project[] = [
  {
    id: '1',
    slug: 'luxury-penthouse-mumbai',
    title: 'Luxury Penthouse',
    category: 'Residential',
    shortDescription: 'A modern penthouse with panoramic city views and minimalist elegance',
    description: 'This luxury penthouse in Mumbai showcases contemporary design with a focus on open spaces, natural light, and premium materials. The design seamlessly blends functionality with aesthetic appeal, creating a sophisticated urban sanctuary.',
    thumbnail: {
      url: '/images/projects/penthouse/thumbnail.jpg',
      alt: 'Luxury Penthouse Living Room',
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        url: '/images/projects/penthouse/gallery-1.jpg',
        alt: 'Penthouse Living Room',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/penthouse/gallery-2.jpg',
        alt: 'Penthouse Bedroom',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/penthouse/gallery-3.jpg',
        alt: 'Penthouse Kitchen',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/penthouse/gallery-4.jpg',
        alt: 'Penthouse Dining Area',
        width: 1920,
        height: 1080,
      },
    ],
    location: 'Mumbai, India',
    year: '2025',
    area: '3,500 sq ft',
    client: 'Private Client',
    featured: true,
    tags: ['Modern', 'Minimalist', 'Luxury'],
  },
  {
    id: '2',
    slug: 'boutique-hotel-goa',
    title: 'Boutique Hotel Goa',
    category: 'Hospitality',
    shortDescription: 'A coastal retreat blending traditional charm with contemporary comfort',
    description: 'This boutique hotel in Goa captures the essence of coastal living while offering modern luxury. The design incorporates local materials, natural textures, and a warm color palette that complements the tropical surroundings.',
    thumbnail: {
      url: '/images/projects/hotel-goa/thumbnail.jpg',
      alt: 'Boutique Hotel Goa Lobby',
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        url: '/images/projects/hotel-goa/gallery-1.jpg',
        alt: 'Hotel Lobby',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/hotel-goa/gallery-2.jpg',
        alt: 'Hotel Suite',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/hotel-goa/gallery-3.jpg',
        alt: 'Hotel Restaurant',
        width: 1920,
        height: 1080,
      },
    ],
    location: 'Goa, India',
    year: '2024',
    area: '12,000 sq ft',
    client: 'Coastal Hospitality Group',
    featured: true,
    tags: ['Coastal', 'Boutique', 'Hospitality'],
  },
  {
    id: '3',
    slug: 'corporate-office-bangalore',
    title: 'Corporate Office',
    category: 'Commercial',
    shortDescription: 'A modern workspace designed for collaboration and creativity',
    description: 'This corporate office in Bangalore redefines the traditional workspace with open collaborative areas, private focus zones, and wellness amenities. The design prioritizes employee well-being while maintaining a professional aesthetic.',
    thumbnail: {
      url: '/images/projects/office-bangalore/thumbnail.jpg',
      alt: 'Corporate Office Reception',
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        url: '/images/projects/office-bangalore/gallery-1.jpg',
        alt: 'Office Reception',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/office-bangalore/gallery-2.jpg',
        alt: 'Open Workspace',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/office-bangalore/gallery-3.jpg',
        alt: 'Meeting Room',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/office-bangalore/gallery-4.jpg',
        alt: 'Break Area',
        width: 1920,
        height: 1080,
      },
    ],
    location: 'Bangalore, India',
    year: '2025',
    area: '8,000 sq ft',
    client: 'Tech Startup Inc.',
    featured: true,
    tags: ['Modern', 'Corporate', 'Sustainable'],
  },
  {
    id: '4',
    slug: 'villa-pune',
    title: 'Contemporary Villa',
    category: 'Residential',
    shortDescription: 'A family home that celebrates indoor-outdoor living',
    description: 'This contemporary villa in Pune is designed for a young family, featuring expansive living spaces that open to lush gardens. The design emphasizes natural materials, abundant light, and a seamless connection with nature.',
    thumbnail: {
      url: '/images/projects/villa-pune/thumbnail.jpg',
      alt: 'Contemporary Villa Exterior',
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        url: '/images/projects/villa-pune/gallery-1.jpg',
        alt: 'Villa Exterior',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/villa-pune/gallery-2.jpg',
        alt: 'Living Room',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/villa-pune/gallery-3.jpg',
        alt: 'Master Bedroom',
        width: 1920,
        height: 1080,
      },
    ],
    location: 'Pune, India',
    year: '2024',
    area: '4,200 sq ft',
    client: 'Private Client',
    featured: false,
    tags: ['Contemporary', 'Family Home', 'Indoor-Outdoor'],
  },
  {
    id: '5',
    slug: 'restaurant-delhi',
    title: 'Fine Dining Restaurant',
    category: 'Hospitality',
    shortDescription: 'An upscale dining experience with dramatic interiors',
    description: 'This fine dining restaurant in Delhi combines dramatic lighting, rich materials, and sophisticated spatial planning to create an unforgettable dining atmosphere. Every detail is carefully curated to enhance the culinary experience.',
    thumbnail: {
      url: '/images/projects/restaurant-delhi/thumbnail.jpg',
      alt: 'Fine Dining Restaurant Interior',
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        url: '/images/projects/restaurant-delhi/gallery-1.jpg',
        alt: 'Restaurant Dining Area',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/restaurant-delhi/gallery-2.jpg',
        alt: 'Private Dining Room',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/restaurant-delhi/gallery-3.jpg',
        alt: 'Bar Area',
        width: 1920,
        height: 1080,
      },
    ],
    location: 'Delhi, India',
    year: '2024',
    area: '3,000 sq ft',
    client: 'Gourmet Group',
    featured: false,
    tags: ['Fine Dining', 'Luxury', 'Atmospheric'],
  },
  {
    id: '6',
    slug: 'retail-store-mumbai',
    title: 'Fashion Retail Store',
    category: 'Commercial',
    shortDescription: 'A chic retail space that elevates the shopping experience',
    description: 'This fashion retail store in Mumbai features a minimalist design that puts the products at center stage. Clean lines, strategic lighting, and thoughtful merchandising displays create an inviting and luxurious shopping environment.',
    thumbnail: {
      url: '/images/projects/retail-mumbai/thumbnail.jpg',
      alt: 'Fashion Retail Store Interior',
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        url: '/images/projects/retail-mumbai/gallery-1.jpg',
        alt: 'Store Entrance',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/retail-mumbai/gallery-2.jpg',
        alt: 'Display Area',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/retail-mumbai/gallery-3.jpg',
        alt: 'Fitting Rooms',
        width: 1920,
        height: 1080,
      },
    ],
    location: 'Mumbai, India',
    year: '2025',
    area: '2,500 sq ft',
    client: 'Fashion Brand Co.',
    featured: false,
    tags: ['Retail', 'Minimalist', 'Boutique'],
  },
  {
    id: '7',
    slug: 'apartment-chennai',
    title: 'Urban Apartment',
    category: 'Residential',
    shortDescription: 'A compact yet spacious apartment with smart storage solutions',
    description: 'This urban apartment in Chennai maximizes every square foot through clever storage solutions and multi-functional furniture. The neutral color palette and strategic use of mirrors create an airy, spacious feel.',
    thumbnail: {
      url: '/images/projects/apartment-chennai/thumbnail.jpg',
      alt: 'Urban Apartment Living Room',
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        url: '/images/projects/apartment-chennai/gallery-1.jpg',
        alt: 'Living Room',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/apartment-chennai/gallery-2.jpg',
        alt: 'Bedroom',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/apartment-chennai/gallery-3.jpg',
        alt: 'Kitchen',
        width: 1920,
        height: 1080,
      },
    ],
    location: 'Chennai, India',
    year: '2024',
    area: '1,200 sq ft',
    client: 'Young Professional',
    featured: false,
    tags: ['Compact', 'Smart Storage', 'Modern'],
  },
  {
    id: '8',
    slug: 'spa-resort-kerala',
    title: 'Wellness Spa Resort',
    category: 'Hospitality',
    shortDescription: 'A tranquil retreat inspired by traditional Kerala architecture',
    description: 'This wellness spa resort in Kerala draws inspiration from traditional Kerala architecture while incorporating modern spa amenities. Natural materials, water features, and lush greenery create a serene healing environment.',
    thumbnail: {
      url: '/images/projects/spa-kerala/thumbnail.jpg',
      alt: 'Spa Resort Reception',
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        url: '/images/projects/spa-kerala/gallery-1.jpg',
        alt: 'Spa Reception',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/spa-kerala/gallery-2.jpg',
        alt: 'Treatment Room',
        width: 1920,
        height: 1080,
      },
      {
        url: '/images/projects/spa-kerala/gallery-3.jpg',
        alt: 'Relaxation Area',
        width: 1920,
        height: 1080,
      },
    ],
    location: 'Kerala, India',
    year: '2024',
    area: '6,000 sq ft',
    client: 'Wellness Group',
    featured: false,
    tags: ['Wellness', 'Traditional', 'Tranquil'],
  },
];

/**
 * Get all projects
 */
export const getAllProjects = (): Project[] => {
  return projects;
};

/**
 * Get featured projects (for homepage)
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

/**
 * Get project by slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
};

/**
 * Get unique project categories
 */
export const getProjectCategories = (): string[] => {
  return ['All', 'Residential', 'Commercial', 'Hospitality'];
};
