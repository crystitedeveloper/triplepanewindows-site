
import React from 'react';
import Link from 'next/link';
import { Calculator, TrendingUp, Zap, DollarSign, Home, Thermometer, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import LeadCaptureForm from '@/components/lead-capture-form';
import AdSpace from '@/components/ad-space';

export default function EnergySavingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Calculate Your Savings
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Triple Pane Window Energy Savings Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how much you could save on energy bills with triple pane windows. 
              Get personalized estimates based on your home size, climate, and current windows.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Energy Savings Calculator
              </h2>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate Your Potential Savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sqft">Home Square Footage</Label>
                      <Input id="sqft" placeholder="2,000" type="number" />
                    </div>
                    <div>
                      <Label htmlFor="windows">Number of Windows</Label>
                      <Input id="windows" placeholder="15" type="number" />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Climate Zone</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your climate zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zone1">Zone 1 (Very Hot - Florida, Hawaii)</SelectItem>
                        <SelectItem value="zone2">Zone 2 (Hot - Texas, Arizona)</SelectItem>
                        <SelectItem value="zone3">Zone 3 (Warm - Georgia, California)</SelectItem>
                        <SelectItem value="zone4">Zone 4 (Mixed - Virginia, Kansas)</SelectItem>
                        <SelectItem value="zone5">Zone 5 (Cool - Illinois, Massachusetts)</SelectItem>
                        <SelectItem value="zone6">Zone 6 (Cold - Minnesota, Maine)</SelectItem>
                        <SelectItem value="zone7">Zone 7 (Very Cold - North Dakota, Alaska)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Current Window Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select current windows" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single Pane</SelectItem>
                        <SelectItem value="double">Double Pane</SelectItem>
                        <SelectItem value="double-low-e">Double Pane Low-E</SelectItem>
                        <SelectItem value="old-double">Old Double Pane (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="energy-cost">Average Monthly Energy Bill</Label>
                    <Input id="energy-cost" placeholder="$150" type="number" />
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Calculate My Savings
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your Estimated Savings
              </h2>
              
              <div className="space-y-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                        <div>
                          <h3 className="text-lg font-semibold text-green-900">Annual Savings</h3>
                          <p className="text-sm text-green-700">Estimated energy cost reduction</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-600">$850</div>
                    </div>
                    <div className="text-sm text-green-700">
                      Based on upgrading from double pane to triple pane windows in Zone 5 climate
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Thermometer className="h-8 w-8 text-blue-600 mr-3" />
                        <div>
                          <h3 className="text-lg font-semibold text-blue-900">Energy Reduction</h3>
                          <p className="text-sm text-blue-700">Heating & cooling efficiency gain</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-blue-600">35%</div>
                    </div>
                    <div className="text-sm text-blue-700">
                      Triple pane windows can reduce energy loss by up to 50%
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Home className="h-8 w-8 text-purple-600 mr-3" />
                        <div>
                          <h3 className="text-lg font-semibold text-purple-900">Payback Period</h3>
                          <p className="text-sm text-purple-700">Time to recover investment</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-purple-600">12 yrs</div>
                    </div>
                    <div className="text-sm text-purple-700">
                      Conservative estimate including installation costs
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <LeadCaptureForm 
                  title="Get Personalized Analysis"
                  description="Receive a detailed energy audit and savings report"
                  source="energy_calculator"
                  compact={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="energy-middle" className="mx-auto" />
        </div>
      </section>

      {/* Efficiency Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Window Efficiency Comparison
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Single Pane</CardTitle>
                <div className="text-3xl font-bold text-red-600">R-1</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>U-Factor:</span>
                    <span className="font-medium">0.80-1.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Loss:</span>
                    <span className="font-medium text-red-600">High</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Minimal insulation, high energy costs, uncomfortable drafts
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Double Pane</CardTitle>
                <div className="text-3xl font-bold text-orange-600">R-3</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>U-Factor:</span>
                    <span className="font-medium">0.25-0.35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Loss:</span>
                    <span className="font-medium text-orange-600">Moderate</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Standard insulation, decent efficiency, some drafts possible
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl">Triple Pane</CardTitle>
                <div className="text-3xl font-bold text-green-600">R-6+</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>U-Factor:</span>
                    <span className="font-medium">0.15-0.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Loss:</span>
                    <span className="font-medium text-green-600">Minimal</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Superior insulation, maximum efficiency, optimal comfort
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Climate Zone Map */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Energy Savings by Climate Zone
          </h2>
          
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <div className="text-center text-gray-600 mb-4">
              <p>Interactive Climate Zone Map</p>
              <p className="text-sm">(Map visualization would be implemented here)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Cold Climates (Zones 6-7)</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$800-$1,200</div>
                <p className="text-sm text-gray-600">
                  Highest savings potential due to extended heating seasons
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Mixed Climates (Zones 4-5)</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$500-$800</div>
                <p className="text-sm text-gray-600">
                  Good savings from both heating and cooling efficiency
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Hot Climates (Zones 1-3)</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">$300-$600</div>
                <p className="text-sm text-gray-600">
                  Moderate savings primarily from cooling efficiency gains
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Saving Energy Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get personalized quotes and start your journey to lower energy bills and increased comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/quote">Get Free Energy Analysis</Link>
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
