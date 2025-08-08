
import React from 'react';
import Link from 'next/link';
import { Star, Shield, Zap, Award, CheckCircle, DollarSign, Home, ChevronRight, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LeadCaptureForm from '@/components/lead-capture-form';
import AffiliateLink from '@/components/affiliate-link';
import AdSpace from '@/components/ad-space';

export default function MarvinBrandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-5xl font-bold text-green-600 mr-4">Marvin</div>
                <Badge className="bg-green-600 text-white px-3 py-1">Luxury Choice</Badge>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-lg font-semibold">4.9/5 Customer Rating</div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Marvin Ultimate Triple Pane: Luxury Windows with Unlimited Customization
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Experience the pinnacle of window craftsmanship with Marvin's Ultimate Triple Pane 
                collection. Handcrafted quality, endless customization options, and superior energy performance.
              </p>
              
              <div className="flex items-center space-x-8 mb-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Palette className="h-5 w-5 text-green-600 mr-2" />
                  Unlimited customization
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-2" />
                  Made in USA
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-purple-600 mr-2" />
                  $1,000-$2,000 per window
                </div>
              </div>
              
              <div className="flex gap-4">
                <AffiliateLink 
                  href="https://marvin.com" 
                  brand="Marvin" 
                  product="Ultimate Triple Pane"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Shop Marvin Windows
                </AffiliateLink>
                
                <Button size="lg" variant="outline">
                  <Link href="#specifications">View Specifications</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <LeadCaptureForm 
                title="Get Marvin Window Quotes"
                description="Connect with certified Marvin dealers for luxury window solutions"
                source="marvin_brand_page"
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
            Why Marvin Sets the Standard for Luxury Windows
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Unlimited Customization</h3>
                <p className="text-gray-600">Any size, shape, or design you can imagine</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Superior Efficiency</h3>
                <p className="text-gray-600">U-factors as low as 0.14 for maximum performance</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Handcrafted Quality</h3>
                <p className="text-gray-600">Precision manufacturing and attention to detail</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Made in USA</h3>
                <p className="text-gray-600">110+ years of American craftsmanship</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="marvin-middle" className="mx-auto" />
        </div>
      </section>

      {/* Product Lines & Specifications */}
      <section id="specifications" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Marvin Ultimate Triple Pane Collections
          </h2>
          
          <Tabs defaultValue="ultimate-casement" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ultimate-casement">Ultimate Casement</TabsTrigger>
              <TabsTrigger value="ultimate-double-hung">Ultimate Double Hung</TabsTrigger>
              <TabsTrigger value="signature">Signature Collection</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ultimate-casement" className="mt-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">Marvin Ultimate Casement</CardTitle>
                  <p className="text-gray-600">Premium casement windows with maximum design flexibility</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>All-wood interior construction</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Aluminum or fiberglass exterior cladding</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Multi-point locking system</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Unlimited size and shape options</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>U-Factor:</span>
                          <span className="font-medium">0.14 - 0.17</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SHGC:</span>
                          <span className="font-medium">0.15 - 0.35</span>
                        </div>
                        <div className="flex justify-between">
                          <span>VT:</span>
                          <span className="font-medium">0.42 - 0.68</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price Range:</span>
                          <span className="font-medium">$1,400 - $2,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ultimate-double-hung" className="mt-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">Marvin Ultimate Double Hung</CardTitle>
                  <p className="text-gray-600">Classic double hung windows with modern performance</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Tilt-in sashes for easy cleaning</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Integrated weatherstripping</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Traditional or contemporary profiles</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Custom divided lite patterns</span>
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
                          <span className="font-medium">0.18 - 0.40</span>
                        </div>
                        <div className="flex justify-between">
                          <span>VT:</span>
                          <span className="font-medium">0.45 - 0.70</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price Range:</span>
                          <span className="font-medium">$1,200 - $1,800</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="signature" className="mt-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">Marvin Signature Collection</CardTitle>
                  <p className="text-gray-600">Contemporary designs with ultimate architectural flexibility</p>
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
                          <span>Floor-to-ceiling window walls</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Sliding, folding, and pivot options</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Architectural glass options</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Specifications</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>U-Factor:</span>
                          <span className="font-medium">0.15 - 0.19</span>
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
                          <span className="font-medium">$1,500 - $2,500</span>
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

      {/* Customization Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Unlimited Customization Options
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Wood Species</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>• Pine</div>
                  <div>• Douglas Fir</div>
                  <div>• Mahogany</div>
                  <div>• Cherry</div>
                  <div>• White Oak</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Exterior Finishes</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>• Aluminum Clad</div>
                  <div>• Fiberglass Clad</div>
                  <div>• Natural Wood</div>
                  <div>• 50+ Paint Colors</div>
                  <div>• Anodized Options</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Glass Options</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>• Low-E Coatings</div>
                  <div>• Tinted Glass</div>
                  <div>• Decorative Glass</div>
                  <div>• Impact Glass</div>
                  <div>• Sound Control</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Hardware</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>• Multiple Finishes</div>
                  <div>• Contemporary Styles</div>
                  <div>• Traditional Options</div>
                  <div>• Premium Materials</div>
                  <div>• Custom Designs</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Customers Say About Marvin
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
                  "The craftsmanship is incredible. Every detail is perfect, and the customization 
                  options allowed us to get exactly what we wanted for our historic home."
                </p>
                <div className="text-sm font-medium">- Michael R., Vermont</div>
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
                  "Yes, they're expensive, but the quality is unmatched. These windows will 
                  last a lifetime and the energy savings are substantial."
                </p>
                <div className="text-sm font-medium">- Patricia S., Colorado</div>
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
                  "The design consultation process was exceptional. They helped us create 
                  window configurations that perfectly complement our modern architecture."
                </p>
                <div className="text-sm font-medium">- David C., California</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Marvin Luxury Windows
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with certified Marvin dealers and discover unlimited possibilities for your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AffiliateLink 
              href="https://marvin.com/find-dealer" 
              brand="Marvin" 
              product="Dealer Locator"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Find Marvin Dealer
            </AffiliateLink>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/quote" className="flex items-center">
                Get Custom Quote <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
