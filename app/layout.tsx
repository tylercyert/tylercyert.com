import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'Tyler Cyert - Portfolio | Cloud/IT/Software Professional',
  description: 'Professional portfolio of Tyler Cyert, showcasing expertise in cloud computing, IT infrastructure, software development, and innovative projects including productivity RPG games and web applications.',
  keywords: ['Tyler Cyert', 'Portfolio', 'Cloud Computing', 'IT Professional', 'Software Developer', 'DevOps', 'Web Development', 'React', 'Next.js', 'TypeScript', 'Productivity Tools', 'RPG Games'],
  authors: [{ name: 'Tyler Cyert' }],
  creator: 'Tyler Cyert',
  publisher: 'Tyler Cyert',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tylercyert.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tylercyert.com',
    title: 'Tyler Cyert - Portfolio | Cloud/IT/Software Professional',
    description: 'Professional portfolio showcasing cloud computing expertise, IT infrastructure, software development, and innovative productivity tools.',
    siteName: 'Tyler Cyert Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tyler Cyert - Professional Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyler Cyert - Portfolio | Cloud/IT/Software Professional',
    description: 'Professional portfolio showcasing cloud computing expertise, IT infrastructure, software development, and innovative productivity tools.',
    images: ['/og-image.jpg'],
    creator: '@tylercyert',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
