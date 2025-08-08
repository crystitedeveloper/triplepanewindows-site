
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, BookOpen, Users, Phone, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">TriplePaneWindows</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Home size={16} />
              <span>Home</span>
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <BookOpen size={16} />
                <span>Guides</span>
                <ChevronDown size={14} />
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link href="/guides/buying-guide" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    Triple Pane Buying Guide
                  </Link>
                  <Link href="/guides/installation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    Installation Guide
                  </Link>
                  <Link href="/guides/energy-savings" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    Energy Savings Calculator
                  </Link>
                  <Link href="/guides/brand-comparison" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    Brand Comparison
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/articles" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <BookOpen size={16} />
              <span>Articles</span>
            </Link>
            
            <Link href="/brands" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Users size={16} />
              <span>Brands</span>
            </Link>
            
            <Link href="/contact" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone size={16} />
              <span>Contact</span>
            </Link>
            
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="flex items-center space-x-2 px-2 py-2 text-gray-700 hover:text-blue-600">
                <Home size={16} />
                <span>Home</span>
              </Link>
              <Link href="/guides/buying-guide" className="flex items-center space-x-2 px-2 py-2 text-gray-700 hover:text-blue-600">
                <BookOpen size={16} />
                <span>Buying Guide</span>
              </Link>
              <Link href="/articles" className="flex items-center space-x-2 px-2 py-2 text-gray-700 hover:text-blue-600">
                <BookOpen size={16} />
                <span>Articles</span>
              </Link>
              <Link href="/brands" className="flex items-center space-x-2 px-2 py-2 text-gray-700 hover:text-blue-600">
                <Users size={16} />
                <span>Brands</span>
              </Link>
              <Link href="/contact" className="flex items-center space-x-2 px-2 py-2 text-gray-700 hover:text-blue-600">
                <Phone size={16} />
                <span>Contact</span>
              </Link>
              <div className="px-2">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
