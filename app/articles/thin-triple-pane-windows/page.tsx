
import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ChevronRight, Home, Zap, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LeadCaptureForm from '@/components/lead-capture-form';
import AdSpace from '@/components/ad-space';

export default function ThinTriplePaneArticle() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Thin Triple Pane Windows: The Space-Saving Revolution
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how innovative thin triple pane windows deliver maximum energy efficiency 
              without the bulk, perfect for retrofit applications and historic homes.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>TriplePaneWindows.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Traditional triple pane windows have long been criticized for their bulk and weight, 
              making them challenging to install in existing homes. However, revolutionary thin 
              triple pane technology is changing the game, offering superior energy performance 
              in a sleek, retrofit-friendly profile.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Makes Thin Triple Pane Windows Different?
            </h2>
            
            <p className="mb-6">
              Traditional triple pane windows typically measure 1.5-2 inches thick, making them 
              incompatible with many existing window frames. Thin triple pane windows reduce this 
              to just 1-1.25 inches while maintaining exceptional energy performance through 
              advanced glass technology and precise engineering.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Key Innovations Behind Thin Profile
            </h3>
            
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Ultra-thin glass:</strong> High-strength glass as thin as 2-3mm per pane</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Advanced spacer technology:</strong> Minimal warm-edge spacers between panes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Optimized gas fills:</strong> Premium argon or krypton gas for maximum insulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Multiple low-E coatings:</strong> Advanced metallic coatings for energy efficiency</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* Performance Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Performance Comparison
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Standard Double Pane</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-gray-600">U-0.30</div>
                    <div className="text-sm text-gray-500">Energy Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-600">0.75"</div>
                    <div className="text-sm text-gray-500">Thickness</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Basic energy efficiency</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Standard Triple Pane</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">U-0.18</div>
                    <div className="text-sm text-gray-500">Energy Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">1.75"</div>
                    <div className="text-sm text-gray-500">Thickness</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Excellent efficiency, bulky profile</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Thin Triple Pane</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-green-600">U-0.16</div>
                    <div className="text-sm text-gray-500">Energy Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">1.0"</div>
                    <div className="text-sm text-gray-500">Thickness</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Superior efficiency, slim profile</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="thin-triple-article" className="mx-auto" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Benefits of Thin Triple Pane Technology
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Retrofit Friendly</h3>
                <p className="text-gray-600 text-sm">Fits in existing frames without structural modifications</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Superior Efficiency</h3>
                <p className="text-gray-600 text-sm">Better energy performance than standard triple pane</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Lower Install Costs</h3>
                <p className="text-gray-600 text-sm">No frame modifications reduce installation expenses</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Perfect Applications for Thin Triple Pane
            </h3>
            
            <p className="mb-6">
              Thin triple pane windows excel in specific scenarios where traditional triple pane 
              windows would be problematic or impossible to install:
            </p>

            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <span><strong>Historic home retrofits:</strong> Maintain original frame aesthetics while upgrading performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <span><strong>Existing vinyl windows:</strong> Replace glass units without changing frames</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <span><strong>Tight openings:</strong> Fit in constrained spaces where standard triple pane won't work</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <span><strong>Budget-conscious upgrades:</strong> Achieve triple pane performance at lower installation cost</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadCaptureForm 
            title="Interested in Thin Triple Pane Windows?"
            description="Get connected with installers who specialize in thin triple pane technology"
            source="thin_triple_article"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/guides/energy-savings" className="hover:text-blue-600">
                    Energy Savings Calculator
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Calculate potential savings with triple pane window upgrades.
                </p>
                <Link href="/guides/energy-savings" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/guides/installation" className="hover:text-blue-600">
                    Installation Guide
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Everything you need to know about the installation process.
                </p>
                <Link href="/guides/installation" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/guides/brand-comparison" className="hover:text-blue-600">
                    Brand Comparison
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Compare top triple pane window brands side-by-side.
                </p>
                <Link href="/guides/brand-comparison" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
