import { Service } from '@/types';

/**
 * Services Data for Pratik Gupta Interiors
 */

export const services: Service[] = [
  {
    id: '1',
    title: 'Residential Design',
    description: 'Creating bespoke living spaces that reflect your personality and lifestyle, from luxury apartments to sprawling villas.',
    features: [
      'Space planning & layout design',
      'Custom furniture design',
      'Material & finish selection',
      'Lighting design',
      'Project management',
    ],
  },
  {
    id: '2',
    title: 'Commercial Interiors',
    description: 'Designing functional and inspiring workspaces that enhance productivity and reflect your brand identity.',
    features: [
      'Office space planning',
      'Retail store design',
      'Brand environment creation',
      'Sustainable design solutions',
      'Turnkey execution',
    ],
  },
  {
    id: '3',
    title: 'Hospitality Design',
    description: 'Crafting memorable guest experiences through thoughtful design for hotels, restaurants, and resorts.',
    features: [
      'Concept development',
      'Guest room design',
      'Restaurant & bar design',
      'Lobby & public spaces',
      'Complete FF&E sourcing',
    ],
  },
  {
    id: '4',
    title: 'Consultation Services',
    description: 'Expert guidance on design decisions, material selection, and project planning to bring your vision to life.',
    features: [
      'Design consultation',
      'Color & material advice',
      'Space optimization',
      'Budget planning',
      'Vendor coordination',
    ],
  },
];

/**
 * Get all services
 */
export const getAllServices = (): Service[] => {
  return services;
};
