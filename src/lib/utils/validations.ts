import { z } from 'zod';

/**
 * Contact Form Validation Schema
 * Using Zod for type-safe form validation
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must not exceed 50 characters' }),
  
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),
  
  phone: z
    .string()
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, {
      message: 'Please enter a valid phone number',
    })
    .optional()
    .or(z.literal('')),
  
  projectType: z.enum(['Residential', 'Commercial', 'Hospitality', 'Consultation', 'Other'], {
    message: 'Please select a project type',
  }),
  
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must not exceed 1000 characters' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
