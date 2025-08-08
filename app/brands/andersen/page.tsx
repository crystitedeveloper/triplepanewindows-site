
import React from 'react';
import Link from 'next/link';
import { Star, Shield, Zap, Award, CheckCircle, DollarSign, Home, ChevronRight, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LeadCaptureForm from '@/components/lead-capture-form';
import AffiliateLink from '@/components/affiliate-link';
import AdSpace from '@/components/ad-space';

export default function AndersenBrandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-5xl font-bold text-purple-600 mr-4">Andersen</div>
                <Badge className="bg-purple-600 text-white px-3 py-1">Best Value</Badge>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-6 w-6 text-gray-300" />
                </div>
                <div className="text-lg font-semibold">4.6/5 Customer Rating</div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Andersen A-Series Triple Pane: Trusted Quality & Innovation
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Experience America's most trusted window brand with innovative Fibrex® material 
                technology, excellent energy efficiency, and outstanding value for your investment.
              </p>
              
              <div className="flex items-center space-x-8 mb-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 text-purple-600 mr-2" />
                  Fibrex® material
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  20-year warranty
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  $600-$1,200 per window
                </div>
              </div>
              
              <div className="flex gap-4">
                <AffiliateLink 
                  href="https://andersenwindows.com" 
                  brand="Andersen" 
                  product="A-Series Triple Pane"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Shop Andersen Windows
                </AffiliateLink>
                
                <Button size="lg" variant="outline">
                  <Link href="#specifications">View Specifications</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <LeadCaptureForm 
                title="Get Andersen Window Quotes"
                description="Connect with authorized Andersen dealers for reliable window solutions"
                source="andersen_brand_page"
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
            Why Andersen Delivers Exceptional Value
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fibrex® Technology</h3>
                <p className="text-gray-600">Durable composite material stronger than vinyl</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Outstanding Value</h3>
                <p className="text-gray-600">Premium features at competitive prices</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Wide Availability</h3>
                <p className="text-gray-600">Extensive dealer network nationwide</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Proven Legacy</h3>
                <p className="text-gray-600">120+ years of window innovation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="andersen-middle" className="mx-auto" />
        </div>
      </section>

      {/* Product Lines & Specifications */}
      <section id="specifications" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Andersen Triple Pane Window Collections
          </h2>
          
          <Tabs defaultValue="a-series" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="a-series">A-Series</TabsTrigger>
              <TabsTrigger value="e-series">E-Series</TabsTrigger>
              <TabsTrigger value="100-series">100 Series</TabsTrigger>
            </TabsList>
            
            <TabsContent value="a-series" className="mt-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Andersen A-Series</CardTitle>
                  <p className="text-gray-600">Premium Fibrex® windows with superior performance</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Fibrex® frame construction</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Triple pane glass with argon fill</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>SmartSun™ glass technology</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Dual weatherstripping</span>
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
                          <span className="font-medium">0.50 - 0.70</span>
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
            
            <TabsContent value="e-series" className="mt-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Andersen E-Series</CardTitle>
                  <p className="text-gray-600">Architectural-grade windows for contemporary designs</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Contemporary narrow frame profiles</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Aluminum exterior cladding</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Large glass viewing areas</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Multiple operating styles</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>U-Factor:</span>
                          <span className="font-medium">0.19 - 0.25</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SHGC:</span>
                          <span className="font-medium">0.22 - 0.50</span>
                        </div>
                        <div className="flex justify-between">
                          <span>VT:</span>
                          <span className="font-medium">0.55 - 0.75</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price Range:</span>
                          <span className="font-medium">$1,000 - $1,500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="100-series" className="mt-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Andersen 100 Series</CardTitle>
                  <p className="text-gray-600">Value-focused Fibrex® windows with solid performance</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Fibrex® frame construction</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Standard glass packages</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Multiple color options</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Low maintenance requirements</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>U-Factor:</span>
                          <span className="font-medium">0.20 - 0.26</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SHGC:</span>
                          <span className="font-medium">0.25 - 0.55</span>
                        </div>
                        <div className="flex justify-between">
                          <span>VT:</span>
                          <span className="font-medium">0.50 - 0.70</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price Range:</span>
                          <span className="font-medium">$600 - $1,000</span>
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

      {/* Fibrex Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What Makes Fibrex® Special?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Stronger Than Vinyl</h3>
                    <p className="text-gray-600">Fibrex® is 2x stronger than vinyl, reducing expansion and contraction that can cause seal failure.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Low Maintenance</h3>
                    <p className="text-gray-600">Won't rot, rust, or corrode. Requires minimal maintenance over its lifetime.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Sustainable Material</h3>
                    <p className="text-gray-600">Made from 40% reclaimed wood fiber and thermoplastic polymer.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-lg font-semibold mb-4">Reclaimed Wood Fiber</div>
              <div className="text-gray-600">
                Fibrex® material combines the strength and insulating properties of wood 
                with the low-maintenance benefits of vinyl.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Customers Say About Andersen
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
                  "Great value for the money. The Fibrex material seems very durable, 
                  and our energy bills have definitely decreased since installation."
                </p>
                <div className="text-sm font-medium">- Thomas B., Ohio</div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 text-gray-300" />
                </div>
                <p className="text-gray-600 mb-4">
                  "Reliable windows from a trusted brand. Installation was smooth 
                  and the dealer was very knowledgeable about the products."
                </p>
                <div className="text-sm font-medium">- Lisa H., Texas</div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 text-gray-300" />
                </div>
                <p className="text-gray-600 mb-4">
                  "The A-Series windows look great and perform well. Good balance 
                  of features and price point for our budget."
                </p>
                <div className="text-sm font-medium">- Mark D., Indiana</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Choose Trusted Andersen Quality
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with authorized Andersen dealers and discover reliable window solutions for your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AffiliateLink 
              href="https://andersenwindows.com/find-dealer" 
              brand="Andersen" 
              product="Dealer Locator"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Find Andersen Dealer
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
