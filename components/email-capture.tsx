
"use client"

import React, { useState } from 'react';
import { Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EmailCaptureProps {
  title?: string;
  description?: string;
  buttonText?: string;
  source?: string;
  className?: string;
}

const EmailCapture = ({
  title = "Get Free Window Buying Guide",
  description = "Join 10,000+ homeowners saving money on energy-efficient windows",
  buttonText = "Get Free Guide",
  source = "email_capture",
  className = ""
}: EmailCaptureProps) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          source,
          interests: ['triple_pane', 'energy_efficiency']
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setFirstName('');
      } else {
        console.error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <div className="text-green-600 text-3xl mb-3">✓</div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Success!</h3>
        <p className="text-green-700">Check your email for the free buying guide and weekly energy-saving tips.</p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-center mb-4">
        <Gift className="text-blue-600 h-8 w-8 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <p className="text-gray-600 text-center mb-4 text-sm">
        {description}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="First Name (Optional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full"
        />
        
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10 w-full"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : buttonText}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          Free guide + weekly energy tips. Unsubscribe anytime. No spam.
        </p>
      </form>
    </div>
  );
};

export default EmailCapture;
