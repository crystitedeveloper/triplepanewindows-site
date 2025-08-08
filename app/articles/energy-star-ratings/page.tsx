
import React from 'react';
import Link from 'next/link';
import { Star, Award, Thermometer, Sun, Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LeadCaptureForm from '@/components/lead-capture-form';
import AdSpace from '@/components/ad-space';

export default function EnergyStarRatingsArticle() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Energy Efficiency Guide
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Understanding Energy Star Ratings for Windows
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how to decode window efficiency ratings and choose the best windows for your climate zone. 
              Master U-factor, SHGC, VT, and other key metrics.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>December 10, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>TriplePaneWindows.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Energy Performance Metrics
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center text-blue-900">
                  <Thermometer className="h-6 w-6 mr-3" />
                  U-Factor (Heat Transfer)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Range:</strong> 0.10 - 1.20 (lower is better)
                  </div>
                  
                  <p className="text-gray-700">
                    Measures how well a window prevents heat from escaping. The lower the U-factor, 
                    the better the insulation. Triple pane windows typically achieve U-factors of 0.15-0.25.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Performance Levels:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Excellent (Triple Pane):</span>
                        <span className="font-medium text-green-600">0.15 - 0.20</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Good (Double Pane Low-E):</span>
                        <span className="font-medium text-blue-600">0.25 - 0.35</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fair (Standard Double Pane):</span>
                        <span className="font-medium text-orange-600">0.40 - 0.55</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Poor (Single Pane):</span>
                        <span className="font-medium text-red-600">0.80 - 1.20</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-orange-50">
                <CardTitle className="flex items-center text-orange-900">
                  <Sun className="h-6 w-6 mr-3" />
                  SHGC (Solar Heat Gain)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Range:</strong> 0.10 - 1.00 (lower blocks more heat)
                  </div>
                  
                  <p className="text-gray-700">
                    Measures how much solar heat passes through the window. Lower SHGC is better 
                    for hot climates (blocks heat), while higher SHGC can help in cold climates.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Climate Recommendations:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Hot Climates (South):</span>
                        <span className="font-medium text-blue-600">0.15 - 0.25</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mixed Climates:</span>
                        <span className="font-medium text-green-600">0.25 - 0.40</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cold Climates (North):</span>
                        <span className="font-medium text-orange-600">0.35 - 0.60</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Climate Zone Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Energy Star Requirements by Climate Zone
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-red-600">Northern Zone</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>U-Factor:</span>
                    <span className="font-medium">≤ 0.30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SHGC:</span>
                    <span className="font-medium">Any</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  AK, MN, ND, SD, WI, northern parts of other states
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-blue-600">North-Central</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>U-Factor:</span>
                    <span className="font-medium">≤ 0.30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SHGC:</span>
                    <span className="font-medium">≤ 0.40</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  IL, IN, IA, MA, MI, NH, NY, OH, PA, VT
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-green-600">South-Central</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>U-Factor:</span>
                    <span className="font-medium">≤ 0.35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SHGC:</span>
                    <span className="font-medium">≤ 0.30</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  AR, DE, KS, KY, MD, MO, NJ, OK, TN, VA, WV
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-orange-600">Southern Zone</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>U-Factor:</span>
                    <span className="font-medium">≤ 0.60</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SHGC:</span>
                    <span className="font-medium">≤ 0.25</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  AL, AZ, CA, FL, GA, HI, LA, MS, NV, NM, NC, SC, TX
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Finding Your Climate Zone</h3>
            <p className="text-blue-800">
              Energy Star climate zones are based on heating and cooling degree days. 
              Check the Energy Star website or consult with local dealers to confirm your specific zone, 
              as some states span multiple climate zones.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="energy-star-article" className="mx-auto" />
        </div>
      </section>

      {/* Additional Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Additional Performance Metrics
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-600" />
                  Visible Transmittance (VT)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600 mb-2">0.20 - 0.80</div>
                <p className="text-gray-600 text-sm mb-4">
                  Measures how much visible light passes through the window. Higher VT means more natural light.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Typical Range:</strong> 0.40-0.70 for triple pane windows
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-purple-600" />
                  Air Leakage (AL)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600 mb-2">≤ 0.30</div>
                <p className="text-gray-600 text-sm mb-4">
                  Measures air infiltration. Lower numbers indicate better sealing and energy efficiency.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Energy Star Max:</strong> 0.30 cfm/ft²
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Thermometer className="h-5 w-5 mr-2 text-green-600" />
                  Condensation Resistance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">1 - 100</div>
                <p className="text-gray-600 text-sm mb-4">
                  Higher numbers indicate better resistance to condensation formation on interior surfaces.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Good Performance:</strong> 50+ for most climates
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadCaptureForm 
            title="Find Energy Star Certified Windows"
            description="Get connected with dealers offering Energy Star certified triple pane windows"
            source="energy_star_article"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find the Perfect Windows?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Use our buying guide to select the right Energy Star certified windows for your climate zone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/guides/buying-guide">Download Buying Guide</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/guides/energy-savings" className="flex items-center">
                Calculate Savings <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
