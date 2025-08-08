
import React from 'react';
import Link from 'next/link';
import { Star, Award, Shield, Zap, DollarSign, CheckCircle, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LeadCaptureForm from '@/components/lead-capture-form';
import AffiliateLink from '@/components/affiliate-link';
import AdSpace from '@/components/ad-space';

export default function BrandComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Triple Pane Window Brand Comparison Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Compare top triple pane window brands side-by-side. Features, pricing, warranties, 
              and performance ratings to help you make the best choice for your home.
            </p>
            
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Updated December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Brand Comparison
          </h2>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Brand</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Rating</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Price Range</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">U-Factor</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Warranty</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Best For</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="text-2xl font-bold text-blue-600 mr-3">Pella</div>
                        <Badge className="bg-blue-100 text-blue-800">Editor's Choice</Badge>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">4.8/5</div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold">$800-$1,500</td>
                    <td className="px-6 py-4 text-center font-semibold">0.15-0.20</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">Lifetime</td>
                    <td className="px-6 py-4 text-center">Premium Performance</td>
                    <td className="px-6 py-4 text-center">
                      <AffiliateLink href="/brands/pella" brand="Pella" product="Triple Pane">
                        View Details
                      </AffiliateLink>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="text-2xl font-bold text-green-600 mr-3">Marvin</div>
                        <Badge className="bg-green-100 text-green-800">Luxury Choice</Badge>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">4.9/5</div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold">$1,000-$2,000</td>
                    <td className="px-6 py-4 text-center font-semibold">0.14-0.18</td>
                    <td className="px-6 py-4 text-center font-semibold text-blue-600">20 Years</td>
                    <td className="px-6 py-4 text-center">Luxury Customization</td>
                    <td className="px-6 py-4 text-center">
                      <AffiliateLink href="/brands/marvin" brand="Marvin" product="Ultimate">
                        View Details
                      </AffiliateLink>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="text-2xl font-bold text-purple-600 mr-3">Andersen</div>
                        <Badge className="bg-purple-100 text-purple-800">Best Value</Badge>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <div className="text-sm text-gray-600 mt-1">4.6/5</div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold">$600-$1,200</td>
                    <td className="px-6 py-4 text-center font-semibold">0.18-0.22</td>
                    <td className="px-6 py-4 text-center font-semibold text-blue-600">20 Years</td>
                    <td className="px-6 py-4 text-center">Value & Reliability</td>
                    <td className="px-6 py-4 text-center">
                      <AffiliateLink href="/brands/andersen" brand="Andersen" product="A-Series">
                        View Details
                      </AffiliateLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="comparison-top" className="mx-auto" />
        </div>
      </section>

      {/* Detailed Brand Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Detailed Brand Analysis
          </h2>
          
          <div className="space-y-12">
            {/* Pella Analysis */}
            <Card className="shadow-xl">
              <CardHeader className="bg-blue-50 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardTitle className="text-3xl text-blue-600 mr-4">Pella</CardTitle>
                    <Badge className="bg-blue-600 text-white">Editor's Choice</Badge>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Strengths</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Lifetime warranty coverage</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Excellent energy efficiency ratings</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Wide range of styles and materials</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Strong dealer network nationwide</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Considerations</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>Higher price point than some competitors</span>
                      </div>
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>Limited customization vs luxury brands</span>
                      </div>
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>Longer lead times during peak seasons</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="font-semibold text-blue-600">Energy Efficiency</div>
                      <div className="text-2xl font-bold">9.5/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">Build Quality</div>
                      <div className="text-2xl font-bold">9.0/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-purple-600">Value</div>
                      <div className="text-2xl font-bold">8.5/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-600">Warranty</div>
                      <div className="text-2xl font-bold">10/10</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <AffiliateLink href="/brands/pella" brand="Pella" product="Triple Pane Collection">
                    View Pella Options
                  </AffiliateLink>
                  <Button variant="outline">
                    <Link href="/articles/pella-review">Read Full Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Marvin Analysis */}
            <Card className="shadow-xl">
              <CardHeader className="bg-green-50 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardTitle className="text-3xl text-green-600 mr-4">Marvin</CardTitle>
                    <Badge className="bg-green-600 text-white">Luxury Choice</Badge>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Strengths</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Unlimited customization options</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Superior craftsmanship and materials</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Best-in-class energy performance</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Made in USA quality</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Considerations</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>Highest price point in category</span>
                      </div>
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>Longest lead times for custom orders</span>
                      </div>
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>Limited dealer availability in some areas</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="font-semibold text-blue-600">Energy Efficiency</div>
                      <div className="text-2xl font-bold">10/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">Build Quality</div>
                      <div className="text-2xl font-bold">10/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-purple-600">Value</div>
                      <div className="text-2xl font-bold">7.0/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-600">Warranty</div>
                      <div className="text-2xl font-bold">8.0/10</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <AffiliateLink href="/brands/marvin" brand="Marvin" product="Ultimate Triple Pane">
                    View Marvin Options
                  </AffiliateLink>
                  <Button variant="outline">
                    <Link href="/articles/marvin-review">Read Full Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Andersen Analysis */}
            <Card className="shadow-xl">
              <CardHeader className="bg-purple-50 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardTitle className="text-3xl text-purple-600 mr-4">Andersen</CardTitle>
                    <Badge className="bg-purple-600 text-white">Best Value</Badge>
                  </div>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-6 w-6 text-gray-300" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Strengths</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Excellent value for money</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Innovative Fibrex material</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Extensive dealer network</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Good energy efficiency ratings</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Considerations</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>Lower energy efficiency than premium brands</span>
                      </div>
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>Limited high-end customization</span>
                      </div>
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>Shorter warranty period</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="font-semibold text-blue-600">Energy Efficiency</div>
                      <div className="text-2xl font-bold">8.0/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">Build Quality</div>
                      <div className="text-2xl font-bold">8.5/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-purple-600">Value</div>
                      <div className="text-2xl font-bold">9.5/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-600">Warranty</div>
                      <div className="text-2xl font-bold">8.0/10</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <AffiliateLink href="/brands/andersen" brand="Andersen" product="A-Series Triple Pane">
                    View Andersen Options
                  </AffiliateLink>
                  <Button variant="outline">
                    <Link href="/articles/andersen-review">Read Full Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA with Lead Capture */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadCaptureForm 
            title="Get Personalized Brand Recommendations"
            description="Tell us about your home and preferences, and we'll recommend the best triple pane window brand for your specific needs."
            source="brand_comparison"
            className="shadow-2xl"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Choose Your Windows?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with authorized dealers and get competitive quotes from your preferred brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/quote">Get Free Quotes</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/guides/buying-guide" className="flex items-center">
                Download Buying Guide <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
