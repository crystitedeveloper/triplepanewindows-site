
import React from 'react';
import Link from 'next/link';
import { CheckCircle, Star, DollarSign, Shield, Zap, Home, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import EmailCapture from '@/components/email-capture';
import AdSpace from '@/components/ad-space';
import AffiliateLink from '@/components/affiliate-link';

export const metadata = {
  title: 'Ultimate Triple Pane Window Buying Guide 2024 | Expert Tips',
  description: 'Complete guide to buying triple pane windows. Compare brands, costs, energy savings, installation tips. Expert recommendations for Pella, Marvin, Andersen windows.',
  keywords: 'triple pane window buying guide, best triple pane windows, window buying tips, energy efficient windows guide',
};

export default function BuyingGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Complete Triple Pane Window Buying Guide
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Everything you need to know to choose the perfect energy-efficient windows for your home
          </p>
          <div className="flex justify-center">
            <EmailCapture 
              title="Download Complete PDF Guide"
              description="Get the full 50-page guide with brand comparisons, cost calculator, and contractor checklist"
              buttonText="Download Free PDF"
              source="buying_guide_hero"
              className="max-w-md"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Home className="mr-2 h-6 w-6 text-blue-600" />
              Guide Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#benefits" className="block text-blue-600 hover:underline">1. Benefits of Triple Pane Windows</a>
                <a href="#cost-analysis" className="block text-blue-600 hover:underline">2. Cost Analysis & ROI</a>
                <a href="#energy-savings" className="block text-blue-600 hover:underline">3. Energy Savings Calculator</a>
                <a href="#brands" className="block text-blue-600 hover:underline">4. Top Brand Comparison</a>
              </div>
              <div className="space-y-2">
                <a href="#features" className="block text-blue-600 hover:underline">5. Key Features to Look For</a>
                <a href="#installation" className="block text-blue-600 hover:underline">6. Installation Considerations</a>
                <a href="#financing" className="block text-blue-600 hover:underline">7. Financing Options</a>
                <a href="#mistakes" className="block text-blue-600 hover:underline">8. Common Mistakes to Avoid</a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <section id="benefits" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <CheckCircle className="mr-3 h-8 w-8 text-green-600" />
            Why Choose Triple Pane Windows?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Superior Energy Efficiency</h3>
                    <p className="text-gray-600 mb-3">
                      Triple pane windows provide R-values of 6-8 compared to 3-4 for double pane windows, 
                      resulting in significantly better insulation.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                      <p className="text-sm text-green-700 font-medium">
                        Potential savings: $400-$800 annually on energy bills
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enhanced Comfort</h3>
                    <p className="text-gray-600 mb-3">
                      Eliminate cold drafts, reduce temperature fluctuations, and enjoy consistent 
                      indoor temperatures throughout your home.
                    </p>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                      <p className="text-sm text-blue-700 font-medium">
                        Reduce outside noise by up to 50%
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <AdSpace size="leaderboard" position="guide-benefits" className="mb-8" />
        </section>

        {/* Cost Analysis Section */}
        <section id="cost-analysis" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="mr-3 h-8 w-8 text-green-600" />
            Triple Pane Window Costs & ROI
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Budget Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">$600-$900</div>
                <p className="text-gray-600 text-sm mb-4">Per window installed</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Basic triple pane</li>
                  <li>• Vinyl or aluminum frame</li>
                  <li>• Standard glass package</li>
                  <li>• 10-15 year warranty</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-500">
              <CardHeader>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2 mx-auto w-fit">
                  Most Popular
                </div>
                <CardTitle className="text-lg">Premium Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">$900-$1,500</div>
                <p className="text-gray-600 text-sm mb-4">Per window installed</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-performance glass</li>
                  <li>• Wood or fiberglass frame</li>
                  <li>• Low-E coatings</li>
                  <li>• 20+ year warranty</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Luxury Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">$1,500-$2,500+</div>
                <p className="text-gray-600 text-sm mb-4">Per window installed</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom sizes/shapes</li>
                  <li>• Premium materials</li>
                  <li>• Advanced coatings</li>
                  <li>• Lifetime warranty</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Return on Investment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Energy Savings</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 30-50% reduction in heating/cooling costs</li>
                    <li>• $400-$800 annual savings (typical)</li>
                    <li>• Payback period: 8-15 years</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Home Value Increase</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 70-80% of cost added to home value</li>
                    <li>• Premium appeal to buyers</li>
                    <li>• Faster home sales</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Brand Comparison */}
        <section id="brands" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="mr-3 h-8 w-8 text-yellow-500" />
            Top Triple Pane Window Brands
          </h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left">Brand</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Rating</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Price Range</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Warranty</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    <div className="flex items-center">
                      Pella
                      <AffiliateLink href="/brands/pella" variant="text" className="ml-2 text-sm">
                        View Options
                      </AffiliateLink>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$800-$1,500</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Lifetime</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Balanced performance</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    <div className="flex items-center">
                      Marvin
                      <AffiliateLink href="/brands/marvin" variant="text" className="ml-2 text-sm">
                        View Options
                      </AffiliateLink>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1,000-$2,000+</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">20 Years</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Luxury/Custom</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    <div className="flex items-center">
                      Andersen
                      <AffiliateLink href="/brands/andersen" variant="text" className="ml-2 text-sm">
                        View Options
                      </AffiliateLink>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <div className="flex justify-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$600-$1,200</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">20 Years</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Trusted brand</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/quote">Get Quotes for These Brands</Link>
            </Button>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Essential Features to Look For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Glass & Coatings</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Low-E Coatings:</strong> Essential for energy efficiency. Look for dual or triple Low-E coatings.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Gas Fills:</strong> Argon or Krypton gas between panes improves insulation.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Warm Edge Spacers:</strong> Reduce heat transfer around window edges.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Frame Materials</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Fiberglass:</strong> Most durable, low maintenance, excellent insulation.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Wood:</strong> Traditional look, excellent insulation, requires maintenance.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Vinyl:</strong> Most affordable, low maintenance, good performance.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <div className="my-16">
          <EmailCapture 
            title="Get the Complete 50-Page Buying Guide"
            description="Includes cost calculator, contractor checklist, and brand comparison charts"
            buttonText="Download Complete Guide"
            source="buying_guide_middle"
          />
        </div>

        {/* Common Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Costly Mistakes to Avoid
          </h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  Mistake #1: Focusing Only on Price
                </h3>
                <p className="text-gray-700">
                  The cheapest option often costs more long-term. Factor in energy savings, 
                  durability, and warranty coverage when comparing options.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  Mistake #2: Ignoring Professional Installation
                </h3>
                <p className="text-gray-700">
                  Poor installation can reduce efficiency by 50%. Always use certified installers 
                  and ensure proper sealing and insulation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  Mistake #3: Not Checking Local Rebates
                </h3>
                <p className="text-gray-700">
                  Many utility companies and states offer rebates for energy-efficient windows. 
                  Research available incentives before purchasing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Use this guide to make an informed decision, then connect with top-rated local installers 
            for competitive quotes on your triple pane window project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/quote">Get Free Quotes</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/contact">Ask an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
