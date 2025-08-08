
import React from 'react';
import Link from 'next/link';
import { Star, Shield, Zap, Award, CheckCircle, DollarSign, Home, ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LeadCaptureForm from '@/components/lead-capture-form';
import AffiliateLink from '@/components/affiliate-link';
import AdSpace from '@/components/ad-space';

export default function PellaBrandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-5xl font-bold text-blue-600 mr-4">Pella</div>
                <Badge className="bg-blue-600 text-white px-3 py-1">Editor's Choice</Badge>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-lg font-semibold">4.8/5 Customer Rating</div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Pella Triple Pane Windows: Premium Performance & Lifetime Warranty
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Discover why Pella is our top choice for triple pane windows, offering exceptional 
                energy efficiency, superior craftsmanship, and industry-leading lifetime warranty coverage.
              </p>
              
              <div className="flex items-center space-x-8 mb-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  Lifetime warranty
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-2" />
                  Energy Star certified
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-purple-600 mr-2" />
                  $800-$1,500 per window
                </div>
              </div>
              
              <div className="flex gap-4">
                <AffiliateLink 
                  href="https://pella.com" 
                  brand="Pella" 
                  product="Triple Pane Collection"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Shop Pella Windows
                </AffiliateLink>
                
                <Button size="lg" variant="outline">
                  <Link href="#specifications">View Specifications</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <LeadCaptureForm 
                title="Get Pella Window Quotes"
                description="Connect with authorized Pella dealers in your area"
                source="pella_brand_page"
                className="shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Pella Triple Pane Windows?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Lifetime Warranty</h3>
                <p className="text-gray-600">Industry's best warranty coverage on all components</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Superior Efficiency</h3>
                <p className="text-gray-600">U-factors as low as 0.15 for maximum energy savings</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Multiple Materials</h3>
                <p className="text-gray-600">Wood, fiberglass, and vinyl frame options available</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Proven Quality</h3>
                <p className="text-gray-600">90+ years of window manufacturing excellence</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="pella-middle" className="mx-auto" />
        </div>
      </section>

      {/* Product Lines & Specifications */}
      <section id="specifications" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Pella Triple Pane Product Lines
          </h2>
          
          <Tabs defaultValue="impervia" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="impervia">Impervia</TabsTrigger>
              <TabsTrigger value="reserve">Reserve Traditional</TabsTrigger>
              <TabsTrigger value="encompass">Encompass</TabsTrigger>
            </TabsList>
            
            <TabsContent value="impervia" className="mt-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Pella Impervia</CardTitle>
                  <p className="text-gray-600">Premium fiberglass windows with ultimate performance</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Fiberglass construction for durability</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Triple pane glass with argon fill</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Low-E coatings for energy efficiency</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Between-the-glass blinds available</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>U-Factor:</span>
                          <span className="font-medium">0.15 - 0.18</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SHGC:</span>
                          <span className="font-medium">0.15 - 0.35</span>
                        </div>
                        <div className="flex justify-between">
                          <span>VT:</span>
                          <span className="font-medium">0.40 - 0.65</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price Range:</span>
                          <span className="font-medium">$1,200 - $1,500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reserve" className="mt-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Pella Reserve Traditional</CardTitle>
                  <p className="text-gray-600">Premium wood windows with classic aesthetics</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Solid wood interior construction</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Aluminum-clad exterior</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Traditional divided lite options</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Custom paint and stain finishes</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>U-Factor:</span>
                          <span className="font-medium">0.16 - 0.20</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SHGC:</span>
                          <span className="font-medium">0.18 - 0.40</span>
                        </div>
                        <div className="flex justify-between">
                          <span>VT:</span>
                          <span className="font-medium">0.45 - 0.70</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price Range:</span>
                          <span className="font-medium">$1,000 - $1,400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="encompass" className="mt-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Pella Encompass</CardTitle>
                  <p className="text-gray-600">Value-oriented vinyl windows with good performance</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Multi-chamber vinyl construction</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Energy-efficient glass packages</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Low maintenance requirements</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Multiple color options</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>U-Factor:</span>
                          <span className="font-medium">0.18 - 0.22</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SHGC:</span>
                          <span className="font-medium">0.20 - 0.45</span>
                        </div>
                        <div className="flex justify-between">
                          <span>VT:</span>
                          <span className="font-medium">0.50 - 0.75</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price Range:</span>
                          <span className="font-medium">$800 - $1,200</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Customers Say About Pella
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Absolutely love our new Pella triple pane windows. The difference in our energy 
                  bills is amazing, and the lifetime warranty gives us peace of mind."
                </p>
                <div className="text-sm font-medium">- Sarah M., Minnesota</div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The quality is exceptional. Our house is much quieter now, and we can actually 
                  feel the difference in temperature control. Worth every penny."
                </p>
                <div className="text-sm font-medium">- Robert K., Wisconsin</div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional installation, beautiful windows, and excellent customer service. 
                  The lifetime warranty sealed the deal for us."
                </p>
                <div className="text-sm font-medium">- Jennifer L., Michigan</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Premium Pella Windows?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get connected with authorized Pella dealers and start your journey to better energy efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AffiliateLink 
              href="https://pella.com/find-dealer" 
              brand="Pella" 
              product="Dealer Locator"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Find Pella Dealer
            </AffiliateLink>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/quote" className="flex items-center">
                Get Free Quote <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
