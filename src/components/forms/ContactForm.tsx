'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { contactFormSchema, ContactFormData } from '@/lib/utils/validations';
import { cn } from '@/lib/utils/cn';

/**
 * ContactForm Component
 * Form with React Hook Form and Zod validation
 */

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call (replace with actual API endpoint later)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
          Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={cn(
            'w-full px-4 py-3 border-2 bg-off-white transition-colors focus:outline-none focus:border-gold',
            errors.name ? 'border-red-500' : 'border-charcoal/20'
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={cn(
            'w-full px-4 py-3 border-2 bg-off-white transition-colors focus:outline-none focus:border-gold',
            errors.email ? 'border-red-500' : 'border-charcoal/20'
          )}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
          Phone <span className="text-charcoal/50">(Optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className={cn(
            'w-full px-4 py-3 border-2 bg-off-white transition-colors focus:outline-none focus:border-gold',
            errors.phone ? 'border-red-500' : 'border-charcoal/20'
          )}
          placeholder="+91 98765 43210"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Project Type Field */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-semibold text-charcoal mb-2">
          Project Type *
        </label>
        <select
          id="projectType"
          {...register('projectType')}
          className={cn(
            'w-full px-4 py-3 border-2 bg-off-white transition-colors focus:outline-none focus:border-gold',
            errors.projectType ? 'border-red-500' : 'border-charcoal/20'
          )}
        >
          <option value="">Select project type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Consultation">Consultation</option>
          <option value="Other">Other</option>
        </select>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
          Message *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className={cn(
            'w-full px-4 py-3 border-2 bg-off-white transition-colors focus:outline-none focus:border-gold resize-none',
            errors.message ? 'border-red-500' : 'border-charcoal/20'
          )}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={cn(
          'w-full px-8 py-4 font-semibold uppercase tracking-wider transition-all duration-300',
          isSubmitting
            ? 'bg-charcoal/50 text-off-white cursor-not-allowed'
            : 'bg-gold text-charcoal hover:bg-gold/90'
        )}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-100 border border-green-300 text-green-800 rounded"
        >
          <p className="font-semibold">Thank you for your message!</p>
          <p className="text-sm">We'll get back to you within 24 hours.</p>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-100 border border-red-300 text-red-800 rounded"
        >
          <p className="font-semibold">Oops! Something went wrong.</p>
          <p className="text-sm">Please try again or email us directly.</p>
        </motion.div>
      )}
    </form>
  );
}
