import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ApplicationModalProvider } from '@/components/ApplicationModal';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NSDRC – National Skill Development and Research Center | AISCP Certifications',
  description: 'NSDRC provides world-class online certifications backed by the American International Society of Certified Professionals (AISCP). Master your profession on your terms with flexible, research-backed curricula.',
  keywords: [
    'NSDRC',
    'AISCP',
    'National Skill Development and Research Center',
    'online certification',
    'cognitive behavior therapy',
    'AI in human resources',
    'educational psychology',
    'occupational safety and health',
    'ICOSH',
    'hospitality diploma'
  ],
  authors: [{ name: 'NSDRC Academic Directorate' }],
  openGraph: {
    title: 'NSDRC – Master Your Profession On Your Terms',
    description: 'World-class online certifications backed by the American International Society of Certified Professionals.',
    type: 'website',
    locale: 'en_US',
    siteName: 'NSDRC',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0E0904] antialiased">
        <ApplicationModalProvider>
          {/* Intro Loading Animation */}
          <LoadingScreen />

          {/* Navigation Bar */}
          <Navbar />

          {/* Main App Content with proper offset for fixed navbar */}
          <main className="flex-1 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </ApplicationModalProvider>
      </body>
    </html>
  );
}
