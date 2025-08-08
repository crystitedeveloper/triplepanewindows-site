
import React from 'react';
import Link from 'next/link';
import { Clock, CheckCircle, AlertCircle, Home, Users, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import LeadCaptureForm from '@/components/lead-capture-form';
import AdSpace from '@/components/ad-space';

export default function InstallationGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Triple Pane Window Installation Guide
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to know about the installation process, timeline, preparation, 
                and what to expect from start to finish.
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  2-3 days typical
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-2" />
                  Professional required
                </div>
                <div className="flex items-center">
                  <Home className="h-5 w-5 text-purple-600 mr-2" />
                  Any season
                </div>
              </div>
            </div>
            
            <div>
              <LeadCaptureForm 
                title="Get Installation Quotes"
                description="Connect with certified installers in your area"
                source="installation_guide"
                className="shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Installation Timeline & Process
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Initial Consultation & Measurement</h3>
                <p className="text-gray-600 mb-2">
                  Professional installer visits to assess your home, take precise measurements, 
                  and provide detailed quote. Typically takes 1-2 hours.
                </p>
                <div className="text-sm text-blue-600 font-medium">Timeline: Day 1 | Duration: 1-2 hours</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Ordering & Manufacturing</h3>
                <p className="text-gray-600 mb-2">
                  Custom windows are ordered and manufactured to your exact specifications. 
                  This is typically the longest part of the process.
                </p>
                <div className="text-sm text-blue-600 font-medium">Timeline: 4-8 weeks | Duration: Manufacturing time</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Pre-Installation Preparation</h3>
                <p className="text-gray-600 mb-2">
                  Remove furniture, protect flooring, set up work area. Professional team 
                  arrives with all necessary tools and materials.
                </p>
                <div className="text-sm text-blue-600 font-medium">Timeline: Installation Day | Duration: 30 minutes</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Window Removal & Installation</h3>
                <p className="text-gray-600 mb-2">
                  Careful removal of old windows, installation of new triple pane units, 
                  sealing, and insulation. Typically 2-4 windows per day.
                </p>
                <div className="text-sm text-blue-600 font-medium">Timeline: 1-3 days | Duration: 6-8 hours/day</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Final Inspection & Cleanup</h3>
                <p className="text-gray-600 mb-2">
                  Quality check of all installations, operation testing, cleanup of work areas, 
                  and review of warranty information with homeowner.
                </p>
                <div className="text-sm text-green-600 font-medium">Timeline: Final Day | Duration: 1 hour</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="installation-middle" className="mx-auto" />
        </div>
      </section>

      {/* Preparation Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pre-Installation Checklist
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Clear Access Areas</h3>
                    <p className="text-gray-600">Remove furniture and decorations within 6 feet of windows</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Protect Flooring</h3>
                    <p className="text-gray-600">Cover floors with protective materials (installer may provide)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Secure Pets</h3>
                    <p className="text-gray-600">Keep pets in a safe area away from work zones</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Remove Window Treatments</h3>
                    <p className="text-gray-600">Take down blinds, curtains, and hardware</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Clear Exterior Access</h3>
                    <p className="text-gray-600">Trim bushes and remove obstacles near windows</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What to Expect
              </h2>
              
              <div className="space-y-6">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Noise & Dust:</strong> Installation involves some noise and dust. 
                    Consider temporary relocation of sensitive items or family members.
                  </AlertDescription>
                </Alert>
                
                <Alert>
                  <Home className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Temperature Control:</strong> Your home may experience temperature 
                    fluctuations during installation. Plan accordingly for comfort.
                  </AlertDescription>
                </Alert>
                
                <Alert>
                  <Calendar className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Weather Dependency:</strong> Extreme weather may cause delays. 
                    Installers will reschedule if conditions are unsafe.
                  </AlertDescription>
                </Alert>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Pro Tip</h3>
                <p className="text-blue-800">
                  Schedule installation during mild weather seasons (spring/fall) for 
                  faster completion and better comfort during the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Warranty Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Installation Costs & Warranty
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  Installation Costs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Professional Installation</span>
                    <span className="font-semibold">$150-$400 per window</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trim & Caulking</span>
                    <span className="font-semibold">$50-$100 per window</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Disposal of Old Windows</span>
                    <span className="font-semibold">$25-$50 per window</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total Installation Cost</span>
                    <span>$225-$550 per window</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2">🛡️</span>
                  Warranty Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Installation Warranty</h4>
                    <p className="text-gray-600">1-2 years on workmanship and installation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Product Warranty</h4>
                    <p className="text-gray-600">10-20+ years on windows (varies by brand)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">What's Covered</h4>
                    <p className="text-gray-600">Manufacturing defects, seal failures, hardware issues</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">What's Not Covered</h4>
                    <p className="text-gray-600">Normal wear, damage from misuse, glass breakage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Installation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get connected with certified installers who specialize in triple pane window installation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/quote">Get Installation Quotes</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/guides/buying-guide" className="flex items-center">
                View Buying Guide <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
