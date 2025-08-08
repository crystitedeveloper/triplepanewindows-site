
"use client"

import React, { useState } from 'react';
import { Mail, User, Phone, MapPin, DollarSign, Clock, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface LeadCaptureFormProps {
  title?: string;
  description?: string;
  source?: string;
  compact?: boolean;
  className?: string;
}

const LeadCaptureForm = ({ 
  title = "Get Your Free Window Quote", 
  description = "Connect with local installers and save up to 30% on energy costs",
  source = "lead_form",
  compact = false,
  className = "" 
}: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    zipCode: '',
    projectType: '',
    budget: '',
    timeline: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          zipCode: '',
          projectType: '',
          budget: '',
          timeline: '',
          notes: ''
        });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`${className} border-green-200 bg-green-50`}>
        <CardContent className="p-6 text-center">
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">
            We've received your information. Local window installers will contact you within 24 hours with your free quote.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
        {description && (
          <p className="text-gray-600 text-center text-sm">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!compact && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="pl-10"
                />
              </div>
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="pl-10"
            />
          </div>
          
          {!compact && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                    className="pl-10"
                  />
                </div>
              </div>

              <Select onValueChange={(value) => setFormData({...formData, projectType: value})}>
                <SelectTrigger className="relative">
                  <Wrench className="absolute left-3 h-4 w-4 text-gray-400" />
                  <SelectValue placeholder="Project Type" className="pl-10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="replacement">Window Replacement</SelectItem>
                  <SelectItem value="renovation">Home Renovation</SelectItem>
                  <SelectItem value="new_construction">New Construction</SelectItem>
                </SelectContent>
              </Select>

              <div className="grid md:grid-cols-2 gap-4">
                <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger className="relative">
                    <DollarSign className="absolute left-3 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Budget Range" className="pl-10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under_5k">Under $5,000</SelectItem>
                    <SelectItem value="5k_15k">$5,000 - $15,000</SelectItem>
                    <SelectItem value="15k_30k">$15,000 - $30,000</SelectItem>
                    <SelectItem value="over_30k">Over $30,000</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                  <SelectTrigger className="relative">
                    <Clock className="absolute left-3 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Timeline" className="pl-10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">ASAP</SelectItem>
                    <SelectItem value="3_months">Within 3 months</SelectItem>
                    <SelectItem value="6_months">Within 6 months</SelectItem>
                    <SelectItem value="1_year">Within 1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Additional notes or questions..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows={3}
              />
            </>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By submitting, you agree to receive quotes from local installers. No spam, unsubscribe anytime.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadCaptureForm;
