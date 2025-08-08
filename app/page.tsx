
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Shield, Zap, DollarSign, Star, CheckCircle, TrendingUp, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LeadCaptureForm from '@/components/lead-capture-form';
import EmailCapture from '@/components/email-capture';
import AdSpace from '@/components/ad-space';
import AffiliateLink from '@/components/affiliate-link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Save 30-50% on Energy Costs
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Triple Pane Windows That 
                <span className="text-blue-600"> Transform </span>
                Your Home
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover premium triple pane windows from top brands like Pella, Marvin, and Andersen. 
                Cut energy bills, increase comfort, and boost home value with expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Link href="/quote" className="flex items-center">
                    Get Free Quote <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  <Link href="/guides/buying-guide" className="flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Free Buying Guide
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  No upfront costs
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Local installers
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Expert guidance
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <LeadCaptureForm 
                className="shadow-2xl border-0 bg-white"
                title="Get Your Free Window Quote"
                description="Connect with top-rated local installers"
                source="hero_form"
              />
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-indigo-100 rounded-full opacity-20"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Premium Homeowners Choose Triple Pane Windows
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investment-grade windows that deliver exceptional performance, comfort, and long-term value
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift card-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Superior Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Up to 50% better insulation than double pane windows. R-value ratings of 6-8 vs standard 3-4.
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-600 count-up">$400-$800</div>
                  <div className="text-sm text-green-700">Annual energy savings</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift card-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Increase Home Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Premium windows add 70-80% of project cost to home value, with luxury appeal buyers expect.
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600 count-up">15-25%</div>
                  <div className="text-sm text-blue-700">ROI on investment</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift card-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Ultimate Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Eliminate cold drafts, reduce noise by 50%, and maintain consistent temperatures year-round.
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-600 count-up">95%</div>
                  <div className="text-sm text-purple-700">Customer satisfaction</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Space - Top of page */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="homepage-top" className="mx-auto" />
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Triple Pane Window Brands
            </h2>
            <p className="text-xl text-gray-600">
              Compare premium options from industry-leading manufacturers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-blue-600">Pella</CardTitle>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-600">Premium wood and fiberglass frames with exceptional energy performance.</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Energy Rating:</span>
                      <span className="text-sm font-medium">★★★★★</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Price Range:</span>
                      <span className="text-sm font-medium">$800-$1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Warranty:</span>
                      <span className="text-sm font-medium">Lifetime</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <AffiliateLink 
                      href="/brands/pella"
                      className="w-full"
                      brand="Pella"
                      product="Triple Pane"
                    >
                      View Pella Options
                    </AffiliateLink>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <Link href="/articles/pella-review">Read Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-green-600">Marvin</CardTitle>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-600">Luxury windows with superior craftsmanship and unlimited customization options.</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Energy Rating:</span>
                      <span className="text-sm font-medium">★★★★★</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Price Range:</span>
                      <span className="text-sm font-medium">$1,000-$2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Warranty:</span>
                      <span className="text-sm font-medium">20 Years</span>
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
                      <Link href="/articles/marvin-review">Read Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-purple-600">Andersen</CardTitle>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-600">Trusted brand with innovative Fibrex material and comprehensive warranty coverage.</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Energy Rating:</span>
                      <span className="text-sm font-medium">★★★★☆</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Price Range:</span>
                      <span className="text-sm font-medium">$600-$1,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Warranty:</span>
                      <span className="text-sm font-medium">20 Years</span>
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
                      <Link href="/articles/andersen-review">Read Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Link href="/brands" className="flex items-center">
                Compare All Brands <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailCapture 
            title="Get the Complete Triple Pane Window Buying Guide"
            description="Join 15,000+ smart homeowners who downloaded our free guide and saved thousands"
            buttonText="Download Free Guide"
            source="homepage_guide"
          />
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Latest Window Insights</h2>
            <Button variant="outline">
              <Link href="/articles" className="flex items-center">
                View All <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/articles/thin-triple-pane-windows" className="hover:text-blue-600">
                    Thin Triple Pane Windows: Space-Saving Solutions
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how thin triple pane windows offer maximum efficiency without bulky frames...
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>5 min read</span>
                  <span>Dec 15, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/articles/window-replacement-cost" className="hover:text-blue-600">
                    2024 Window Replacement Costs: What to Expect
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete breakdown of costs, financing options, and how to maximize your investment...
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>8 min read</span>
                  <span>Dec 12, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/articles/energy-star-ratings" className="hover:text-blue-600">
                    Understanding Energy Star Ratings for Windows
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to decode window efficiency ratings and choose the best windows for your climate...
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>6 min read</span>
                  <span>Dec 10, 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Ad Space */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="homepage-bottom" className="mx-auto" />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Home with Triple Pane Windows?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get connected with top-rated local installers and start saving on energy costs today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              <Link href="/contact">Speak with Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
