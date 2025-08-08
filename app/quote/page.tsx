
import React from 'react';
import { Calculator, Clock, Shield, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LeadCaptureForm from '@/components/lead-capture-form';
import AdSpace from '@/components/ad-space';

export const metadata = {
  title: 'Get Free Triple Pane Window Quote | TriplePaneWindows.org',
  description: 'Get free quotes from top-rated local window installers. Compare prices on Pella, Marvin, Andersen triple pane windows. No obligation, fast response.',
  keywords: 'window quote, triple pane window cost, free estimate, window installation, local installers',
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Triple Pane Window Quote
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Connect with top-rated local installers and receive competitive quotes within 24 hours. 
              No upfront costs, no pressure - just honest pricing from trusted professionals.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Request Your Free Quote
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll connect you with up to 3 pre-screened installers in your area.
              </p>
              
              <LeadCaptureForm 
                title=""
                description=""
                source="quote_page"
                className="border-0 shadow-none"
              />
            </div>

            {/* Process Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                How Our Quote Process Works
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Submit Request</h4>
                  <p className="text-gray-600">
                    Tell us about your project needs, timeline, and budget preferences.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Get Matched</h4>
                  <p className="text-gray-600">
                    We'll connect you with up to 3 pre-screened, licensed installers in your area.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Compare Quotes</h4>
                  <p className="text-gray-600">
                    Receive detailed quotes within 24 hours and choose the best option for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Why Choose Our Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Pre-screened & licensed installers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm">Fast 24-hour response time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calculator className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span className="text-sm">No upfront costs or obligations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-sm">Top-rated professionals only</span>
                </div>
              </CardContent>
            </Card>

            {/* Ad Space */}
            <AdSpace size="rectangle" position="quote-sidebar" />

            {/* Testimonial */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The quote process was incredibly easy. I received three competitive quotes 
                  within a day and saved over $3,000 compared to the first company I contacted directly."
                </blockquote>
                <div className="font-medium text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-600">Denver, CO</div>
              </CardContent>
            </Card>

            {/* Popular Brands */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Brands We Work With</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Pella</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Marvin</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Andersen</span>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-3 w-3 text-gray-300" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Milgard</span>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-3 w-3 text-gray-300" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
