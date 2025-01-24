import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { Suspense } from 'react';
import Loading from '@/components/loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduVault - Your Academic Resource Hub',
  description: 'Access organized notes, previous year questions, and comprehensive study materials for engineering students. Find resources by semester and branch.',
  keywords: 'education, study materials, engineering notes, previous year questions, academic resources, RGPV, college notes',
  authors: [{ name: 'EduVault Team' }],
  creator: 'EduVault',
  publisher: 'EduVault',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eduvault.netlify.app/',
    title: 'EduVault - Your Academic Resource Hub',
    description: 'Access organized notes, previous year questions, and comprehensive study materials for engineering students.',
    siteName: 'EduVault',
    images: [{
      url: '/logo.png',
      width: 800,
      height: 600,
      alt: 'EduVault Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduVault - Your Academic Resource Hub',
    description: 'Access organized notes, previous year questions, and comprehensive study materials for engineering students.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <Suspense fallback={<Loading />}>
              <main className="flex-1">{children}</main>
            </Suspense>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}