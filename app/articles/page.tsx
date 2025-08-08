
import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, Search, TrendingUp, Home, DollarSign, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AdSpace from '@/components/ad-space';

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Triple Pane Window Insights & Expert Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay informed with the latest trends, reviews, and expert advice on triple pane windows, 
              energy efficiency, and home improvement.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search articles..."
                  className="pl-10 py-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            <div className="flex items-center text-blue-600">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span className="font-medium">Trending Now</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover-lift card-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-medium">FEATURED</div>
                    <div className="text-sm text-gray-500">Dec 15, 2024</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  <Link href="/articles/thin-triple-pane-windows" className="hover:text-blue-600">
                    Thin Triple Pane Windows: The Space-Saving Revolution
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover how innovative thin triple pane windows deliver maximum energy efficiency 
                  without the bulk, perfect for retrofit applications and historic homes.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>8 min read</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Link href="/articles/thin-triple-pane-windows" className="flex items-center">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-green-600 font-medium">POPULAR</div>
                    <div className="text-sm text-gray-500">Dec 12, 2024</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  <Link href="/articles/window-replacement-cost" className="hover:text-blue-600">
                    2024 Window Replacement Costs: Complete Guide
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  Get accurate pricing for triple pane window installations, financing options, 
                  and tips to maximize your investment and ROI.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>12 min read</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Link href="/articles/window-replacement-cost" className="flex items-center">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AdSpace size="leaderboard" position="articles-top" className="mx-auto" />
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">All Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  Decode window efficiency ratings and choose the best windows for your climate zone.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>6 min read</span>
                  <span>Dec 10, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/articles/pella-review" className="hover:text-blue-600">
                    Pella Triple Pane Windows: Complete 2024 Review
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  In-depth analysis of Pella's triple pane offerings, pricing, and performance.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>10 min read</span>
                  <span>Dec 8, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/articles/marvin-review" className="hover:text-blue-600">
                    Marvin Ultimate Triple Pane: Luxury Windows Review
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore Marvin's premium triple pane windows and their exceptional craftsmanship.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>9 min read</span>
                  <span>Dec 5, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/articles/andersen-review" className="hover:text-blue-600">
                    Andersen A-Series Triple Pane: Trusted Quality
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive review of Andersen's innovative Fibrex material and performance.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>8 min read</span>
                  <span>Dec 3, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/articles/installation-guide" className="hover:text-blue-600">
                    Triple Pane Window Installation: What to Expect
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete guide to the installation process, timeline, and preparation tips.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>7 min read</span>
                  <span>Dec 1, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift card-shadow">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/articles/financing-options" className="hover:text-blue-600">
                    Window Replacement Financing: Options & Tips
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore financing solutions to make your window upgrade affordable.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>5 min read</span>
                  <span>Nov 28, 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
