import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/layout/lenis-provider';
import PageTransition from '@/components/ui/page-transition';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Abhishek Shah - Full-Stack Developer',
  description:
    'Creative technologist specializing in Next.js, Three.js, and modern web applications. Based in Delhi, India.',
  keywords: [
    'Full-stack developer',
    'Next.js',
    'React',
    'TypeScript',
    'Three.js',
    'Delhi',
    'Portfolio',
  ],
  authors: [{ name: 'Abhishek Shah' }],
  openGraph: {
    title: 'Abhishek Shah - Portfolio',
    description: 'Full-stack developer portfolio showcasing modern web technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Shah - Portfolio',
    description: 'Full-stack developer portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full scroll-smooth`}
    >
      <body className="min-h-[100dvh] font-sans bg-white text-black antialiased overflow-x-hidden">
        <PageTransition />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
