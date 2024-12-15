import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pratik Kale - Web Developer & Web3 Enthusiast',
  description: 'Portfolio website of Pratik Kale - Full-Stack Developer, Web3 Enthusiast, and Startup Dreamer',
  openGraph: {
    title: 'Pratik Kale - Web Developer & Web3 Enthusiast',
    description: 'Portfolio website of Pratik Kale - Web Developer, Web3 Enthusiast, and Startup Dreamer',
    url: 'https://kalehub.com',
    siteName: 'Pratik Kale Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <Navbar />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}