
import React from 'react';
import Link from 'next/link';
import { Star, ChevronRight, Award, Shield, Zap, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdSpace from '@/components/ad-space';
import AffiliateLink from '@/components/affiliate-link';

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Top-Rated Brands
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Compare Top Triple Pane Window Brands
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Make an informed decision with our comprehensive brand comparisons, real customer reviews, 
              and expert ratings of the industry's leading manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Brands */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Premium Triple Pane Window Brands
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pella */}
            <Card className="hover-lift card-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                EDITOR'S CHOICE
              </div>
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Pella</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">4.8/5 Customer Rating</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Premium wood and fiberglass frames with industry-leading energy performance 
                    and lifetime warranty coverage.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 text-blue-600 mr-2" />
                      <span>U-Factor: 0.15-0.20</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-green-600 mr-2" />
                      <span>Lifetime Warranty</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-purple-600 mr-2" />
                      <span>$800-$1,500</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-orange-600 mr-2" />
                      <span>Energy Star</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <AffiliateLink 
                      href="/brands/pella"
                      className="w-full"
                      brand="Pella"
                      product="Triple Pane Collection"
                    >
                      View Pella Options
                    </AffiliateLink>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <Link href="/articles/pella-review">Read Full Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marvin */}
            <Card className="hover-lift card-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                LUXURY CHOICE
              </div>
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Marvin</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">4.9/5 Customer Rating</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Handcrafted luxury windows with unlimited customization options 
                    and superior architectural design flexibility.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 text-blue-600 mr-2" />
                      <span>U-Factor: 0.14-0.18</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-green-600 mr-2" />
                      <span>20 Year Warranty</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-purple-600 mr-2" />
                      <span>$1,000-$2,000</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-orange-600 mr-2" />
                      <span>Made in USA</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <AffiliateLink 
                      href="/brands/marvin"
                      className="w-full"
                      brand="Marvin"
                      product="Ultimate Triple Pane"
                    >
                      View Marvin Options
                    </AffiliateLink>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <Link href="/articles/marvin-review">Read Full Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Andersen */}
            <Card className="hover-lift card-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                BEST VALUE
              </div>
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Andersen</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <div className="text-sm text-gray-600">4.6/5 Customer Rating</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Trusted brand with innovative Fibrex material combining wood fiber 
                    and vinyl for durability and performance.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 text-blue-600 mr-2" />
                      <span>U-Factor: 0.18-0.22</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-green-600 mr-2" />
                      <span>20 Year Warranty</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-purple-600 mr-2" />
                      <span>$600-$1,200</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-orange-600 mr-2" />
                      <span>Fibrex Material</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <AffiliateLink 
                      href="/brands/andersen"
                      className="w-full"
                      brand="Andersen"
                      product="A-Series Triple Pane"
                    >
                      View Andersen Options
                    </AffiliateLink>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <Link href="/articles/andersen-review">Read Full Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="brands-middle" className="mx-auto" />
        </div>
      </section>

      {/* Brand Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Triple Pane Window Brand Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Compare key features, pricing, and performance across top brands
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Brand</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price Range</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">U-Factor</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Warranty</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-blue-600">Pella</td>
                    <td className="px-6 py-4">★★★★★</td>
                    <td className="px-6 py-4">$800-$1,500</td>
                    <td className="px-6 py-4">0.15-0.20</td>
                    <td className="px-6 py-4">Lifetime</td>
                    <td className="px-6 py-4">Premium performance</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-green-600">Marvin</td>
                    <td className="px-6 py-4">★★★★★</td>
                    <td className="px-6 py-4">$1,000-$2,000</td>
                    <td className="px-6 py-4">0.14-0.18</td>
                    <td className="px-6 py-4">20 Years</td>
                    <td className="px-6 py-4">Luxury customization</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-purple-600">Andersen</td>
                    <td className="px-6 py-4">★★★★☆</td>
                    <td className="px-6 py-4">$600-$1,200</td>
                    <td className="px-6 py-4">0.18-0.22</td>
                    <td className="px-6 py-4">20 Years</td>
                    <td className="px-6 py-4">Value & reliability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/guides/brand-comparison">View Detailed Comparison Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Choose Your Triple Pane Windows?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get personalized recommendations and connect with authorized dealers in your area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/guides/buying-guide">Download Buying Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
