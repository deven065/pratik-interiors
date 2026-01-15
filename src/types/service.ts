/**
 * Service TypeScript Interfaces
 * Defines the structure for services offered
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}
