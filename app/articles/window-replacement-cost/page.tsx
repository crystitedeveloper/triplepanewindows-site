
import React from 'react';
import Link from 'next/link';
import { Calculator, DollarSign, Home, TrendingUp, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LeadCaptureForm from '@/components/lead-capture-form';
import AdSpace from '@/components/ad-space';

export default function WindowReplacementCostArticle() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              2024 Window Replacement Costs: Complete Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get accurate pricing for triple pane window installations, financing options, 
              and tips to maximize your investment and ROI.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>December 12, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>TriplePaneWindows.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            2024 Triple Pane Window Costs
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">$800-$1,500</div>
                <div className="text-sm text-gray-600">Per Window Installed</div>
                <div className="text-xs text-gray-500 mt-2">Premium brands</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">$15K-$30K</div>
                <div className="text-sm text-gray-600">Whole House (15-20 windows)</div>
                <div className="text-xs text-gray-500 mt-2">Complete replacement</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">$200-$500</div>
                <div className="text-sm text-gray-600">Installation Cost</div>
                <div className="text-xs text-gray-500 mt-2">Per window</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">10-20 yrs</div>
                <div className="text-sm text-gray-600">Payback Period</div>
                <div className="text-xs text-gray-500 mt-2">Energy savings</div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Cost Breakdown */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cost Breakdown by Brand</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-blue-900">Pella</div>
                    <div className="text-sm text-blue-700">Premium performance, lifetime warranty</div>
                  </div>
                  <div className="text-xl font-bold text-blue-600">$1,200-$1,500</div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-green-900">Marvin</div>
                    <div className="text-sm text-green-700">Luxury customization, handcrafted</div>
                  </div>
                  <div className="text-xl font-bold text-green-600">$1,400-$2,000</div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-purple-900">Andersen</div>
                    <div className="text-sm text-purple-700">Best value, Fibrex material</div>
                  </div>
                  <div className="text-xl font-bold text-purple-600">$800-$1,200</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Costs</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <span>Professional Installation</span>
                  <span className="font-semibold">$200-$400/window</span>
                </div>
                
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <span>Trim & Finishing Work</span>
                  <span className="font-semibold">$50-$150/window</span>
                </div>
                
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <span>Old Window Disposal</span>
                  <span className="font-semibold">$25-$75/window</span>
                </div>
                
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <span>Permits & Inspections</span>
                  <span className="font-semibold">$100-$500 total</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Total Additional Costs</span>
                  <span className="font-bold">$275-$625/window</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="cost-article" className="mx-auto" />
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Financing Options
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                  Manufacturer Financing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-blue-600">0-12% APR</div>
                  <p className="text-gray-600 text-sm">
                    Many manufacturers offer promotional financing with low or no interest 
                    for qualified buyers. Terms typically range from 12-84 months.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Often 0% APR for 6-24 months</li>
                    <li>• Quick approval process</li>
                    <li>• Available through dealers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="h-5 w-5 mr-2 text-green-600" />
                  Home Equity Loan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-green-600">4-8% APR</div>
                  <p className="text-gray-600 text-sm">
                    Use your home's equity to finance window replacement. Interest may 
                    be tax-deductible if used for home improvements.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lower interest rates</li>
                    <li>• Potential tax benefits</li>
                    <li>• Longer repayment terms</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                  Personal Loan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-purple-600">6-15% APR</div>
                  <p className="text-gray-600 text-sm">
                    Unsecured personal loans for home improvement. No home equity required 
                    but typically higher interest rates.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• No collateral required</li>
                    <li>• Fast funding</li>
                    <li>• Fixed monthly payments</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Pro Tip: Calculate Your ROI</h3>
            <p className="text-blue-800">
              With energy savings of $400-$800 annually, many homeowners see a 15-25% return 
              on their window investment. Factor in increased home value and comfort improvements 
              when evaluating financing options.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadCaptureForm 
            title="Get Accurate Pricing for Your Home"
            description="Receive personalized quotes from certified installers in your area"
            source="cost_article"
            className="shadow-xl"
          />
        </div>
      </section>
    </div>
  );
}
