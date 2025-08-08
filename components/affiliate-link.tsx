
"use client"

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AffiliateLinkProps {
  href: string;
  children: React.ReactNode;
  brand?: string;
  product?: string;
  className?: string;
  variant?: 'button' | 'text' | 'card';
}

const AffiliateLink = ({ 
  href, 
  children, 
  brand, 
  product, 
  className = '',
  variant = 'button'
}: AffiliateLinkProps) => {
  const trackClick = () => {
    // Track affiliate link clicks
    if (typeof window !== 'undefined') {
      // Add analytics tracking here
      console.log('Affiliate click:', { brand, product, href });
    }
  };

  const baseClasses = "inline-flex items-center space-x-1 transition-colors";
  
  if (variant === 'button') {
    return (
      <Button
        asChild
        className={`${className} relative`}
        onClick={trackClick}
      >
        <Link href={href} target="_blank" rel="noopener noreferrer nofollow">
          {children}
          <ExternalLink size={14} className="ml-1" />
        </Link>
      </Button>
    );
  }

  if (variant === 'text') {
    return (
      <Link 
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`${baseClasses} text-blue-600 hover:text-blue-800 underline ${className}`}
        onClick={trackClick}
      >
        {children}
        <ExternalLink size={12} />
      </Link>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${className}`}>
        <Link 
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block"
          onClick={trackClick}
        >
          {children}
          <div className="flex items-center mt-2 text-blue-600 text-sm">
            View on retailer site <ExternalLink size={14} className="ml-1" />
          </div>
        </Link>
      </div>
    );
  }

  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`${baseClasses} ${className}`}
      onClick={trackClick}
    >
      {children}
      <ExternalLink size={14} />
    </Link>
  );
};

export default AffiliateLink;
