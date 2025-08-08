
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Triple Pane Windows - Energy Efficient Windows for Your Home',
  description: 'Discover the best triple pane windows for maximum energy savings. Compare brands like Pella, Marvin, and Andersen. Get free quotes from local installers.',
  keywords: 'triple pane windows, energy efficient windows, window replacement, Pella windows, Marvin windows, energy savings, home insulation',
  authors: [{ name: 'TriplePaneWindows.org' }],
  openGraph: {
    title: 'Triple Pane Windows - Energy Efficient Windows for Your Home',
    description: 'Discover the best triple pane windows for maximum energy savings. Get free quotes from local installers.',
    url: 'https://triplepanewindows.org',
    siteName: 'Triple Pane Windows',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triple Pane Windows - Energy Efficient Windows',
    description: 'Discover the best triple pane windows for maximum energy savings.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Triple Pane Windows",
              "description": "Expert guidance on triple pane windows and energy-efficient window solutions",
              "url": "https://triplepanewindows.org",
              "telephone": "+1-800-WINDOWS",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              },
              "priceRange": "$$-$$$",
              "sameAs": []
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">TriplePaneWindows.org</h3>
                <p className="text-gray-300 mb-4 max-w-md">
                  Your trusted resource for energy-efficient triple pane windows. 
                  Compare brands, find local installers, and save money on energy costs.
                </p>
                <div className="text-sm text-gray-400">
                  © 2024 TriplePaneWindows.org - All rights reserved
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/guides/buying-guide" className="hover:text-white transition-colors">Buying Guide</a></li>
                  <li><a href="/guides/installation" className="hover:text-white transition-colors">Installation Tips</a></li>
                  <li><a href="/guides/energy-savings" className="hover:text-white transition-colors">Energy Calculator</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="/quote" className="hover:text-white transition-colors">Get Quote</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
